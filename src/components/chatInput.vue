<template>
    <form @submit.prevent="handleSend" class="d-flex border-top p-3">
        <input v-model="newMessage" type="text" class="form-control me-2" placeholder="Type a message" />
        <button type="submit" class="btn btn-primary">Send</button>
    </form>
</template>

<script setup>
import { ref } from 'vue'
import { useChatStore } from '@/store/chatStore'

const chatStore = useChatStore()
const newMessage = ref('')

function handleSend() {
    if (newMessage.value.trim()) {
        chatStore.sendMessage(newMessage.value.trim())
        newMessage.value = ''
    }
}
</script>