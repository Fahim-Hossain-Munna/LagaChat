<template>
    <div class="border-end p-3 bg-light" style="width: 450px;">
        <h6 class="text-success">Active users</h6>
        <ul class="list-group">
            <li v-for="user in users" :key="user.id" class="list-group-item">
                {{ user.name }}
            </li>
        </ul>
    </div>
</template>

<script setup>
const users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
]
</script>