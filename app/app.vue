<script setup>
const { setHeaderColor } = useTelegram()

onMounted(()=> {
  setHeaderColor("#2f3031")
})
</script>

<template>
  <div>
    <NuxtLayout />
  </div>
</template>