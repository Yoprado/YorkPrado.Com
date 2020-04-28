<template>
  <div>
    <b-jumbotron class="headerClass">
      <template v-slot:header>
        Side Projects and Hobbies
      </template>
      <template v-slot:lead>
        Currently my project work has me deliver smart factory projects all
        across the States. Beyond that work and travel, my passions include
        exploring emerging technologies, developing analytics visualizations,
        and all things IoT. I plan on further extending out this page into
        individual side project pages to describe my journey in each project and
        share what I can.
        <i> Stay Tuned!</i>
      </template>
    </b-jumbotron>

    <b-container fluid class="project-container">
      <b-row>
        <b-col
          v-for="project in Projects"
          :key="project.id"
          class="card-container"
          lg="4"
          xl="4"
          md="6"
          sm="12"
          cols="12"
        >
          <b-card
            :title="project.title"
            :img-src="project.image"
            img-alt="Image"
            img-top
            class="h-100"
          >
            <b-card-text>
              {{ project.description }}
            </b-card-text>
            <template v-slot:footer>
              <small class="text-muted"
                ><b>Tech: </b>{{ keywordsToString(project.id) }}</small
              >
            </template>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters({
      getProjectPicInfo: 'Projects/getProjectPicInfo',
      getProjectLength: 'Projects/getProjectLength',
      keywordsToString: 'Projects/keywordsToString',
    }),
    ...mapState({
      Projects: state => state.Projects.projectContent,
    }),
  },
  mounted() {},
  methods: {},
};
</script>
<style scoped>
.project-container {
  padding-top: 5em;
}
.card-container {
  padding-bottom: 1.5em;
  background: var(--main-bg-color);
  border-left: 1px solid rgba(106, 112, 113, 0.3);
  border-right: 1px solid rgba(106, 112, 113, 0.3);
}
.card {
  border: 0px;
  background: var(--main-bg-color);
  padding-left: 1rem;
  padding-right: 1rem;
}
.card-body .card-title {
  font-family: 'Georgia', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  font-size: 2em;
  font-weight: 900;
}
.card-body .card-text {
  font-family: 'Lato';
  letter-spacing: 0.1em;
  font-size: 1.2em;
}
.card .card-footer {
  background: var(--main-bg-color);
  border: 0px;
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
.headerClass {
  padding-top: 3rem;
  padding-bottom: 2rem;
  margin-bottom: 4em;
}
</style>
