<template>
  <div class="login">
    <div
      class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8"
    >
      <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <h2
          class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900"
        >
          Sign in to your account
        </h2>
      </div>

      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form action="#" method="POST">
            <div>
              <label
                for="email"
                class="block text-sm font-medium leading-5 text-gray-700"
              >
                Username
              </label>
              <div class="mt-1 rounded-md shadow-sm">
                <input
                  id="username"
                  v-model="credentials.username"
                  type="text"
                  required
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>

            <div class="mt-6">
              <label
                for="password"
                class="block text-sm font-medium leading-5 text-gray-700"
              >
                Password
              </label>
              <div class="mt-1 rounded-md shadow-sm">
                <input
                  id="password"
                  v-model="credentials.password"
                  type="password"
                  required
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>

            <div class="mt-6 flex items-center justify-between">
              <div class="flex items-center">
                <input
                  id="remember_me"
                  type="checkbox"
                  class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                />
                <label
                  for="remember_me"
                  class="ml-2 block text-sm leading-5 text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div class="text-sm leading-5">
                <a
                  href="#"
                  class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div class="mt-6">
              <span class="block w-full rounded-md shadow-sm">
                <button
                  type="submit"
                  class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                  @click.prevent="onSubmitLogin"
                >
                  Sign in
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import gql from 'graphql-tag'

  export default {
    name: 'Login',
    data() {
      return {
        isAuthenticated: false,
        submitting: false,
        errors: false,
        success: null,
        credentials: {
          clientMutationId: 'will-be-removed-eventualy', // will likely be made optional soon https://github.com/wp-graphql/wp-graphql/issues/1123
          username: '',
          password: '',
        },
        form: null,
      }
    },
    mounted() {
      this.isAuthenticated = !!this.$apolloHelpers.getToken()
    },
    apollo: {
      viewer: gql`
        {
          viewer {
            databaseId
            jwtAuthToken
            jwtAuthExpiration
            nickname
          }
        }
      `,
    },
    methods: {
      async onSubmitLogin() {
        if (!this.errors) {
          this.submitting = true
          const credentials = this.credentials

          try {
            const res = await this.$apollo
              .mutate({
                mutation: gql`
                  mutation LoginMutation(
                    $username: String!
                    $password: String!
                    $clientMutationId: String!
                  ) {
                    login(
                      input: {
                        clientMutationId: $clientMutationId
                        username: $username
                        password: $password
                      }
                    ) {
                      authToken
                      user {
                        nickname
                      }
                    }
                  }
                `,
                variables: credentials,
              })
              .then(({ data }) => data && data.login)

            await this.$apolloHelpers.onLogin(res.authToken, undefined, 7)

            this.success = res
            this.isAuthenticated = true
            this.submitting = false
          } catch (e) {
            this.submitting = false
          }
        }
      },
    },
  }
</script>
