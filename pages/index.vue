<template>
  <div>
    <b-jumbotron class="headerClass">
      <template v-slot:header>
        <p>Hello, <b class="boldest">I'm York.</b></p>
        <p>I'm a Solutions Architect from San Francisco.</p>
      </template>
      <template v-slot:lead>
        <p class="lead-text">
          My work has sent me all over the world, working with clients to
          deliver meaningful, scalable web solutions from idea inception, pilot,
          to full scale production. My experience involves full stack
          development specializing in analytics visualizations and emerging
          technologies such as IoT, 3D printing, cognitive computing, natural
          language processing, and augmented/virtual reality.
        </p>
      </template>
      <b-button class="projectButton" :to="{ name: 'Projects' }"
        >See My Projects</b-button
      >
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style scoped>
.lead-text {
  padding-top: 2rem;
  padding-bottom: 1rem;
}
.headerClass {
  padding-top: 6rem;
  padding-bottom: 10rem;
}
.projectButton {
  letter-spacing: 0.15em;
  font-weight: 700;
  font-family: 'Avenir Black';
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
</style>
