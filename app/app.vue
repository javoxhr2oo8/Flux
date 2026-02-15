<script setup>
const { setHeaderColor } = useTelegram()

onMounted(()=> {
  setHeaderColor("#ffffff")
})
</script>

<template>
  <div>
    <NuxtLayout />
  </div>
</template>