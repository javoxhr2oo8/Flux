<script setup>

</script>

<template>
    <div class="card">
        <slot />
    </div>
</template>

<style lang="scss" scoped>
.card {
    width: 100%;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
    padding: 20px;
    color: #fff;
    border-radius: 15px;

    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    border: 1px solid rgba(255, 255, 255, 0.18);
    
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);

    cursor: pointer;
    transition: all 0.3s ease;

    @media screen and (max-width: 550px) {
        padding: 7px;
        border-radius: 10px;
    }
}
</style>