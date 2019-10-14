<template>
    <div class="track">
        <figure class="track__image">
            <img :src="track.album.images[0].url" />
            <div class="track__info">
                <router-link
                    :to="`track/${track.id}`" 
                    :title="track.name" 
                    class="track__name">{{ track.name }}
                </router-link>
                <p class="track__artists">{{ artistNames }}</p>
                <p class="track__date">Release date: {{ track.album.release_date | moment("MMM, DD, YYYY") }}</p>
                <div class="track__preview">
                    <span 
                        title="Preview song" 
                        class="track__play" 
                        @click="selectTrack" 
                        v-disabledplay="track.preview_url">
                        <i class="material-icons">play_circle_filled</i>
                    </span>
                    <span class="track__duration">{{ track.duration_ms | ms-to-min}}</span>
                    <a :href="track.uri" class="track__spotify">
                        <span>Listen with</span>
                        <img src="@/assets/spotify.svg" />
                    </a>
                </div>
            </div>
        </figure>
    </div>
</template>
<script>

import { mapState, mapMutations } from 'vuex';

export default {

    props: {
        track: Object
    },
    methods: {
        selectTrack () {
            if (this.track.preview_url) {
                this.$store.commit('selectTrack', this.track);
            }
        }
    },
    computed: {
        artistNames () {

            if (this.track.album.artists.length === 1) {
                return this.track.album.artists[0].name;
            }

            let formattedArtists = this.track.album.artists
                .map((artist) => {
                    return artist.name;
                })
                .join(', ')

            let indices = [];
            
            for (let i = 0; i < formattedArtists.length; i++) {
                if (formattedArtists[i] === ",") indices.push(i);
            }

            formattedArtists = formattedArtists.append(indices[indices.length - 1], ' &');
            return formattedArtists;

        }
    }
}

</script>
<style lang="scss" scoped>

.track {
    display: flex;
    flex-direction: column;
    width: 100%;
    box-shadow: 1px 1px;
    height: 100%;
    border-radius: rem(5);
    overflow: hidden;
    box-shadow: 0px 0px 10px -2px #244239;

    &__image {
        width: 100%;
        position: relative;

        &:hover .track__info {
            height: 100%;
        }
        &:hover .track__date {
            opacity: 1;
        }
        &:hover .track__duration {
            position: static;
        }
        &:hover .track__spotify {
            opacity: 1;
        }

        > img {
            min-height: rem(200);
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    &__name {
        text-transform: capitalize;
        font-size: 14px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        color: white;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
    &__info {
        padding: rem(16);
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0,0,0,0.5);
        color: white;
        transition: 0.4s;
        height: rem(65);
    }
    &__artists {
        font-size: 11px;
    }
    &__date {
        font-size: 11px;
        opacity: 0;
        transition: 0.4s;
    }
    &__play {
        display: flex;
        cursor: pointer;

        i {
            font-size: rem(34);
        }
    }
    &__preview {
        margin-top: rem(8);
        display: flex;
        align-items: center;
    }
    &__duration {
        position: absolute;
        top: rem(2);
        right: rem(2);
        font-size: 12px;
        border-radius: rem(3);
        padding: rem(1) rem(5);
        background-color: rgba(255,255,255,0.2);
        margin-left: rem(16);
    }
    &__spotify {
        opacity: 0;
        position: absolute;
        bottom: rem(5);
        right: rem(5);
        transition: 0.4s;
        color: white;
        font-size: 12px;
        display: flex;
        align-items: center;
        cursor: pointer;
        background-color: rgba(255,255,255,0.1);
        padding: rem(5);
        border-radius: rem(5);

        > span {
            text-decoration: none;
        }

        > img {
            margin-left: rem(5);
            width: rem(35);
        }
    }
}

</style>
