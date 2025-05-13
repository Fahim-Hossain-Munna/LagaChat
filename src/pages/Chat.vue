<template>
    <!-- <div class="vh-100 d-flex flex-column">
        <HeaderBar />
        <div class="flex-1 overflow-hidden p-3">
            <div class="flex flex-col lg:flex-row h-full overflow-hidden p-3 bg-white gap-2 lg:gap-4 rounded-2xl">
                <ChatSidebar :users="users" @selectUser="handleSelectUser" />
                <ChatMessages :messages="messages" />
                <ChatInput @messageSent="handleSelectUser" />
            </div>
        </div>
    </div> -->

    <div class="flex-1 overflow-hidden p-3 h-[calc(100vh-60px)]">
        <!-- Outer Flex: Column on small, Row on large -->
        <div class="flex flex-col lg:flex-row h-full overflow-hidden p-3 bg-white gap-2 lg:gap-4 rounded-2xl">

            <!-- Sidebar -->
            <aside
                class="w-full lg:w-2/4 xl:w-1/3 h-[50vh] lg:h-full border-r bg-gray-100 p-2 lg:p-3 rounded-2xl overflow-hidden">
                <div class="bg-white rounded-2xl h-full max-h-[90vh] overflow-auto">
                    <!-- Search and Sellers List -->
                    <div class="p-2 lg:p-4 border-b relative">
                        <input type="text" placeholder="Search Users" @keyup="searchShops($event)"
                            class="w-full pl-12 py-3 md:py-4 pr-4 border rounded-lg text-sm md:text-base" />
                        <img src="/src/assets/icons/search.svg" alt="search"
                            class="w-5 h-5 lg:w-6 lg:h-6 absolute top-[50%] translate-y-[-50%] left-4 lg:left-6">
                    </div>
                    <!-- Seller List -->
                    <ul class="divide-y divide-gray-50 p-1 xl:p-4">
                        <li v-for="(user, i) in users" :key="user.id" @click="handleSelectUser(user)"
                            class="flex items-start justify-between p-2 xl:p-4 transition-all duration-500 rounded-lg cursor-pointer"
                            :class="activeIndex == user.id ? 'bg-pink-100 hover:bg-pink-100' : 'bg-white hover:bg-gray-100'">
                            <div class="flex items-center flex-wrap gap-1 space-x-1 lg:space-x-3">
                                <img src="https://masterbari.com/assets/images/profile/demo-profile.png" alt=""
                                    class="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full border"
                                    :class="activeIndex == user.id ? 'border-red-500' : 'border-white'">
                                <div>
                                    <div class="font-semibold text-xs lg:text-base"
                                        :class="activeIndex == user.id ? 'text-red-500' : 'text-gray-900'">
                                        {{ user.name }}
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

            <!-- Chat Area -->
            <div class="p-3 w-full h-[calc(100vh-60px)] lg:h-full bg-gray-100 rounded-2xl flex-1">
                <div v-if="chatStore.selectedUser"
                    class="h-full bg-white rounded-2xl shadow-lg flex flex-col overflow-hidden z-50">
                    <!-- Chat Header -->
                    <div class="bg-gray-900 text-white px-4 py-3 flex items-center justify-between cursor-pointer">
                        <div class="flex items-center gap-2">
                            <img src="https://masterbari.com/assets/images/profile/demo-profile.png" alt="Logo"
                                class="w-8 h-8 rounded-full" />
                            <div>
                                <p class="font-semibold m-0 p-0">{{ chatStore.selectedUser?.name }}</p>
                                <p class="text-sm text-green-400 m-0 p-0">Active</p>
                            </div>
                        </div>
                    </div>

                    <!-- Chat Messages -->
                    <div v-if="messages.length > 0" ref="chatContainer"
                        class="flex-1 overflow-y-auto p-4 space-y-4 text-sm">
                        <!-- User Message -->
                        <div v-for="message in messages" class="flex items-start gap-1"
                            :class="message.sender_id === authStore.user.id ? 'justify-end' : 'justify-start'">
                            <div class="space-y-1"
                                :class="message.sender_id === authStore.user.id ? 'text-right' : 'text-left'">
                                <div class="inline-block bg-red-500 text-white px-4 py-2 rounded-xl">{{ message.message
                                    }}</div>
                                <p class="text-xs text-gray-500 mt-1">8:10 PM, April 28, 2025 </p>
                            </div>
                            <img src="https://masterbari.com/assets/images/profile/demo-profile.png" alt="User"
                                class="w-10 h-10 rounded-full" />
                        </div>
                    </div>

                    <div v-else ref="chatContainer" class="flex-1 overflow-y-auto p-4 space-y-4 text-sm">
                        <div class="space-y-1 flex flex-col items-center justify-center h-full">
                            <p class="font-semibold m-0 p-0">No Messages Found!</p>
                            <p class="text-sm m-0 p-0">let's start a conversation</p>
                        </div>
                    </div>

                    <!-- Divider -->
                    <div class="border-t-2 w-2/3 mx-auto"></div>

                    <!-- Input Box -->
                    <form @submit.prevent="handleSend">
                        <div class="p-3 flex items-center gap-2 relative">
                            <input v-model="newMessage" type="text" placeholder="Type a message"
                                class="flex-1 px-4 py-4 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-pink-500" />
                            <button type="submit" class="text-white p-2 absolute right-6">
                                <img src="/src/assets/icons/sent-chat.svg" alt="chat" class="w-6 h-6">
                            </button>
                        </div>
                    </form>
                </div>

                <div v-else
                    class="text-center text-gray-500 py-4 border w-full h-full flex flex-col items-center justify-center gap-2">
                    <img src="https://masterbari.com/assets/images/profile/demo-profile.png" alt=""
                        class="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full border">
                    <div class="space-y-1">
                        <p class="font-semibold m-0 p-0">No User Selected</p>
                        <p class="text-sm m-0 p-0">Please select a user to see their messages</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import HeaderBar from '../components/Header.vue'
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
const activeIndex = ref(0)
const newMessage = ref('')
const search = ref('')
let debounceTimer;


onMounted(async () => {
    if (!authStore.token) {
        router.push('/login')
    }

    fetchUsers()

    chatStore.selectedUser = '';
})

const fetchUsers = async () => {
    const response = await axios.get('users', {
        headers: {
            Authorization: `Bearer ${authStore.token}`
        },
        params: {
            search: search.value
        }
    });
    users.value = response.data.data.users
}

const handleSelectUser = async (user) => {
    activeIndex.value = user.id
    chatStore.selectUser(user)
    chatStore.currentUser = authStore.user

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

const handleSend = () => {
    console.log(authStore.token);

    const response = axios.post('chats/store', {
        sender_id: authStore.user.id,
        receiver_id: chatStore.selectedUser.id,
        message: newMessage.value,
    }, {
        headers: {
            Authorization: `Bearer ${authStore.token}`,
        }
    })

    newMessage.value = ''
}

const searchShops = (e) => {
    clearTimeout(debounceTimer); // clear previous timer
    debounceTimer = setTimeout(() => {
        search.value = e.target.value;
        fetchUsers();
    }, 500);
}


</script>