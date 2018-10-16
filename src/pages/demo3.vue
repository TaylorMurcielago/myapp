<template>
  <f7-page>
    <f7-navbar title="DEMO3" back-link="Back"></f7-navbar>
    <f7-block-title>DEMO3</f7-block-title>
    <f7-block strong>
      <p>Here is DEMO3 page!</p>
         <v-home></v-home>
      </f7-block>
  </f7-page>
</template>

<script>
 import Home from '../components/ComponentsDemo.vue';
  export default {
    name: 'app',

    data () {         // data是业务逻辑里面定义的数据
      return {
        msg:'我是区分别的组件文字~'
        
       }
    },
    components:{
      'v-home':Home    // 组件名(Home)与html标签名(v-home)不可以一样

    }

  } 
</script> 