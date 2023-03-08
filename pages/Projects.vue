<template>
  <div class="projectsClass">
    <b-jumbotron class="headerClass">
      <template v-slot:header>
        Side Projects and Hobbies
      </template>
      <template v-slot:lead>
        In addition to managing a professional services team that delivers
        integrations using a modern low-code SaaS platform for enterprise-level
        customers, I also love to work on side projects and explore new
        technologies in my spare time.
        <br /><br />
        On this page, you can learn more about my personal projects and
        technical endeavors outside of my job. From building small applications
        to experimenting with cutting-edge technologies, I'm always looking for
        new ways to expand my skills and knowledge.
        <br /><br />
        Currently, I'm in the process of developing individual pages for each of
        my side projects to provide more details about my journey and share what
        I've learned along the way. So stay tuned for more updates!
        <br /><br />
        If you have any questions or want to discuss a potential collaboration,
        feel free to reach out to me. Thanks for visiting!
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
  padding-top: 0em;
}
.card-container {
  padding-bottom: 1.5em;
  background: var(--secondary-bg-color);
  border-left: 1px solid rgba(106, 112, 113, 0.3);
  border-right: 1px solid rgba(106, 112, 113, 0.3);
}
.card {
  border: 0px;
  background: whitesmoke;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 1rem;
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
  background: whitesmoke;
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
.projectsClass {
  background: var(--secondary-bg-color);
}
</style>
