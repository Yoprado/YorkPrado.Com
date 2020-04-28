<template>
  <div>
    <div>
      <b-container fluid class="project-container">
        <b-row>
          <b-col class="card-container" lg="6" xl="6" md="12" sm="12" cols="12">
            <client-only>
              <VLazyImage
                class="card-img-top h-100"
                src="/PradoBrothers.jpg"
                src-placeholder="/PradoBrothers.png"
              />
            </client-only>
          </b-col>
          <b-col>
            <h1 class="display-3">About Me</h1>
            <p class="lead">
              My name is York Prado. I was born and raised in Washington, DC and
              currently live in Oakland with my twin brother, Patric. We were
              raised by a single mother who we dedicate all our good fortunes
              to, even during these interesting times. Soon after we went off to
              college, our mother developed empty nest syndrome and decided to
              remarry and raise two more baby brothers (we are a beautiful
              growing family).
              <br /><br />
              As for my work, I have been in consulting for the past ten years
              of my career. I consider myself a solutions architect and a
              tinkerer more than a full fledged software engineer. My expertise
              lies at the intersection of emerging technologies and client
              delivery, working with businesses to develop meaningful technical
              solutions.
              <br /><br /></p
          ></b-col>
        </b-row>
        <b-row>
          <b-col>
            <p class="lead">
              My last four years at Deloitte have been dedicated to developing
              and leading Internet of Things(IoT) implementation, mostly in the
              smart manufacturing space. This experience takes me around the
              world working with with clients to scale solutions from ideation,
              to pilot, to full scale production. I am constantly curious and
              learning, hoping to see what comes next in the world of
              technology.
              <br /><br /></p
          ></b-col>
        </b-row>
      </b-container>
    </div>
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
      photos: state => state.Photography.photographyContent,
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
  padding-bottom: 0.3em;
}
.lead {
  letter-spacing: 0.15em;
  font-weight: 500;
  font-family: 'Lato';
  padding-bottom: 0em;
  margin-bottom: 0em;
}
.project-container {
  background-color: #e9ecef;
  padding-top: 3em;
  padding-bottom: 2em;
}
</style>
