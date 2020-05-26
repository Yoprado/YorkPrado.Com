<template>
  <div>
    <Header :header-text="header" :lead-text="leadText"> </Header>
    <client-only>
      <ais-instant-search :search-client="searchClient" index-name="Images">
        <b-container fluid>
          <b-row align-v="center" align-h="center">
            <b-col cols="12">
              <ais-search-box
                placeholder="Search Images..."
                :class-names="{
                  'ais-SearchBox': 'PDSearchBox',
                  'ais-SearchBox-form': 'PDSearchBoxForm',
                  'ais-SearchBox-submit': 'PDSearchBoxSubmit',
                  'ais-SearchBox-input': 'PDSearchBoxInput',
                  'ais-SearchBox-reset': 'PDSearchBoxReset',
                  'ais-SearchBox-loadingIndicator':
                    'PDSearchBoxLoadingIndicator',
                }"
              >
                <div slot="submit-icon">
                  <font-awesome-icon icon="search" />
                </div>
                <div slot="reset-icon">
                  <font-awesome-icon icon="undo" />
                </div>
                <div slot="loading-indicator">
                  <font-awesome-icon icon="spinner" />
                </div>
              </ais-search-box>
            </b-col>
          </b-row>
        </b-container>
        <ais-infinite-hits>
          <div slot-scope="{ items }">
            <div class="masonry">
              <div v-for="item in items" :key="item.objectID" class="item">
                <client-only>
                  <VLazyImage
                    class="card-img-top"
                    :src="item.url"
                    :src-placeholder="item.miniurl"
                  />
                </client-only>
              </div>
            </div>
          </div>
        </ais-infinite-hits>
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
        "Using my own mobile photos taken throughout the years, I ran them through Google's Vision API to label my photos using computer vision. I also extracted EXIF data from each photo to get me location and date of each photo taken. Using all this information, I loaded it into Algolia's Search Engine to easily search through my photos. Feel free to search through my photo collection, they are a mix of concerts, food, loving friends, and scenery.",
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
.masonry {
  /* Masonry container */
  -webkit-column-count: 3;
  -moz-column-count: 3;
  column-count: 3;
  -webkit-column-gap: 1em;
  -moz-column-gap: 1em;
  column-gap: 1em;
  margin: 1.5em;
  padding: 0;
  -moz-column-gap: 1.5em;
  -webkit-column-gap: 1.5em;
  column-gap: 1.5em;
  font-size: 0.85em;
}
.item {
  display: inline-block;
  background: #fff;
  padding: 1em;
  margin: 0 0 1.5em;
  width: 100%;
  -webkit-transition: 1s ease all;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-shadow: 2px 2px 4px 0 #ccc;
}
.item img {
  max-width: 100%;
  height: auto;
}

@media only screen and (max-width: 320px) {
  .masonry {
    -moz-column-count: 1;
    -webkit-column-count: 1;
    column-count: 1;
  }
}

@media only screen and (min-width: 321px) and (max-width: 768px) {
  .masonry {
    -moz-column-count: 2;
    -webkit-column-count: 2;
    column-count: 2;
  }
}
@media only screen and (min-width: 769px) and (max-width: 1200px) {
  .masonry {
    -moz-column-count: 3;
    -webkit-column-count: 3;
    column-count: 3;
  }
}
@media only screen and (min-width: 1201px) {
  .masonry {
    -moz-column-count: 3;
    -webkit-column-count: 3;
    column-count: 3;
  }
}
</style>
