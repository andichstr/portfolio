<template>
  <div>
    <Header/>
    <div class="home">
      <p class="about">
        <span>Born in 1992</span>
        <span>in Buenos Aires</span>
        <span><strong>Argentina</strong></span>
        <span>Passionate for technology</span>
        <span>Always preparing</span>
        <span>for the <strong>future</strong></span>
        <span>Giving my best</span>
        <span>In each project</span>
      </p>
    </div>
  </div>
</template>

<script>
import Header from "../components/PortfolioHeader.vue";

export default {
  components: { Header },
};
</script>

<style>
.home{
  z-index: 9;
  position: absolute;
  bottom: 0;
  right: 0;
  white-space: nowrap;
  user-select: none;
  pointer-events: none;
  padding-right: calc(var(--pad)*1.5);
  padding-bottom: calc(var(--pad));
}
.about span{
  display: block;
  font-weight: 300;
}
</style>