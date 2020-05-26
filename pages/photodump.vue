<template>
  <div>
    <Header :header-text="header" :lead-text="leadText"> </Header>
    <client-only>
      <ais-instant-search :search-client="searchClient" index-name="Images">
        <ais-search-box placeholder="Search Images..." />
        <ais-hits>
          <div slot="item" slot-scope="{ item }">
            <b-container fluid class="project-container">
              <b-row>
                <b-col
                  class="card-container"
                  lg="4"
                  xl="4"
                  md="6"
                  sm="12"
                  cols="12"
                >
                  <client-only>
                    <VLazyImage
                      class="card-img-top h-100"
                      :src="item.url"
                      :src-placeholder="item.miniurl"
                    />
                  </client-only>
                </b-col>
              </b-row>
            </b-container>
          </div>
        </ais-hits>
      </ais-instant-search>
    </client-only>
  </div>
</template>
<script>
import algoliasearch from 'algoliasearch/lite';
import VLazyImage from 'v-lazy-image';
import Header from '~/components/Header.vue';

export default {
  components: { Header, VLazyImage },
  data() {
    return {
      searchClient: algoliasearch(
        'OL00T4VOMS',
        '620b94d56e6518a12e958d2874c625d3'
      ),
      header: 'Photo Dump Project',
      leadText:
        "Using my own mobile photos taken throughout the years, I ran them through Google's Vision API to label my photos and its contents using computer vision. I also extracted EXIF data from each photo to get me location and date of each photo taken. Using all this information, I loaded it into Algolia's Search Engine to easily search through my photos. Feel free to search through my photo collection, they are a mix of concerts, food, loving friends, and scenery.",
    };
  },
};
</script>

<style scoped>
.card-container {
  margin-bottom: 2rem;
}
.text-block {
  position: absolute;
  margin-right: -2rem;
  padding: 0px;
  background-color: black;
  color: white;
  opacity: 0.75;
  bottom: 0rem;
  right: 3rem;
  left: 1rem;
}
.v-lazy-image {
  filter: blur(20px);
  transition: filter 1.1s;
}

.v-lazy-image-loaded {
  filter: blur(0);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.5s;
  filter: blur(0);
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  filter: blur(20px);
  transition: filter 1.1s;
}
.headerClass {
  padding-top: 3rem;
  padding-bottom: 2rem;
  margin-bottom: 4em;
}
.display-3 {
  font-size: 4.5rem;
  font-weight: 300;
  text-align: center;
  padding-bottom: 0.75em;
}
.lead {
  letter-spacing: 0.15em;
  font-weight: 500;
  font-family: 'Lato';
}
.photographyClass {
  background: var(--secondary-bg-color);
}
</style>
