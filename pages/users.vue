<template>
    <div class="container m-auto">
        <h2 class="text-xl mb-2 mt-2">Users</h2>

        <div v-if="isLoading" class="w-full flex justify-center mt-10 ">
            <div class="spinner mx-auto my-4">

                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>


            </div>
        </div>

        <table class="shadow-md shadow-slate-900" v-else>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td>{{ user.id }}</td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <td>
                        <button @click="goToDetails(user.id)">View Details</button>

                    </td>
                </tr>
            </tbody>
        </table>


    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter();

const goToDetails = (id) => {
    router.push(`/users/${id}`);
};


const users = ref([]);
const isLoading = ref(false);


const fetchUsers = async () => {
    isLoading.value = true;
    try {
        const { data } = await axios.get(
            `https://api.escuelajs.co/api/v1/users`
        );
        users.value = data;

    } catch (error) {
        console.error('Error fetching users:', error);
    } finally {
        isLoading.value = false;
    }
};

onMounted(() => {
    fetchUsers();
});
</script>




<style scoped>
.spinner {
    position: absolute;
    width: 9px;
    height: 9px;
}

.spinner div {
    position: absolute;
    width: 50%;
    height: 150%;
    background: #000000;
    transform: rotate(calc(var(--rotation) * 1deg)) translate(0, calc(var(--translation) * 1%));
    animation: spinner-fzua35 1s calc(var(--delay) * 1s) infinite ease;
}

.spinner div:nth-child(1) {
    --delay: 0.1;
    --rotation: 36;
    --translation: 150;
}

.spinner div:nth-child(2) {
    --delay: 0.2;
    --rotation: 72;
    --translation: 150;
}

.spinner div:nth-child(3) {
    --delay: 0.3;
    --rotation: 108;
    --translation: 150;
}

.spinner div:nth-child(4) {
    --delay: 0.4;
    --rotation: 144;
    --translation: 150;
}

.spinner div:nth-child(5) {
    --delay: 0.5;
    --rotation: 180;
    --translation: 150;
}

.spinner div:nth-child(6) {
    --delay: 0.6;
    --rotation: 216;
    --translation: 150;
}

.spinner div:nth-child(7) {
    --delay: 0.7;
    --rotation: 252;
    --translation: 150;
}

.spinner div:nth-child(8) {
    --delay: 0.8;
    --rotation: 288;
    --translation: 150;
}

.spinner div:nth-child(9) {
    --delay: 0.9;
    --rotation: 324;
    --translation: 150;
}

.spinner div:nth-child(10) {
    --delay: 1;
    --rotation: 360;
    --translation: 150;
}

@keyframes spinner-fzua35 {

    0%,
    10%,
    20%,
    30%,
    50%,
    60%,
    70%,
    80%,
    90%,
    100% {
        transform: rotate(calc(var(--rotation) * 1deg)) translate(0, calc(var(--translation) * 1%));
    }

    50% {
        transform: rotate(calc(var(--rotation) * 1deg)) translate(0, calc(var(--translation) * 1.5%));
    }
}


table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;

}

th,
td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
}

th {
    background-color: #f4f4f4;
}

.pagination {
    display: flex;
    justify-content: space-between;
    width: 200px;
}

button {
    padding: 5px 10px;
    cursor: pointer;
}

button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
}
</style>