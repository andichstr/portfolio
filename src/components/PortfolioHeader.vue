<template>
  <header>
    <h1>Andrés Schuster</h1>
    <p class="subtitle">Fullstack Developer</p>
    <ul>
      <li><router-link to="/"><span v-if='notHome'>Home</span><span v-else>•</span></router-link></li>
      <li><router-link to="/projects"><span v-if="$route.path != '/projects'">Projects</span><span v-else>•</span></router-link></li>
      <li><router-link to="/contact"><span v-if="$route.path != '/contact'">Contact</span><span v-else>•</span></router-link></li>
    </ul>
  </header>
</template>

<script>
export default {
    name: "PortfolioHeader",
    computed: {
        notHome(){
            return (this.$route.path=='/projects' || this.$route.path=='/contact') ? true : false;
        }
    }
};
</script>

<style>
header{
  position: fixed;
  z-index: 10;
  left: calc(var(--pad)*2);
  top: calc(var(--pad)*2);
}

h1 {
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 3rem;
  font-weight: 400;
}
.subtitle{
  margin: 0;
  font-size: 1.2rem;
  font-weight: 300;
}
a{
    font-weight: 600;
    text-decoration: none;
    font-size: 0.8rem;
}
ul{
    list-style: none;
    padding: 0;
}
</style>