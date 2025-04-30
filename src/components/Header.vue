<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
        <div class="container-fluid">
            <a class="navbar-brand fw-bold" href="#">LagaChat</a>

            <div class="ms-auto d-flex align-items-center">
                <div v-if="user" class="dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        {{ user.name }}
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end">
                        <li><a class="dropdown-item" href="#">Profile</a></li>
                        <li>
                            <button class="dropdown-item" @click="logout">Logout</button>
                        </li>
                    </ul>
                </div>
                <div v-else>
                    <router-link to="/login" class="btn btn-outline-primary">Login</router-link>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'

// Simulate auth (use real store/auth composable in production)
const user = ref(null)
const router = useRouter()

onMounted(() => {
    const savedUser = localStorage.getItem('user')
    if (savedUser) {
        user.value = JSON.parse(savedUser)
    }
})

function logout() {
    localStorage.removeItem('user')
    router.push('/login')
}
</script>