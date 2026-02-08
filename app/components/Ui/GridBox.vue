<template>
    <div class="grid-box">
        <slot />
    </div>
</template>

<style lang="scss" scoped>
.grid-box {
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
    @media (max-width: 480px) {
        grid-template-columns: 1fr 1fr;
    }
}
</style>