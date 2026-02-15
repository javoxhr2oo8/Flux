<script setup>
import Button from '../Ui/Button.vue';
import Card from '../Ui/Card.vue';
import FlexBox from '../Ui/FlexBox.vue';
import { reloadApp } from '@/composables/reloadApp';

const { user } = useTelegram()
</script>

<template>
    <header>
        <div class="container">
            <Card>
                <FlexBox content="space-between" items="center">
                    <h1>Flux App</h1>
                    <div class="header-right">
                        <FlexBox items="center" gap="10px">
                            <Button @click="reloadApp()"><i class="fas fa-sync"></i></Button>
                            <Button><i class="fas fa-plus"></i></Button>
                            <img v-if="user?.photo_url" :src="user.photo_url" alt="User Avatar" class="user-avatar"
                                @error="(e) => e.target.src = 'https://via.placeholder.com/40'" />
                                <img v-if="!user?.photo_url" src="https://cdn3.iconfinder.com/data/icons/basicolor-essentials/24/051_user_profile_avatar-1024.png" alt="">
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

    .header-right {
        img {
            width: 45px;
            border: 1px solid;
            border-radius: 50%;
        }
    }
}
</style>