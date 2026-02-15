<script setup>
import FlexBox from '../Ui/FlexBox.vue';
import Card from '../Ui/Card.vue';
import Button from '../Ui/Button.vue';
import CardContent from '../Ui/CardContent.vue';
const moreProductsSwitch = ref(false)
</script>

<template>
    <div class="main">
        <div class="container">
            <div class="main-wrapper">

                <FlexBox direction="column" gap="10px">
                    <Card>
                        <FlexBox items="center" gap="5px">
                            <Button><i class="fa-solid fa-bolt"></i>Активный</Button>
                            <Button><i class="fa-solid fa-pen-nib"></i>Черновик</Button>
                            <Button><i class="fa-solid fa-check"></i>Завершён</Button>
                        </FlexBox>
                    </Card>

                    <FlexBox direction="column" gap="5px">
                        <Card v-for="item in 3">
                            <CardContent :item="item" />
                        </Card>
                    </FlexBox>

                    <Card>
                        <Button :loading="moreProductsSwitch"
                            @click="moreProductsSwitch = !moreProductsSwitch">Еще</Button>
                    </Card>
                </FlexBox>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.main {
    padding-bottom: 10px;
}
</style>