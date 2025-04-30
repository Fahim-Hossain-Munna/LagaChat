<template>
    <div class="flex-grow-1 overflow-auto p-3 bg-white" style="height: 0;">
        <div v-for="message in messages" :key="message.id" class="mb-2">
            <div :class="message.sender === 'me' ? 'text-end' : 'text-start'">
                <span class="badge bg-primary">{{ message.sender }}</span>
                <div class="d-inline-block bg-light rounded p-2 mt-1" style="max-width: 70%;">
                    {{ message.text }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const messages = [
    { id: 1, sender: 'John', text: 'Hello!' },
    { id: 2, sender: 'me', text: 'Hi there!' },
    { id: 1, sender: 'John', text: 'Hello!' },
    { id: 2, sender: 'me', text: 'Hi there!' },
    { id: 1, sender: 'John', text: 'Hello!' },
    { id: 2, sender: 'me', text: 'Hi there!' },
    { id: 1, sender: 'John', text: 'Hello!' },
    { id: 2, sender: 'me', text: 'Hi there!' },
    { id: 1, sender: 'John', text: 'Hello!' },
    { id: 2, sender: 'me', text: 'Hi there!' },
    { id: 1, sender: 'John', text: 'Hello!' },
    { id: 2, sender: 'me', text: 'Hi there!' },
    { id: 1, sender: 'John', text: 'Hello!' },
    { id: 2, sender: 'me', text: 'Hi there!' },
    { id: 1, sender: 'John', text: 'Hello!' },
    { id: 2, sender: 'me', text: 'Hi there!' },
    { id: 1, sender: 'John', text: 'Hello!' },
    { id: 2, sender: 'me', text: 'Hi there!' },
    { id: 1, sender: 'John', text: 'Hello!' },
    { id: 2, sender: 'me', text: 'Hi there!' },
    { id: 1, sender: 'John', text: 'Hello!' },
    { id: 2, sender: 'me', text: 'Hi there!' },
    { id: 1, sender: 'John', text: 'Hello!' },
    { id: 2, sender: 'me', text: 'Hi there!' },
    { id: 1, sender: 'John', text: 'Hello!' },
    { id: 2, sender: 'me', text: 'Hi there!' },
    { id: 1, sender: 'John', text: 'Hello!' },
    { id: 2, sender: 'me', text: 'Hi there!' },
    { id: 1, sender: 'John', text: 'Hello!' },
    { id: 2, sender: 'me', text: 'Hi there!' },
    { id: 1, sender: 'John', text: 'Hello!' },
    { id: 2, sender: 'me', text: 'Hi there!' },
    { id: 1, sender: 'John', text: 'Hello!' },
    { id: 2, sender: 'me', text: 'Hi there!' },
    { id: 1, sender: 'John', text: 'Hello!' },
    { id: 2, sender: 'me', text: 'Hi there!' },
    { id: 1, sender: 'John', text: 'Hello!' },
    { id: 2, sender: 'me', text: 'Hi there!' },
    { id: 1, sender: 'John', text: 'Hello!' },
    { id: 2, sender: 'me', text: 'Hi there!' },
]
</script>