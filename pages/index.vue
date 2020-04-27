<template>
  <div>
    <b-jumbotron class="headerClass">
      <template v-slot:header>
        Hello, <b class="boldest">I'm York.</b><br />
        I'm a Solutions Architect from Oakland, CA.
      </template>
      <template v-slot:lead>
        My work has sent me all over the world, engaging with clients to deliver
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
    <b-container fluid class="project-container">
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
          <b-card :img-src="photo.image" img-alt="Image" img-top class="h-100">
            <template v-slot:footer>
              <small class="text-muted">{{ photo.title }}</small>
            </template>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters({
      getRandomFour: 'Photography/getRandomFour',
    }),
  },
};
</script>

<style scoped>
.project-container {
  padding-top: 0em;
}
.card-body,
.card-footer {
  display: none;
}
.lead {
  padding-top: 2rem;
  padding-bottom: 1rem;
}
.headerClass {
  padding-top: 6rem;
  padding-bottom: 10rem;
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
</style>
