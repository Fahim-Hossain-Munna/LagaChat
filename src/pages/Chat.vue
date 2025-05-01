<template>
    <div class="vh-100 d-flex flex-column">
        <HeaderBar />
        <div class="d-flex flex-grow-1">
            <ChatSidebar :users="users" @selectUser="handleSelectUser" />
            <div class="flex-grow-1 d-flex flex-column">
                <ChatMessages :messages="messages" />
                <ChatInput @messageSent="handleSelectUser" />
            </div>
        </div>
    </div>
</template>

<script setup>
import HeaderBar from '../components/Header.vue'
import ChatSidebar from '../components/chatSidebar.vue'
import ChatMessages from '../components/chatMessages.vue'
import ChatInput from '../components/chatInput.vue'
import { onMounted, ref } from 'vue'
import { useAuthStore } from '@/store/authStore'
import { useChatStore } from '@/store/chatStore'
import { useRouter } from 'vue-router'
import axios from 'axios'

const router = useRouter()
const authStore = useAuthStore()
const chatStore = useChatStore()

// You can also move this to Pinia if users are dynamic
const users = ref([])
const messages = ref([])


onMounted(async () => {
    if (!authStore.token) {
        router.push('/login')
    }

    handleSelectUser(null)

    const response = await axios.get('users', {
        headers: {
            Authorization: authStore.token
        }
    })

    if (response.data.data.users) {
        users.value = response.data.data.users
    }

})

const handleSelectUser = async (user = null) => {
    const response = await axios.get('chats',
        {
            headers: {
                Authorization: `Bearer ${authStore.token}`
            },
            params: {
                receiver_id: chatStore.selectedUser?.id,
                sender_id: authStore.user.id
            }
        });

    messages.value = response.data.data.chats
}


</script>