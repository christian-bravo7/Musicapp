<template>
    <div class="track-detail" v-if="track">
        <div class="track-detail__left">
            <figure class="track-detail__image">
                <img :src="track.album.images[0].url" />
            </figure>
            <h4>{{ track.album.name }}</h4>
        </div>
        <div class="track-detail__right">
            <h4 class="track-detail__name">{{ track.name }}</h4>
            {{ track }}
        </div>
    </div>
</template>
<script>

import { mapState, mapActions } from 'vuex';

export default {

    computed: {
        ...mapState(['track'])
    },
    created () {

        const id = this.$route.params.id;

        if (!this.track || !this.track.id || this.track.id !== id) {
            this.getTrackById({ id })
                .then(() => {})
                .catch(() => {})
        }
    },
    methods: {
        ...mapActions(['getTrackById'])
    }

}

</script>

<style lang="scss" scoped>

.track-detail {

    display: flex;
    width: 100%;

    &__left {
        width: 30%;
        margin-right: rem(16);

    }
    &__right {
        width: 70%;
    }
    &__image {

        display: flex;
        border-radius: rem(5);
        overflow: hidden;
        margin-bottom: rem(16);

        > img {
            width: 100%;
            height: 100%;
        }
    }
    &__name {
        font-size: 22px;
    }

}

</style>
