<template>
  <Header :header-text="header" :lead-text="leadText"> </Header>
</template>

<script>
import Header from '~/components/Header.vue';
export default {
  components: { Header },
  data() {
    return {
      header: 'Photo Dump Project',
      leadText:
        "Using my own mobile photos taken throughout the years, I ran them through Google's Vision API to label my photos and its contents using computer vision. I also extracted EXIF data from each photo to get me location and date of each photo taken. Using all this information, I loaded it into Algolia's Search Engine to easily search through my photos. Feel free to search through my photo collection, they are a mix of concerts, food, loving friends, and scenery.",
    };
  },
};
</script>

<style scoped></style>
