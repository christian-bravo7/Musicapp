<template>
    <div id="app" class="app">
        <Topbar />
        <div class="app-content">
            <div class="app-views">
                <router-view />
            </div>
        <Footer />
        </div>
        <Player />
    </div>
</template>

<script>

import Topbar from '@/components/Topbar.vue';
import Footer from '@/components/Footer.vue';
import Player from '@/components/Player.vue';

export default {
    name: 'app',
    components: {
        Topbar,
        Footer,
        Player
    }
}
</script>

<style lang="scss" scoped>

.app {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    min-height: 100vh;

    &-content {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        height: 100%;
    }
    &-views {
        padding: rem(16);
    }
}

</style>
