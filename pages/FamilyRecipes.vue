<template>
  <div class="familyRecipesClass">
    <div>
      <b-jumbotron class="headerClass">
        <template v-slot:header>
          Family Recipes
        </template>
        <template v-slot:lead>
          I am proud to be Peruvian American, and if you've had the pleasure of
          eating with a family of us, you know how much we love food. I am
          dedicating this page to my own family's recipes (partly so I don't
          have to keep on bothering my mother for the ingredients). I plan on
          splitting this page out to go in depth on the cooking process and
          recipe. I welcome any suggestions and of course,
          <i>Stay tuned!</i>
        </template>
      </b-jumbotron>
    </div>
    <b-container fluid class="project-container">
      <b-row>
        <b-col
          v-for="photo in photos"
          :key="photo.id"
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
              :src="photo.image"
              :src-placeholder="photo.tinyimg"
              @load="addDescription"
            />
            <transition name="fade">
              <div v-show="descriptionShow" class="text-block">
                {{ photo.title }}
              </div>
            </transition>
          </client-only>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import VLazyImage from 'v-lazy-image';
export default {
  components: {
    VLazyImage,
  },
  data() {
    return {
      descriptionShow: false,
    };
  },
  computed: {
    ...mapState({
      photos: state => state.Recipes.recipeContent,
    }),
  },
  methods: {
    addDescription() {
      this.descriptionShow = true;
    },
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
.familyRecipesClass {
  background: var(--secondary-bg-color);
}
</style>
