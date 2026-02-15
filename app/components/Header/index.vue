<script setup>
import Button from '../Ui/Button.vue';
import Card from '../Ui/Card.vue';
import FlexBox from '../Ui/FlexBox.vue';

const {user} = useTelegram()
</script>

<template>
    <header>
        <div class="container">
            <Card>
                <FlexBox content="space-between" items="center">
                    <h1>Flux App</h1>
                    <div class="header-right">
                        <FlexBox items="center" gap="10px">
                            <Button class="reload-app-btn"><i class="fas fa-sync"></i></Button>
                            <img v-if="user" :src="user?.photo_url" alt="">
                            <img v-else src="https://cdn3.iconfinder.com/data/icons/basicolor-essentials/24/051_user_profile_avatar-1024.png" alt="">
                            <pre>{{ user?.photo_url }}</pre>
                        </FlexBox> 
                    </div>
                </FlexBox>
            </Card>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    padding: 10px 0;

    h1 {
        text-align: center;
    }

    .reload-app-btn {
        width: 60px !important;
    }

    .header-right {
        img {
            width: 45px;
            border: 1px solid;
            border-radius: 50%;
        }
    }
}
</style>