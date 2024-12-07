<template>
    <div>
        <NuxtLink to="/users">
            <button>Back to Users List</button>
        </NuxtLink>

        <div v-if="isLoading" class="loader"></div>
        <div v-else-if="user">
            <h2>User Details</h2>
            <p><strong>ID:</strong> {{ user.id }}</p>
            <p><strong>Name:</strong> {{ user.name }}</p>
            <p><strong>Email:</strong> {{ user.email }}</p>
            <p><strong>Role:</strong> {{ user.role }}</p>
            <p><strong>Avatar:</strong></p>
            <img :src="user.avatar" alt="User Avatar" width="100" />
        </div>
        <div v-else>
            <p>User not found.</p>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

const route = useRoute();
const user = ref(null);
const isLoading = ref(true);

const fetchUserDetails = async () => {
    const userId = route.params.id; // Get the dynamic route parameter
    try {
        const { data } = await axios.get(`https://api.escuelajs.co/api/v1/users/${userId}`);
        user.value = data;
    } catch (error) {
        console.error('Error fetching user details:', error);
    } finally {
        isLoading.value = false;
    }
};
console.log(route.params.id); // This should log the user ID

onMounted(() => {
    fetchUserDetails();
});
</script>