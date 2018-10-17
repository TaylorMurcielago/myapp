<template>
  <!-- App -->
  <div id="app">


    <!-- Main View -->
    <f7-view url="/" main 
      :pushState="true"
      :pushStateSeparator="'#!'"
      :iosSwipeBack="false"
      :animate="false"
      :preloadPreviousPage="true"

    >
    </f7-view>


    <!-- Popup
    <f7-popup>
      <f7-view popup>
      </f7-view>
    </f7-popup>  -->

    

  </div>
</template>

<script>

export default {

  data() {

      return {
        main : {
          
        },
        popup : {

        },
        
      };

    },

  methods: {
      onF7Ready(f7) {




      },
      
  },



}
</script>
