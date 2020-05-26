<template>
  <div class="indexClass vh-90">
    <b-jumbotron class="headerClass">
      <template v-slot:header>
        Hello, <b class="boldest">I'm York.</b><br />
        I'm a Solutions Architect from Oakland, CA.
      </template>
      <template v-slot:lead>
        My work has sent me all over the world, working with clients to deliver
        meaningful, scalable web solutions from ideation, to pilot, to full
        scale production. My experience involves full stack development
        specializing in analytics visualizations and emerging technologies such
        as IoT, 3D printing, cognitive computing, natural language processing,
        and augmented/virtual reality.
      </template>
      <b-button class="projectButton" :to="{ name: 'Projects' }"
        >See My Projects</b-button
      >
    </b-jumbotron>
    <b-container v-show="showImg === 4" fluid class="project-container">
      <b-row>
        <b-col
          v-for="photo in getRandomFour"
          :key="photo.id"
          class="card-container"
          lg="3"
          xl="3"
          md="6"
          sm="12"
          cols="12"
        >
          <client-only>
            <VLazyImage
              class="card-img-top h-100"
              :src="photo.image"
              :src-placeholder="photo.tinyimg"
            />
          </client-only>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import VLazyImage from 'v-lazy-image';
export default {
  components: {
    VLazyImage,
  },
  data() {
    return {
      showImg: 0,
    };
  },
  head() {
    return {
      title: "York Prado's Homepage",
      meta: [
        { property: 'og:title', content: "York Prado's Homepage" },
        { property: 'og:site_name', content: 'YorkPrado.com' },
        // The list of types is available here: http://ogp.me/#types
        { property: 'og:type', content: 'website' },
        // Should the the same as your canonical link, see below.
        {
          property: 'og:url',
          content: 'https://www.yorkprado.com',
        },
        {
          property: 'og:image',
          content: '/Project/PersonalWebsite.png',
        },
        // Often the same as your meta description, but not always.
        {
          property: 'og:description',
          content:
            "York Prado, Oakland Based Technology Consultant's Personal Website.",
        },

        { name: 'twitter:title', content: "York Prado's Homepage" },
        {
          name: 'twitter:description',
          content:
            "York Prado, Oakland Based Technology Consultant's Personal Website.",
        },
        { name: 'twitter:image', content: '/Project/PersonalWebsite.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
        {
          name: 'description',
          content:
            "York Prado, Oakland Based Technology Consultant's Personal Website.",
        },
        { itemprop: 'name', content: "York Prado's Homepage" },
        {
          itemprop: 'description',
          content:
            "York Prado, Oakland Based Technology Consultant's Personal Website.",
        },
        {
          itemprop: 'image',
          content: '/Project/PersonalWebsite.png',
        },
      ],
    };
  },
  computed: {
    ...mapGetters({
      getRandomFour: 'Photography/getRandomFour',
    }),
  },
  mounted() {
    // eslint-disable-next-line prefer-const
    let setOfImages = [];
    for (let i = 0; i < this.getRandomFour.length; i++) {
      const img = new Image();
      const img2 = new Image();
      img.onload = this.addShowImg();
      img.src = this.getRandomFour[i].tinyimg;
      img2.src = this.getRandomFour[i].image;
      setOfImages.push(img);
      setOfImages.push(img2);
    }
  },
  methods: {
    addShowImg() {
      this.showImg++;
    },
  },
};
</script>

<style scoped>
.project-container {
  padding-top: 0em;
}
.card-body,
.card-footer {
  display: block;
}
.lead {
  padding-top: 2rem;
  padding-bottom: 1rem;
  letter-spacing: 0.15em;
  font-weight: 500;
  font-family: 'Lato';
}
.headerClass {
  padding-top: 6rem;
  padding-bottom: 8rem;
  margin-bottom: 0em;
}
.projectButton {
  letter-spacing: 0.15em;
  font-weight: 700;
  font-family: 'Lato';
  color: var(--gray);
  background: 0%;
  border-radius: 25px;
  border-color: var(--gray);
  border-width: 0.1rem;
  padding: 0.3em 0.7em 0.3em 0.7em;
}
.projectButton:hover {
  color: var(--gray);
  background: 0%;
  border-radius: 25px;
  border-color: var(--pink);
  border-width: 0.2rem;
  padding: 0.2em 0.6em 0.2em 0.6em;
}
.display-3 {
  font-size: 3rem;
  font-weight: 300;
}
.boldest {
  font-weight: 900;
}
.card {
  border: 1px solid rgba(106, 112, 113, 0.3);
}
.card-container {
  padding-left: 0em;
  padding-right: 0em;
}
.v-lazy-image {
  filter: blur(20px);
  transition: filter 1.1s;
}

.v-lazy-image-loaded {
  filter: blur(0);
}
.indexClass {
  background: var(--secondary-bg-color);
}
</style>
