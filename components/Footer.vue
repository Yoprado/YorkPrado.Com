<template>
  <b-container fluid>
    <b-row class="text-center" align-v="center">
      <b-col lg="4" xl="4" md="3" sm="2" cols="0" class="blankDiv"></b-col>
      <b-col lg="4" xl="4" md="5" sm="6" cols="7" class="footerCopyDiv">
        <p>&#169; 2020 York Prado. All Rights Reserved.</p>
      </b-col>
      <b-col lg="4" xl="4" md="4" sm="4" cols="5" class="footerIconDiv">
        <a href="https://github.com/Yoprado/">
          <img class="footerIcon" src="~/static/Footer/github.png" />
        </a>
        <a href="https://www.instagram.com/yoprado87">
          <img class="footerIcon" src="~/static/Footer/instagram.png" />
        </a>
        <a href="https://www.linkedin.com/in/yoprado/">
          <img class="footerIcon" src="~/static/Footer/linkedin.png" />
        </a>
        <nuxt-link to="/photodump">
          <img class="footerIcon" src="~/static/Footer/photogallery.png" />
        </nuxt-link>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.footerIconDiv {
  text-align: right;
}
.footerCopyDiv p {
  transform: translateY(50%);
  top: 50%;
}
.footerCopyDiv {
  text-align: center;
  vertical-align: middle;
  font-size: 0.9em;
}
.footerIcon {
  width: 1.5em;
}
@media screen and (max-width: 608px) {
  .footerIconDiv {
    text-align: right;
  }
  .footerCopyDiv {
    text-align: center;
    font-size: 0.9em;
  }
  .footerIcon {
    width: 1.5em;
  }
}
@media screen and (max-width: 575px) {
  .footerIconDiv {
    text-align: right;
  }
  .footerCopyDiv {
    text-align: center;
    font-size: 0.8em;
  }
  .footerIcon {
    width: 1.2em;
  }
}
</style>
