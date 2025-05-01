<template>
    <div class="flex-grow-1 overflow-auto p-3 bg-white">
        <div v-if="messages.length === 0">No messages</div>
        <div v-for="(message, index) in messages" :key="index" class="mb-2">
            <div :class="message.sender_id === authStore.user.id ? 'text-end' : 'text-start'">
                <span class="badge bg-primary">{{ message.message }}</span>
                <div class="d-inline-block bg-light rounded p-2 mt-1" style="max-width: 70%;">
                    {{ message.user.name }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useChatStore } from '@/store/chatStore'
import { useAuthStore } from '@/store/authStore';
import { onMounted, ref, watch } from 'vue';
import axios from 'axios';

defineProps(['messages'])

const authStore = useAuthStore()
const chatStore = useChatStore()

</script>