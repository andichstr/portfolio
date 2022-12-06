<template>
    <div>
      <Header/>
      <div class="contactPage">
        <div class="contactContent" v-for="(contact, i) in contacts" :key="i">
          <a class="contactText" :href=contact.url><img class="contactImg" :class="isLight" src="../assets/img/inside.png" :alt=contact.name>{{contact.name}}</a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Header from "../components/PortfolioHeader.vue";
  import { mapGetters } from "vuex";

  export default {
    components: { Header },
    data(){
      return {
        "contacts": [
          {
            "url": "https://www.linkedin.com/in/andres-schuster-a925a6a1/",
            "name": "Linkedin",
          },
          {
            "url": "mailto:andresschuster@outlook.com",
            "name": "Mail",
          },
          {
            "url": "https://github.com/andichstr",
            "name": "Github",
          }
        ]
      }
    },
    computed:{
      ...mapGetters(['getTheme']),
      isLight(){
        return this.getTheme==='light' ? '' : 'dark'
      }
    }
  };
  </script>

<style>
  .contactPage{
    z-index: 10;
    position: absolute;
    bottom: calc(var(--pad)*2);
    right: calc(var(--pad)*2);
    margin: 0;
    padding: 0;
  }
  .contactText{
    display: block;
    transition-property: opacity;
    transition-duration: .5s;
    transition-timing-function: cubic-bezier(0.1, 0.4, 0.2, 1);
  }
  .contactText, .contactText{
    margin-top: 1em;
  }
  .contactText:hover{
    opacity: 0.5;
  }
  .contactImg{
    width: auto;
    height: 10px;
    padding-right: 2px;
  }
  .contactImg.dark{
    -webkit-filter: invert(100%);
    filter: invert(100%);
    background-color: var(--color-bg);
  }
</style>