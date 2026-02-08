<script setup>
const { item } = defineProps(['item'])
</script>

<template>
    <FlexBox direction="column" gap="10px">
        <h2>Называния: Ipad mini 7</h2>
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
                Редактировать
            </Button>
            <Button bg="#036603">
                <i class="fa-solid fa-check"></i>
                Завершить
            </Button>
        </FlexBox>
        
        <Button bg="#1a5590">
            <i class="fa-solid fa-pen-nib"></i>
            Добавить в черновик
        </Button>
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
</style>