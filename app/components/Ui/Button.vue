<script setup>
const { color, bg, loading = false, width } = defineProps(['color', 'bg', 'loading', 'width'])

onMounted(() => {
    document.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('touchstart', function () { }, { passive: true });
    });
})
</script>

<template>
    <button :style="{ 'color': color, 'background': bg, 'width': width ? width : '100%' }" :class="{'loadingStaus': loading}">
        <div class="lds-ring" v-if="loading">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <slot/>
    </button>
</template>

<!-- scoped styles -->
<style lang="scss" scoped>
button {
    width: 100%;
    padding: 12px;
    font-weight: 600;
    font-size: 17px;
    border-radius: 12px;
    // background: linear-gradient(135deg, rgba(120, 44, 246, 0.4), rgba(120, 44, 246, 0.2));
    background: transparent;
    color: #fff;
    cursor: pointer;

    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    transition: all 0.3s ease;
    outline: none;

    -webkit-tap-highlight-color: transparent;

    &:active {
        transform: scale(0.96);
        opacity: 0.7;
    }

    @media screen and (max-width: 550px) {
        font-size: 15px;
        padding: 10px;
    }
}

.lds-ring,
.lds-ring div {
    box-sizing: border-box;
}

.lds-ring {
    display: inline-block;
    position: relative;
    width: 20px;
    height: 20px;
}

.lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 20px;
    height: 20px;
    border: 5px solid currentColor;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: currentColor transparent transparent transparent;
}

.lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
}

.lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
}

.lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
}

@keyframes lds-ring {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>

<!-- global imortant styles  -->
<style lang="scss">
.loadingStaus {
    i {
        display: none !important;
    }
}
</style>