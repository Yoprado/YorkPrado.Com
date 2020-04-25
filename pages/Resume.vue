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
</style>
