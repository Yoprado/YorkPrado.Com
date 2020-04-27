<template>
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
  padding-bottom: 3em;
}
.card {
  border: 1px solid rgba(106, 112, 113, 0.3);
}
</style>
