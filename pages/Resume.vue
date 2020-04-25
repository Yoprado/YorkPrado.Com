<template>
   <div>
      <no-ssr>
         <vuePdf src="/YorkPrado2020.pdf"></vuePdf>
      </no-ssr>
   </div>
</template>
<script>
let vuePdf
if (process.browser) {
  vuePdf = require('vue-pdf').default
}
export default {
  components: {
    vuePdf
  }
}
</script>
