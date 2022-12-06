<template>
    <div>
      <Header/>
      <div class="projectPage">
        <h2 class="projectHeading">Personal projects</h2>
        <div class="projectList" v-for="(project, i) in projects" :key="i">
          <a class="projectItem textBtn" :href=project.url target="_blank" rel="noopener">
            <div class="projectTitle">{{project.title}}</div>
            <div class="projectInfo">{{project.info}}</div>
          </a>
        </div>
      </div>
    </div>
</template>
  
  <script>
  import Header from "../components/PortfolioHeader.vue";
  
  export default {
    components: { Header },
    data(){
      return {
        projects: [
          {
            "title": "Notes Application (Fullstack)",
            "info": "Java / Vue.js",
            "url": "https://github.com/andichstr/notes-springboot-vue"
          },
          {
            "title": "Food e-commerce (Frontend)",
            "info": "Vue.js",
            "url": "https://github.com/andichstr/proyecto-final-vuex"
          }
        ]
      }
    }
  };
  </script>

<style scoped>
.projectPage{
  position: relative;
  z-index: 9;
  padding: calc(var(--pad)*2 + 96px) calc(var(--pad)*2);
  text-align: right;
  white-space: nowrap;
  user-select: none;
}
.projectHeading{
  font-weight: 300;
  font-size: 1.5rem; 
}
.projectList{
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  row-gap: 15px;
  margin-top: 50px;
}
.textBtn{
  transition-property: opacity;
  transition-duration: .5s;
  transition-timing-function: cubic-bezier(0.1, 0.4, 0.2, 1);
}
.textBtn:hover{
  opacity: 0.5;
}
.projectTitle{
  font-weight: 200;
  font-size: 30px;
  text-align: right;
}
.projectInfo{
  margin-top: 5px;
}

</style>