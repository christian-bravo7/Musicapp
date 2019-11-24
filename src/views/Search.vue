<template>
  <div class="search">
    <div class="search__header">
      <h2 class="search__title">Search your favorite songs</h2>
      <input
        class="search__bar"
        placeholder="search..."
        type="text"
        v-model="query"
        @input.stop="search(query)"
      />
    </div>
    <div class="track__list">
      <Loader v-if="isLoading" />
      <div class="track__item-column" v-for="t in tracks" :key="t.id">
        <TrackItem :track="t" />
      </div>
    </div>
  </div>
</template>
<script>
import Loader from "@/components/Loader.vue";
import trackService from "@/services/track.service";
import TrackItem from "@/components/TrackItem";

export default {
  components: {
    TrackItem,
    Loader
  },
  data() {
    return {
      tracks: null,
      query: "",
      initialResult: "clairo",
      isLoading: false
    };
  },
  methods: {
    search(q) {
      this.isLoading = true;
      this.tracks = null;

      let query = q.trim();

      if (!query) {
        query = this.initialResult;
      }
      trackService
        .search(query)
        .then(res => {
          this.tracks = res.tracks.items;
          console.log(this.tracks);
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => {
          this.isLoading = false;
        });
    }
  },
  mounted() {
    this.search(this.initialResult);
  }
};
</script>

<style lang="scss" scoped>
.track__list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.track__item-column {
  width: 33.33%;
  padding: rem(8);

  @media screen and (max-width: 767px) {
    width: 50%;
  }
  @media screen and (max-width: 460px) {
    width: 100%;
  }
}
.search {
  width: 100%;
  max-width: rem(991);
  margin: 0 auto;

  &__header {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: rem(540);
    margin: rem(24) auto;
  }
  &__title {
    margin-bottom: rem(16);
  }
  &__bar {
    width: 100%;
    border-radius: rem(20);
    padding: rem(10) rem(15);
    font-size: 14px;
    border: 2px solid #fd7e8e;
    outline: none;
    color: darken($color: #fd7e8e, $amount: 40);

    &::placeholder {
      color: #fd7e8e;
    }
  }
}
</style>
