<template>
    <form @submit.prevent="sendMessage" class="d-flex border-top p-3">
        <input v-model="newMessage" type="text" class="form-control me-2" placeholder="Type a message" />
        <button type="submit" class="btn btn-primary">Send</button>
    </form>
</template>

<script setup>
import { ref } from 'vue'
const newMessage = ref('')

function sendMessage() {
    if (newMessage.value.trim()) {
        alert(`Send: ${newMessage.value}`)
        newMessage.value = ''
    }
}
</script>