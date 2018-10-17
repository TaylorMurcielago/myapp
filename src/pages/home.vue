<template> 
<f7-page no-navbar no-toolbar> 
      <div class="block block-strong">
         <div class="row">
            <div class="col-50"><a href="javascript:;" class="button-fill button-raised panel-open button">About</a></div>
            <div class="col-50"><a href="javascript:;" class="button-fill button-raised panel-open button">Form</a></div>
         </div>
      </div>
     <f7-button class='tweenmax_test'>
       Tweenmax
     </f7-button> 
      <f7-button class='swiper_test'>
       swiper_test
     </f7-button>  
      <f7-button class='comDemo_test'>
      compennetsDemo
     </f7-button>  
</f7-page> 
</template> 
<style scoped>
.page { 
} 
</style> 
<script>
import $ from 'jquery';
// Import Tweenmax
import { TweenMax, TimelineLite } from "gsap";
export default { 
  data() { 
      return {
        page : null, 
      }; 
    }, 
  methods: { 
      update() { 
        console.log(this.page); 
      } 
  }, 
  on: { 
      pageInit(event, page) { 
        this.page = page;
        console.log(page.view.id + ': page init ' + page.route.url); 
      }, 
      pageReinit(event, page) { 
        console.log(page.view.id + ': page reinit ' + page.route.url); 
      }, 
      pageBeforeIn(event, page) { 
        console.log(page.view.id + ': page before in ' + page.route.url); 
      }, 
      pageAfterIn(event, page) { 
        console.log(page.view.id + ': page after in ' + page.route.url); 
        var f7 = this.$f7; 
        this.page.$el.find(".button").on("click", function() { 
          // f7.dialog.alert("Hello World"); 
          // f7.dialog.prompt("Hello World", "Hello World"); 
          // f7.dialog.progress();  
        }); 
        this.page.$el.find(".comDemo_test").on("click", function() { 
           f7.router.navigate('/compennetsdemo/'); 
          // f7.dialog.alert("Hello World"); 
          // f7.dialog.prompt("Hello World", "Hello World"); 
          // f7.dialog.progress();  
        }); 
        $(".tweenmax_test").click(function(){ 
           var t = new TimelineLite();
          t.to(".tweenmax_test",2,{top:300,scale:1});  
        }) 
          $(".swiper_test").click(function(){
          f7.router.navigate('/swiper/'); 
        }) 
      }, 
      pageBeforeOut(event, page) { 
        console.log(page.view.id + ': page before out ' + page.route.url); 
      }, 
      pageAfterOut(event, page) { 
        console.log(page.view.id + ': page after out ' + page.route.url); 
      }, 
      pageBeforeRemove(event, page) { 
        console.log(page.view.id + ': page before remove ' + page.route.url); 
      }
    } 
}
</script>
