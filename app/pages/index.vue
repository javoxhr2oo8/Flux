<script setup>
const {user} = useTelegram()
</script>

<template>
    <div>
        <Header/>
        <h1>{{ user }}</h1>
        <Main/>
    </div>
</template>