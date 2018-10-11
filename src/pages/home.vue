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
    </f7-block> 
  </f7-page>
</template>
<style>
.test{
  width: 100px;
  height: 100px;
  position: absolute;
  top: 100px;
  left: 50px;
  background-color: blue;
}
</style>

<script>
import Vue from 'vue';
import $ from 'jquery';
import '../css/home.css';
    // 全局函数
    // Vue.prototype.bb = function () {
    //   alert('OK');
    // }
    export default { 
      methods:{
        //vue绑定事件方法   @click  or  v-on:click
        show:function(){
        alert("vue事件绑定方法"); 
      }  
    }
    ,
     beforeCreate: function() {
       console.log("添加loading");
     },
      beforeMount() {
        console.log('模板编译之前');		
        },	
      mounted() { 
        /*请求数据，操作dom*/
        // jquery绑定函数操作
          $(".jqueryAlert").bind("click",function(){
            alert("jquery绑定方法");
              var t = new TimelineLite();
            t.to(".tweenDiv",2,{top:300,scale:0.5}); 
          })
        }
                                        
    }
</script>
