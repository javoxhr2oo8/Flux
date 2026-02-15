<script setup>
import FlexBox from './FlexBox.vue';
import Button from './Button.vue';
const { item } = defineProps(['item'])

const buttonLoadingStatus = ref(false)
</script>

<template>
    <FlexBox direction="column" gap="10px">
        <h2>Ipad mini 7</h2>
        <p>
            Серийный номер: DH/7Phdgf
        </p>
        <p>
            Цена продажи: 200 000 uzs
        </p>
        <p>
            Себестоимость: 150 000 uzs
        </p>

        <FlexBox gap="5px">
            <Button bg="#ca7700">
                <i class="fa-solid fa-pencil"></i>
                Изменить
            </Button>

            <Button class="confirm-btn" bg="#036603" @click="buttonLoadingStatus = !buttonLoadingStatus" :loading="buttonLoadingStatus">
                <i class="fa-solid fa-check"></i>
            </Button>
        </FlexBox>
    </FlexBox>
</template>

<style lang="scss" scoped>
img {
    width: 100%;
    border-radius: 10px;
}

h2 {
    font-size: 20px;

    @media screen and (max-width: 550px) {
        font-size: 17px;
    }
}

p {
    font-weight: 400;
    font-size: 16px;
    opacity: 0.8;
    letter-spacing: 1px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

    @media screen and (max-width: 550px) {
        font-size: 14px;
    }
}

.confirm-btn {
    width: 50px !important;
}
</style>