<template>
    <div class="vh-100 d-flex flex-column">
        <HeaderBar />
        <div class="d-flex flex-grow-1">
            <ChatSidebar :users="users" />
            <div class="flex-grow-1 d-flex flex-column">
                <ChatMessages />
                <ChatInput />
            </div>
        </div>
    </div>
</template>

<script setup>
import HeaderBar from '../components/Header.vue'
import ChatSidebar from '../components/chatSidebar.vue'
import ChatMessages from '../components/chatMessages.vue'
import ChatInput from '../components/chatInput.vue'
import { ref } from 'vue'

// You can also move this to Pinia if users are dynamic
const users = ref([
    { id: 1, name: 'John' },
    { id: 2, name: 'Alice' }
]);
</script>