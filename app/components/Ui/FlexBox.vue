<script setup>
const {direction, gap, items, content} = defineProps(['direction', 'gap', 'items', 'content'])
</script>

<template>
    <div class="flex-box" :style="{'flex-direction': direction, 'gap': gap, 'align-items': items, 'justify-content': content}">
        <slot/>
    </div>
</template>

<style lang="scss" scoped>
.flex-box {
    width: 100%;
    display: flex;
}
</style>