<template>
  <div class="player__container" v-if="isVisiblePlayer">
    <div class="content player">
      <div class="player__image">
        <img :src="track.album.images[0].url" alt />
      </div>
      <div class="player__track">
        <strong>{{ track.name }}</strong>
        <small>{{ track.duration_ms | ms-to-min }}</small>
      </div>
      <div class="player__audio">
        <audio :src="track.preview_url" controls autoplay></audio>
      </div>
      <span class="player__close" @click="hidePlayer">
        <i class="material-icons">close</i>
      </span>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      trackShow: false
    };
  },
  computed: {
    ...mapState(["track", "isVisiblePlayer"])
  },
  methods: {
    ...mapMutations(["showPlayer", "hidePlayer"])
  }
};
</script>

<style lang="scss" scoped>
.player {
  display: grid;
  grid-template-columns: auto auto 1fr;
  align-items: center;
  padding: rem(8) rem(16);
  padding-right: rem(32);
  grid-gap: 16px;
  background-color: rgba(73, 35, 40, 0.8);
  position: relative;
  user-select: none;

  @media screen and (max-width: 640px) {
    grid-template-columns: auto 1fr;
  }

  &__container {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
  &__image {
    width: rem(50);
    height: rem(50);

    > img {
      width: 100%;
      height: 100%;
    }
  }

  &__track {
    display: flex;
    width: 150px;
    flex-direction: column;
    color: white;

    @media screen and (max-width: 640px) {
      display: none;
    }

    strong {
      text-transform: capitalize;
      color: white;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  &__audio {
    display: flex;
    align-items: center;

    audio {
      width: 100%;
      outline: none;
      opacity: 0.5;
      height: 40px;
      transition: 0.3s;
    }

    &:hover audio {
      opacity: 1;
    }
  }
  &__close {
    position: absolute;
    top: 2px;
    right: 2px;
    cursor: pointer;
    color: white;
  }
}
</style>