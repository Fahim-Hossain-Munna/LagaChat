<template>
    <!-- <div class="flex-grow-1 overflow-auto p-3 bg-white">
        <div v-if="messages.length === 0">No messages</div>
        <div v-for="(message, index) in messages" :key="index" class="mb-2">
            <div :class="message.sender_id === authStore.user.id ? 'text-end' : 'text-start'">
                <span class="badge bg-primary">{{ message.message }}</span>
                <div class="d-inline-block bg-light rounded p-2 mt-1" style="max-width: 70%;">
                    {{ message.user.name }}
                </div>
            </div>
        </div>
    </div> -->


    <!-- Chat Area -->
    <div class="p-3 w-full h-[calc(100vh-60px)] lg:h-full bg-gray-100 rounded-2xl flex-1">
        <div class="h-full bg-white rounded-2xl shadow-lg flex flex-col overflow-hidden z-50">
            <!-- Chat Header -->
            <div class="bg-gray-900 text-white px-4 py-3 flex items-center justify-between cursor-pointer">
                <div class="flex items-center gap-2">
                    <img src="http://127.0.0.1:8000/default/profile.jpg" alt="Logo" class="w-8 h-8 rounded-full" />
                    <div>
                        <p class="font-semibold">Dhaka Mart</p>
                        <p class="text-sm text-green-400">Active</p>
                    </div>
                </div>
            </div>

            <!-- Chat Messages -->
            <div ref="chatContainer" class="flex-1 overflow-y-auto p-4 space-y-4 text-sm">
                <!-- User Message -->
                <div class="flex justify-end items-start gap-1">
                    <!-- Product Info -->
                    <div class="flex items-center gap-2 md:gap-3 p-2 lg:p-4 border rounded-lg">
                        <img src="http://127.0.0.1:8000/default/profile.jpg" alt="Product"
                            class="w-8 h-8 md:w-14 md:h-14 rounded-lg object-cover" />
                        <div class="flex flex-col text-xs md:text-sm">
                            <p class="font-semibold leading-tight text-wrap">Remax RB-S10 Bluetooth Music
                                In-Ear
                                Earphone
                            </p>
                            <div class="flex justify-between items-center gap-2 mt-1">
                                <p class="font-semibold">$65</p>
                                <div class="flex items-center gap-1 text-xs">
                                    <StarIcon class="w-4 h-4 text-amber-500" />
                                    <span class="font-semibold">4.5</span>
                                    <span class="text-gray-500">(1.5k)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Product Info -->
                    <img src="http://127.0.0.1:8000/default/profile.jpg" alt="User" class="w-10 h-10 rounded-full" />
                </div>
                <div class="flex justify-end items-start gap-1">
                    <div class="space-y-1">
                        <div class="inline-block bg-red-500 text-white px-4 py-2 rounded-xl">Helloo, how
                            are
                            you?</div>
                        <p class="text-xs text-gray-500 mt-1">8:10 PM, April 28, 2025</p>
                    </div>
                    <img src="http://127.0.0.1:8000/default/profile.jpg" alt="User" class="w-10 h-10 rounded-full" />
                </div>

                <!-- Other Messages -->
                <div class="flex items-start gap-2">
                    <img src="http://127.0.0.1:8000/default/profile.jpg" alt="User" class="w-10 h-10 rounded-full" />
                    <div class="space-y-1">
                        <div class="bg-gray-100 px-4 py-2 rounded-xl">Wow, this is incredible!</div>
                        <div class="bg-gray-100 px-4 py-2 rounded-xl">Absolutely perfect! ✅</div>
                        <div class="bg-gray-100 px-4 py-2 rounded-xl">This is truly legendary!</div>
                        <div class="bg-gray-100 px-4 py-2 rounded-xl">This is truly legendary!</div>
                        <p class="text-xs text-gray-500 mt-1">8:10 PM, April 28, 2025</p>
                    </div>
                </div>

                <!-- User Messages -->
                <div class="flex justify-end items-start gap-1">
                    <div class="space-y-1">
                        <div class="inline-block bg-red-500 text-white px-4 py-2 rounded-xl">Lala La Lala?
                        </div>
                        <p class="text-xs text-gray-500 mt-1">8:10 PM, April 28, 2025</p>
                    </div>
                    <img src="http://127.0.0.1:8000/default/profile.jpg" alt="User" class="w-10 h-10 rounded-full" />
                </div>

                <!-- Other Reply -->
                <div class="flex items-start gap-2">
                    <img src="http://127.0.0.1:8000/default/profile.jpg" alt="User" class="w-10 h-10 rounded-full" />
                    <div class="space-y-1">
                        <div class="bg-gray-100 px-4 py-2 rounded-xl">Just some thoughts for next time.
                        </div>
                        <div class="bg-gray-100 px-4 py-2 rounded-xl">I'll be there in just a few minutes ⏰
                        </div>
                    </div>
                </div>
            </div>

            <!-- Divider -->
            <div class="border-t-2 w-2/3 mx-auto"></div>

            <!-- Input Box -->
            <div class="p-3 flex items-center gap-2 relative">
                <input type="text" placeholder="Type a message"
                    class="flex-1 px-4 py-4 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-pink-500" />
                <button class="text-white p-2 absolute right-6">
                    <img src="" alt="chat" class="w-6 h-6">
                </button>
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