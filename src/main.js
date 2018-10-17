// Import Vue
import Vue from 'vue';


// Import F7
import Framework7 from './vendor/framework7/framework7.esm.js';


// Import F7 Vue Plugin
//import Framework7Vue from 'framework7-vue/dist/framework7-vue.esm.bundle.js';
import Framework7Vue from './vendor/framework7/framework7-vue.esm.js';


// Import F7 Styles
import Framework7Styles from './vendor/framework7/framework7.less';




// Import Icons and App Custom Styles
import IconsStyles from './css/icons.css';
import AppStyles from './css/app.css';

// Import Routes
import Routes from './routes.js'

// Import App Component
import App from './app';

// Init F7 Vue Plugin
Vue.use(Framework7Vue, Framework7);

// Init App
new Vue({
    el: '#app',
    template: '<app/>',
    // Init Framework7 by passing parameters here
    framework7: {
        id: 'io.framework7.h5', // App bundle ID
        name: '', // App name
        theme: 'ios', // Automatic theme detection
        // App routes
        routes: Routes,

        view: {

            //reloadPages: false,
            //pushState: true,
            //animate: true,
            //pushStateSeparator: "#",
            url: "/",


        },
        dialog: {

            title: '',

            buttonOk: '确认',
            buttonCancel: '取消',

        }

    },
    // Register App Component
    components: {
        app: App
    }
});