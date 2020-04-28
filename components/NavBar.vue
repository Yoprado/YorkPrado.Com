<template>
  <div>
    <b-navbar toggleable="xl" fixed="top" class="navBarclass">
      <b-navbar-brand
        :disabled="currentPage === 'index'"
        :to="{ name: 'index' }"
        class="logo navbarBrand"
        @click="getcurrentPage"
        >Y/<span class="secondary-color">P</span>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse" right></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto text-decoration-none" right>
          <b-nav-item
            :class="currentPage === 'Projects' ? 'linklyDisabled' : 'linkly'"
            :to="{ name: 'Projects' }"
            >PROJECTS</b-nav-item
          >
          <span class="border">|</span>
          <b-nav-item
            :class="
              currentPage === 'FamilyRecipes' ? 'linklyDisabled' : 'linkly'
            "
            :to="{ name: 'FamilyRecipes' }"
            >FAMILY RECIPES</b-nav-item
          >
          <span class="border">|</span>
          <b-nav-item
            :class="currentPage === 'Photography' ? 'linklyDisabled' : 'linkly'"
            :to="{ name: 'Photography' }"
            >PHOTOGRAPHY</b-nav-item
          >
          <span class="border">|</span>
          <b-nav-item
            :class="currentPage === 'AboutMe' ? 'linklyDisabled' : 'linkly'"
            :to="{ name: 'AboutMe' }"
            >ABOUT ME</b-nav-item
          >
          <span class="border">|</span>
          <b-nav-item
            :class="currentPage === 'Resume' ? 'linklyDisabled' : 'linkly'"
            :to="{ name: 'Resume' }"
            >RESUME</b-nav-item
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: '',
    };
  },
  watch: {
    $route() {
      this.getcurrentPage();
    },
  },
  mounted() {
    this.currentPage = this.$nuxt.$route.name;
  },
  methods: {
    getcurrentPage() {
      this.currentPage = this.$nuxt.$route.name;
    },
  },
};
</script>

<style scoped>
.navBarclass {
  background-color: var(--main-bg-color);
  z-index: 100;
}
.linklyDisabled {
  cursor: default;
  font-weight: 900;
  padding-top: 0.4rem;
  padding-left: 0.4rem;
  padding-right: 0.4rem;
  margin: 0.1rem 0.1rem 0.1rem 0.1rem;
  text-align: right;
  text-decoration: none !important;
  color: var(--gray) !important;
}
.linklyDisabled a {
  border-bottom: 1px solid var(--pink);
  padding-bottom: 0.05rem;
  cursor: default;
}
.nav-link.disabled:hover {
  border: 0 !important;
}
.border {
  font-family: 'Lato';
  font-size: 2em;
}
.navbarBrand {
  color: var(--gray);
  text-decoration: none !important;
}
.navbarBrand:hover {
  color: var(--pink);
  text-decoration: none !important;
}
.linkly,
.linkly a {
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
  padding-left: 0.4rem;
  padding-right: 0.4rem;
  margin: 0.1rem 0.1rem 0.1rem 0.1rem;
  text-align: right;
  text-decoration: none !important;
  color: var(--gray) !important;
}
.linkly:hover {
  padding: 0.2rem 0.2rem 0.2rem 0.2rem;
  margin: 0.1rem 0.1rem 0.1rem 0.1rem;
  border: 0.2rem solid var(--pink);
  border-radius: 1.2rem;
}
.ml-auto {
  letter-spacing: 0.15em;
  font-weight: 500;
  font-family: 'Lato';
  font-size: 1em;
  text-decoration: none !important;
  color: var(--gray);
}
.nav-item {
  text-align: right;
}
@media screen and (max-width: 1199px) {
  .border {
    display: none;
  }
}
.logo {
  font-size: 4.5rem;
  color: var(--gray);
  font-weight: 700;
}
.secondary-color {
  color: #ff1f5f;
}
.nav .logo {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.nav .logo .subheader {
  opacity: 0.7;
  font-size: 0.9rem;
  color: white;
}
.nav .nav-content {
  font-size: 1rem;
}
.nav-content ul {
  display: flex;
  list-style: none;
}
.nav-content ul li {
  padding: 2px 10px;
}
.nav-content ul li:not(:first-of-type) {
  border-left: 1px solid rgb(255, 255, 255, 0.2);
}
</style>
