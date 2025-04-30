<template>
    <div class="flex-grow-1 overflow-auto p-3 bg-white">
        <div v-if="chatStore.filteredMessages.length === 0">No messages</div>
        <div v-for="(message, index) in chatStore.filteredMessages" :key="index" class="mb-2">
            <div :class="message.sender === chatStore.currentUser.name ? 'text-end' : 'text-start'">
                <span class="badge bg-primary">{{ message.sender }}</span>
                <div class="d-inline-block bg-light rounded p-2 mt-1" style="max-width: 70%;">
                    {{ message.text }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useChatStore } from '@/store/chatStore'
const chatStore = useChatStore()
</script>