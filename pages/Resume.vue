<template>
  <div>
    <client-only>
      <b-container class="bv-example-row">
        <b-row>
          <b-col cols="12">
            <vue-pdf
              class="pdf-class"
              :src="pdfSrc"
              :page="1"
              @num-pages="pdfPageCount = $event"
            />
            <div v-if="pdfPageCount > 1">
              <div v-for="(pageNum, index) in pdfPageCount" :key="index">
                <vue-pdf
                  v-if="pageNum > 1"
                  class="pdf-class"
                  :src="pdfSrc"
                  :page="pageNum"
                />
              </div>
            </div>
          </b-col>
          <b-col class="button-col"
            ><b-button
              class="projectButton"
              href="/YorkPrado2020.pdf"
              download="YorkPradoResume.pdf"
              >Download Resume</b-button
            ></b-col
          >
        </b-row>
      </b-container>
    </client-only>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pdfSrc: '/YorkPrado2020.pdf',
      pdfPageCount: 0,
    };
  },
};
</script>
<style scoped>
.container {
  display: block !important;
}
.pdf-class {
  margin: 3em 1em 1em 1em;
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
.button-col {
  padding-top: 2em;
  text-align: center;
  padding-bottom: 2em;
}
</style>
