<script setup>

const props = defineProps({
    modelValue: [String, Number],
    type: { type: String, default: 'text' },
    placeholder: String,
    disabled: Boolean
})

const emit = defineEmits(['update:modelValue'])

const onInput = (e) => {
    emit('update:modelValue', e.target.value)
}
</script>

<template>
    <div class="input-wrapper">
        <!-- <i v-if="icon" :class="icon"></i> -->

        <input v-bind="$attrs" :type="type" :value="modelValue" :placeholder="placeholder" :disabled="disabled"
            class="input" @input="onInput" />
    </div>
</template>

<style lang="scss" scoped>
.input-wrapper {
    height: fit-content;
    width: 100%;
    .input {
        width: 100%;
        height: 36px;
        border: 1px solid #ccc;
        border-radius: 6px;
        padding: 22px;
        border: 1px solid rgba(255, 255, 255, 0.18);
        outline: none;
        font-size: 18px;
        background: transparent;
        color: #ccc;
        @media screen and (max-width: 550px) {
            padding: 18px;
        }
    }
}
</style>
