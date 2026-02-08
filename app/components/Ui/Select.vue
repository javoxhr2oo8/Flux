<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
    modelValue: [String, Number, Object],
    options: {
        type: Array,
        default: () => []
    },
    placeholder: {
        type: String,
        default: 'Выберите значение'
    }
});

const emit = defineEmits(['update:modelValue', 'toggle']);

const isOpen = ref(false);
const rootRef = ref(null);

const toggleDropdown = () => {
    isOpen.value = !isOpen.value;
    emit('toggle', isOpen.value);
};

const selectOption = (option) => {
    emit('update:modelValue', option.value);
    isOpen.value = false;
    emit('toggle', false);
};

const handleClickOutside = (event) => {
    if (rootRef.value && !rootRef.value.contains(event.target)) {
        if (isOpen.value) {
            isOpen.value = false;
            emit('toggle', false);
        }
    }
};

onMounted(() => window.addEventListener('click', handleClickOutside));
onUnmounted(() => window.removeEventListener('click', handleClickOutside));

const selectedLabel = () => {
    const selected = props.options.find(opt => opt.value === props.modelValue);
    return selected ? selected.label : props.placeholder;
};
</script>

<template>
    <div class="custom-select" ref="rootRef" tabindex="0">
        <div class="select-trigger" :class="{ 'is-active': isOpen }" @click="toggleDropdown">
            <span>{{ selectedLabel() }}</span>
            <span class="arrow" :class="{ 'rotate': isOpen }">▼</span>
        </div>

        <Transition name="fade">
            <ul v-if="isOpen" class="select-options">
                <li v-for="option in options" :key="option.value" @click="selectOption(option)"
                    :class="{ 'selected': option.value === modelValue }">
                    {{ option.label }}
                </li>
            </ul>
        </Transition>
    </div>
</template>

<style lang="scss" scoped>
.custom-select {
    position: relative;
    width: 100%;
    font-family: 'Inter', sans-serif;
    user-select: none;
    outline: none;
}

.select-trigger {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.3s ease;

    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.15);
    color: #fff;

    &:hover {
        background: rgba(255, 255, 255, 0.1);
    }

    &.is-active {
        border-color: #d2cfd688;
        box-shadow: 0 0 15px rgba(120, 44, 246, 0.2);
    }
}

.select-options {
    position: absolute;
    top: calc(100% + 8px);
    left: 0;
    right: 0;

    background: #1d1d1db9;
    backdrop-filter: blur(50px) saturate(150%);
    -webkit-backdrop-filter: blur(50px) saturate(150%);

    border: 1px solid #a3a3a3d3;

    border-radius: 14px;
    padding: 6px;
    margin: 0;
    list-style: none;
    z-index: 9999 !important;
    max-height: 250px;
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 4px;
    }
    &::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.2);
        border-radius: 10px;
    }
}

.select-options li {
    padding: 12px 13px;
    margin-bottom: 2px;
    color: rgba(255, 255, 255, 0.9);
    cursor: pointer;
    border-radius: 8px;
    transition: all 0.2s;
    font-weight: 600;
    border-bottom: 1px solid rgba(163, 163, 163, 0.089);

    &:hover {
        background: rgba(255, 255, 255, 0.1);
        color: #fff;
    }

    &.selected {
        background: rgba(255, 255, 255, 0.1);
        color: #fff;
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.arrow {
    font-size: 10px;
    transition: transform 0.3s ease;
    display: inline-block;
}

.arrow.rotate {
    transform: rotate(180deg);
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateY(-12px) scale(0.95);
}

.fade-enter-to,
.fade-leave-from {
    opacity: 1;
    transform: translateY(0) scale(1);
}
</style>