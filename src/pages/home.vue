<template  >
  <f7-page id='app'> 
    <f7-toolbar>
      <f7-link>Left Link</f7-link>
      <f7-link>Right Link</f7-link>
    </f7-toolbar>
    <f7-block strong>
      <p  @click='show'>vue事件绑定方法</p>
      <p  class="jqueryAlert">jquery绑定方法</p>
      <div class="tweenDiv">
        ok
      </div>
       <div class="test">
     test
      </div>
      <f7-button class="px-test" @click="nav_px_test">
      
       PX_VW_% test
      </f7-button>
        <f7-button class="vw-test"  @click="nav_vw_test">
       VW tweenmax
      </f7-button>
        <f7-button class="percent-test"  @click="nav_percent_test">
       components-test
      </f7-button>
    </f7-block> 
  </f7-page>
</template>
<style> 
</style>

<script>
import Vue from 'vue';
import $ from 'jquery';
import '../css/home.css'; 
      Vue.prototype.px_vw = function (px) {
       var vw=px/750*100;
        return(vw+'vw');
    }
    export default { 
      methods:{
        //vue绑定事件方法   @click  or  v-on:click
        show:function(){
         alert("vue事件绑定方法");  
           var t = new TimelineLite();
            t.to(".tweenDiv",2,{top:800,scale:2}); 
      }  ,
      nav_px_test:function(){
        this.$f7router.navigate('/demo1/');
      },
       nav_vw_test:function(){
        this.$f7router.navigate('/demo2/');
      },
       nav_percent_test:function(){
        this.$f7router.navigate('/swiper/');
      }
    }
    ,
     beforeCreate: function() {
       alert("添加loading");
     },
      beforeMount() {
        console.log('模板编译之前');		
        },	
      mounted() {  
        /*请求数据，操作dom*/
        // jquery绑定函数操作
          $(".jqueryAlert").bind("click",function(){
            // 跳转问题 
            //  this.$f7router.navigate('/demo/');
            alert("jquery绑定方法");
              var t = new TimelineLite();
            t.to(".tweenDiv",2,{top:600,scale:2}); 
            
          })
        }
                                        
    }
</script>
