<script setup>
const { user, showAlert, closeApp, tg } = useTelegram();

onMounted(() => {
    if (tg) {
        tg.ready();
        tg.expand();
    }
});
</script>

<template>
    <div>
        <NuxtPage />
    </div>
</template>