<script setup>
const props = defineProps(['toggle', 'square', 'bg', 'color']);
const emit = defineEmits(['update:toggle']);

const handleClick = () => {
    emit('update:toggle', !props.toggle);
};
</script>

<template>
    <button :class="{ 'active': toggle, 'square': props.square }" :style="{
        background: toggle ? props.bg : '',
        color: toggle ? props.color : ''
    }" @click="handleClick">
        <span></span>
    </button>
</template>

<style lang="scss" scoped>
button {
    width: 85px;
    padding: 7px;
    font-weight: 600;
    font-size: 17px;
    border-radius: 23px;
    background: transparent;
    color: #fff;

    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

    display: flex;
    align-items: center;
    justify-content: flex-start;
    transition: all .2s ease;
    outline: none;
    -webkit-tap-highlight-color: transparent;
    span {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: #fff;
        transition: all .2s ease;
        cursor: pointer;
    }

    @media screen and (max-width: 550px) {
        width: 65px;
        span {
            width: 20px;
            height: 20px;
        }
    }
}

.active {
    // background: linear-gradient(135deg, rgba(120, 44, 246, 0.4), rgba(120, 44, 246, 0.2));
    background: #1c631c;
    span {
        margin-left: 37px;
    }
    @media screen and (max-width: 550px) {
        width: 65px;
    span {
        margin-left: 28px;
    }
    }
}

.square {
    border-radius: 10px;

    span {
        border-radius: 5px;
    }
}
</style>