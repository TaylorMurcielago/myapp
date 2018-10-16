<template>
    <div>
        <h2>这是一个home组件</h2>
        <div>{{msg}}</div>
       <button class="btn" @click='test'>{{msg1}}</button>
    </div>


</template>
<script type="text/javascript">
    export default{
        data(){
            return{
                msg:'这是一个home组件的区分',
                 msg1:'组件测试按钮' 
            }
        } ,
        methods:{
            test:function(){
                alert("组件测试");
            }
        }
    }
</script>
<style type="text/css" scoped>   /*scoped：表明style里的css样式只适用于当前组件元素 */
    h2{
        color:blue;
    }
    .btn{
        color: blueviolet;
        width: 300px;
        height: 100px;
    }
</style>