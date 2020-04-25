<template>
<div>
  <b-navbar toggleable="lg">
    <b-navbar-brand :to="{name: 'index'}" class="logo navbarBrand">
        Y/<span class="secondary-color">P</span>
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse" right></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto text-decoration-none" right>
          <b-nav-item class="linkly" :to="{name: 'AboutMe'}">About Me</b-nav-item>
          <span class="border"> | </span>
          <b-nav-item :to="{name: 'Projects'}" class="linkly">Projects</b-nav-item>
          <span class="border"> | </span>
          <b-nav-item :to="{name: 'FamilyRecipes'}" class="linkly">Family Recipes</b-nav-item>
          <span class="border"> | </span>
          <b-nav-item :to="{name: 'Photography'}" class="linkly">Photography</b-nav-item>
          <span class="border"> | </span>
          <b-nav-item :to="{name: 'Resume'}" class="linkly">Resume</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.border{
  font-family: "Avenir Black";
  font-size: 2em;
}
.navbarBrand{
  color: var(--gray);
  text-decoration: none !important;
}
.navbarBrand:hover{
  color: var(--pink);
  text-decoration: none !important;
}
.linkly, .linkly a{
  padding-top: .4rem;
  padding-bottom: .4rem;
  padding-left: .4rem;
  padding-right: .4rem;
  margin: .1rem .1rem .1rem .1rem;
  text-align: right;
  text-decoration: none !important;
  color: var(--gray) !important;
}
.linkly:hover{
  padding: .2rem .2rem .2rem .2rem;
  border: .2rem solid var(--pink);
  border-radius: 1.2rem;
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
  .border {
    display:none;
  }
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
