<template>
    <div class="border-end p-3 bg-light" style="width: 500px;">
        <h6 class="text-success">Active users</h6>
        <ul class="list-group">
            <li v-for="user in users" :key="user.id" class="list-group-item"
                :class="{ 'active': chatStore.selectedUser && chatStore.selectedUser.id === user.id }"
                @click="activeUser(user)">
                {{ user.name }}
            </li>
        </ul>
    </div>
</template>

<script setup>
import { useChatStore } from '@/store/chatStore'
import { ref } from 'vue'
defineProps(['users'])
const chatStore = useChatStore()

const activeUser = (user) => {
    chatStore.selectUser(user)
}

</script>


<style scoped>
.active {
    background-color: #007bff;
    color: #fff;
}
</style>