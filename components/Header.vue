<template>
  <div class="headerClassWrapper">
    <div>
      <b-jumbotron class="headerClass">
        <template v-slot:header>
          {{ headerText }}
        </template>
        <template v-slot:lead>
          {{ leadText }}
        </template>
      </b-jumbotron>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  components: {},
  // eslint-disable-next-line vue/require-default-prop
  props: { headerText: String, leadText: String },
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>
<style scoped>
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
.headerClassWrapper {
  background: var(--secondary-bg-color);
}
</style>
