<template>
  <div class="login-page">
    <div class="card">
      <h2>Sign in</h2>

      <p-message v-if="message" :severity="message.severity" :text="message.text" />

      <div class="p-fluid">
        <label for="email">Email</label>
        <input id="email" type="text" v-model="form.email" class="p-inputtext p-component" placeholder="you@example.com" />

        <label for="password">Password</label>
        <input id="password" type="password" v-model="form.password" class="p-inputtext p-component" placeholder="••••••••" />

        <div class="actions">
          <Button class="p-button p-component p-button-primary" :disabled="loading" @click.prevent="onSubmit">
            <span v-if="!loading">Login</span>
            <span v-else>Signing in...</span>
          </Button>
        </div>
      </div>

      <small class="hint">PrimeVue components used; auth service ready to implement.</small>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { reactive, ref } from 'vue'
  import Button from 'primevue/button';
  // Simple UI-message shape
  const message = ref<{ severity: string; text: string } | null>(null)
  const loading = ref(false)

  const form = reactive({
    email: '',
    password: ''
  })

  const authService = {
    // Implement this: call API to authenticate user and return a Promise
    login(email: string, password: string) {
      return new Promise((resolve, reject) => {
        // Placeholder: simulate network delay
        setTimeout(() => {
          // Replace with real validation / API call
          if (email === 'demo@example.com' && password === 'password') {
            resolve({ id: 1, email })
          } else {
            reject(new Error('Invalid credentials'))
          }
        }, 800)
      })
    },

  // Implement storing token/session logic
  logout() {
    // e.g. remove tokens from storage
    return Promise.resolve()
  },

  // Optionally fetch current user/session
  getCurrentUser() {
    // e.g. return user object or null
    return null
  }
}

  function onSubmit() {
    message.value = null
    loading.value = true

    authService.login(form.email, form.password)
      .then((user: any) => {
        message.value = { severity: 'success', text: 'Welcome ' + user.email }
        // TODO: navigate to app, store token, etc.
      })
      .catch((err: { message: string }) => {
        message.value = { severity: 'error', text: err.message || 'Login failed' }
      })
      .finally(() => {
        loading.value = false
      })
  }
</script>

<style scoped>
.login-page{
  display:flex;align-items:center;justify-content:center;height:100vh;background:#f5f5f5;padding:2rem;
}
.card{background:#fff;padding:2rem;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.1);width:320px}
.p-fluid label{display:block;margin-top:1rem;font-size:0.9rem;color:#444}
.p-inputtext{width:100%;padding:.5rem;margin-top:.25rem}
.actions{margin-top:1.5rem}
.p-button{width:100%;padding:.6rem}
.hint{display:block;margin-top:1rem;color:#888}
</style>
