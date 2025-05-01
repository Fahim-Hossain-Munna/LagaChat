<template>
    <div class="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div class="card shadow p-4" style="min-width: 550px;">
            <h4 class="text-center mb-4">Login to LagaChat</h4>
            <form @submit.prevent="handleLogin">
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input v-model="email" type="text" class="form-control" id="email" placeholder="Enter your email"
                        required />
                </div>

                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input v-model="password" type="password" class="form-control" id="password"
                        placeholder="Enter your password" required />
                </div>

                <button type="submit" class="btn btn-primary w-100">Login</button>
            </form>

            <div v-if="error" class="alert alert-danger mt-3" role="alert">
                {{ error }}
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useChatStore } from '@/store/chatStore'
import { useAuthStore } from '@/store/authStore'
import axios from 'axios'

const email = ref('')
const password = ref('')
const error = ref(null)
const router = useRouter()
const authStore = useAuthStore()
const chatStore = useChatStore()

const handleLogin = async () => {

    const response = await axios.post('login', {
        email: email.value,
        password: password.value
    })

    if (response.data.data.token != null) {
        authStore.login(response.data.data.user, response.data.data.token)
        chatStore.currentUser = response.data.data.user
        router.push('/')
    }
}


onMounted(() => {
    if (authStore.token) {
        router.push('/')
    }
})
</script>