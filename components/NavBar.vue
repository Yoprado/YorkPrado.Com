<template>
<div>
  <b-navbar toggleable="lg">
    <b-navbar-brand class="logo">
      <nuxt-link :to="{name: 'index'}" class="navbarBrand">
        Y/<span class="secondary-color">P</span>
      </nuxt-link>
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse" right></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto text-decoration-none" right>
          <nuxt-link class="linkly" :to="{name: 'index'}">About Me</nuxt-link>
          <nuxt-link :to="{name: 'index'}" class="linkly">Projects</nuxt-link>
          <nuxt-link :to="{name: 'index'}" class="linkly">Family Recipes</nuxt-link>
          <nuxt-link :to="{name: 'index'}" class="linkly">Photography</nuxt-link>
          <nuxt-link :to="{name: 'index'}" class="linkly">Resume</nuxt-link>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.navbarBrand{
  color: var(--gray);
  text-decoration: none !important;
}
.navbarBrand:hover{
  color: var(--pink);
  text-decoration: none !important;
}
.navbarBrand .secondary-color:hover{
  color: var(--gray);
  text-decoration: none !important;
}
.linkly {
  padding-top: .6rem;
  padding-bottom: .6rem;
  padding-left: .6rem;
  padding-right: .6rem;
  text-align: right;
  text-decoration: none !important;
  color: var(--gray);
}
.linkly:hover{
  padding: .5rem .5rem .5rem .5rem;
  border: .1rem solid var(--pink);
  border-radius: 25px;
}
.ml-auto {
  letter-spacing: 0.1em;
  font-weight: 600;
  font-family: "Avenir Black";
  font-size: 1em;
  text-decoration: none !important;
  color: var(--gray);
}
.nav-item {
  text-align: right;
}
@media screen and (max-width: 991px) {
  .linkly {
    border-right: 0px !important;
  }
}
.navbar-nav .linkly:not(:last-child) {
}
.logo {
  font-size: 5rem;
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
