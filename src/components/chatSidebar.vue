<template>
    <!-- <div class="border-end p-3 bg-light" style="width: 500px;">
        <h6 class="text-success">Active users</h6>
        <ul class="list-group">
            <li v-for="user in users" :key="user.id" class="list-group-item"
                :class="{ 'active': chatStore.selectedUser && chatStore.selectedUser.id === user.id }"
                @click="activeUser(user)">
                {{ user.name }}
            </li>
        </ul>
    </div> -->

    <aside
        class="w-full lg:w-2/4 xl:w-1/3 h-[50vh] lg:h-full border-r bg-gray-100 p-2 lg:p-3 rounded-2xl overflow-hidden">
        <div class="bg-white rounded-2xl h-full max-h-[90vh] overflow-auto">
            <!-- Search and Sellers List -->
            <div class="p-2 lg:p-4 border-b relative">
                <input type="text" placeholder="Search Seller"
                    class="w-full pl-10 py-3 md:py-4 pr-4 border rounded-lg text-sm md:text-base" />
                <img src="" alt="search"
                    class="w-5 h-5 lg:w-6 lg:h-6 absolute top-[50%] translate-y-[-50%] left-4 lg:left-8">
            </div>
            <!-- Seller List -->
            <ul class="divide-y divide-gray-50 p-1 xl:p-4">
                <li v-for="i in 5" @click="handleClick(i)"
                    class="flex items-start justify-between p-2 xl:p-4 transition-all duration-500 rounded-lg cursor-pointer"
                    :class="activeIndex == i ? 'bg-pink-100 hover:bg-pink-100' : 'bg-white hover:bg-gray-100'">
                    <div class="flex items-center flex-wrap gap-1 space-x-1 lg:space-x-3">
                        <img src="http://127.0.0.1:8000/default/profile.jpg" alt=""
                            class="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full border"
                            :class="activeIndex == i ? 'border-red-500' : 'border-white'">
                        <div>
                            <div class="font-semibold text-xs lg:text-base"
                                :class="activeIndex == i ? 'text-red-500' : 'text-gray-900'">
                                Dhaka Mart - {{ i }}
                            </div>
                            <div class="text-xs text-gray-600 line-clamp-2">
                                omg, this is amazingsdffdfddgddg
                            </div>
                        </div>
                    </div>
                    <div class="text-xs text-gray-500 whitespace-nowrap">6 min ago</div>
                </li>
            </ul>
        </div>
    </aside>
</template>

<script setup>
import { useChatStore } from '@/store/chatStore'
import { useAuthStore } from '@/store/authStore'
import { ref } from 'vue'

defineProps(['users'])
const chatStore = useChatStore()
const authStore = useAuthStore()

const emit = defineEmits(['selectUser'])

const activeUser = (user) => {
    chatStore.selectUser(user)
    chatStore.currentUser = authStore.user
    emit('selectUser', user)
}

</script>


<style scoped>
.active {
    background-color: #007bff;
    color: #fff;
}
</style>