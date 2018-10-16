<template>
  <f7-page>
    <f7-navbar title="DEMO2" back-link="Back"></f7-navbar>
     <f7-block-title>DEMO2</f7-block-title>
    <f7-block strong>
      <p>Tweenmax 需要使用‘vw’单位做位移。</p>
      </f7-block>
      <div class="vwAni" @click="vwAni">vwAni click</div>
  </f7-page>
</template>

<script>
import Vue from 'vue';
import '../css/demo2.css';
export default {
  methods:{

   vwAni:function(){
      this.$f7router.navigate('/HomePage/');
            // var t = new TimelineLite();
            // t.to(".vwAni",2,{left:Vue.prototype.px_vw(650),scale:1});  
      } 
  }

}
</script>

 
