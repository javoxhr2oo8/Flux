<script setup>
const props = defineProps({
    items: {
        type: Array,
        required: true,
    }
})

const activeIndex = ref(null)

const toggle = (index) => {
    activeIndex.value = activeIndex.value === index ? null : index
}
</script>

<template>
    <div class="accordion">
        <div v-for="(item, index) in items" :key="index" class="accordion__item"
            :class="{ 'is-active': activeIndex === index }">
            <button class="accordion__header" @click="toggle(index)">
                <div class="accordion__title-group">
                    <i v-if="item.icon" :class="['fas', item.icon, 'accordion__icon-left']"></i>
                    <span>{{ item.title }}</span>
                </div>
                <i class="fas fa-chevron-down accordion__arrow"></i>
            </button>

            <div class="accordion__content-wrapper">
                <div class="accordion__content">
                    {{ item.content }}
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
$transition: 0.35s cubic-bezier(0.4, 0, 0.2, 1);

.accordion {
    &__item {
        border-bottom: 1px solid;
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
        transition: background $transition;
        span {
            color: #fff;
        }
        &.is-active {
            .accordion__arrow {
                transform: rotate(180deg);
            }

            .accordion__content-wrapper {
                grid-template-rows: 1fr;
                opacity: 1;
            }

            .accordion__header {
                color: #fff;
            }
        }
    }

    &__header {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        background: none;
        border: none;
        cursor: pointer;
        font-size: 1.1rem;
        font-weight: 500;
        transition: color $transition;

        &:hover {
            background-color: rgba(#fff, 0.03);
        }
    }

    &__title-group {
        display: flex;
        align-items: center;
        gap: 12px;
    }

    &__icon-left {
        width: 20px;
        color: lighten(#fff, 10%);
    }

    &__arrow {
        font-size: 0.8rem;
        transition: transform $transition;
        color: #fff;
    }

    &__content-wrapper {
        display: grid;
        grid-template-rows: 0fr;
        transition: grid-template-rows $transition, opacity $transition;
        opacity: 0;
        overflow: hidden;
    }

    &__content {
        min-height: 0;
        padding: 0 20px 20px 52px;
        color: #666;
        line-height: 1.6;
    }
}
</style>