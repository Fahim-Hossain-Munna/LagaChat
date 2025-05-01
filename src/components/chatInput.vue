<template>
    <form @submit.prevent="handleSend" class="d-flex border-top p-3">
        <input v-model="newMessage" type="text" class="form-control me-2" placeholder="Type a message" />
        <button type="submit" class="btn btn-primary">Send</button>
    </form>
</template>

<script setup>
import { ref } from 'vue'
import { useChatStore } from '@/store/chatStore'
import { useAuthStore } from '@/store/authStore'
import axios from 'axios'

const chatStore = useChatStore()
const authStore = useAuthStore()
const newMessage = ref('')
const emit = defineEmits(['messageSent'])

const handleSend = () => {
    const response = axios.post('chats/store', {
        sender_id: authStore.user.id,
        receiver_id: chatStore.selectedUser.id,
        message: newMessage.value,
    }, {
        headers: {
            Authorization: `Bearer ${authStore.token}`,
        }
    })

    emit('messageSent')
    newMessage.value = ''
}
</script>