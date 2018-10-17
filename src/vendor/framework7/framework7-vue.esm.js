/* eslint no-param-reassign: "off" */
import Utils from 'framework7-vue/src/utils/utils';
import Directives from 'framework7-vue/src/utils/directives';
import VueRouter from 'framework7-vue/src/utils/vue-router';
import Mixins from 'framework7-vue/src/utils/mixins';


// Core Components
// view
import f7View from 'framework7-vue/src/components/view.vue';
import f7Views from 'framework7-vue/src/components/views.vue';
// model
import f7RoutableModals from 'framework7-vue/src/components/routable-modals.vue';
// page
import f7Page from 'framework7-vue/src/components/page.vue';
import f7PageContent from 'framework7-vue/src/components/page-content.vue';
// popup
import f7Popup from 'framework7-vue/src/components/popup.vue';
// dialog - no vue
// toast - no vue
// actions
import f7Actions from 'framework7-vue/src/components/actions.vue';
import f7ActionsGroup from 'framework7-vue/src/components/actions-group.vue';
import f7ActionsButton from 'framework7-vue/src/components/actions-button.vue';
import f7ActionsLabel from 'framework7-vue/src/components/actions-label.vue';
// preloader
import f7Preloader from 'framework7-vue/src/components/preloader.vue';
// swiper
import f7Swiper from 'framework7-vue/src/components/swiper.vue';
import f7SwiperSlide from 'framework7-vue/src/components/swiper-slide.vue';
// popover
import f7Popover from 'framework7-vue/src/components/popover.vue';
// notification - no vue
// input
import f7Input from 'framework7-vue/src/components/input.vue';
import f7Label from 'framework7-vue/src/components/label.vue';
// button
import f7Button from 'framework7-vue/src/components/button.vue';
import f7Segmented from 'framework7-vue/src/components/segmented.vue';
// sheet
import f7Sheet from 'framework7-vue/src/components/sheet.vue';
// picker - no vue
// calendar - no vue


// Mobile APP Core Components
// statusbar
import f7Statusbar from 'framework7-vue/src/components/statusbar.vue';
// navbar
import f7Navbar from 'framework7-vue/src/components/navbar.vue';
import f7NavLeft from 'framework7-vue/src/components/nav-left.vue';
import f7NavRight from 'framework7-vue/src/components/nav-right.vue';
import f7NavTitle from 'framework7-vue/src/components/nav-title.vue';
// toolbar
import f7Toolbar from 'framework7-vue/src/components/toolbar.vue';
// subnavbar
import f7Subnavbar from 'framework7-vue/src/components/subnavbar.vue';
// touch-ripple - no vue


// Other Components
// accordion
import f7Accordion from 'framework7-vue/src/components/accordion.vue';
import f7AccordionItem from 'framework7-vue/src/components/accordion-item.vue';
import f7AccordionToggle from 'framework7-vue/src/components/accordion-toggle.vue';
import f7AccordionContent from 'framework7-vue/src/components/accordion-content.vue';
// autocomplete - no vue
// badge
import f7Badge from 'framework7-vue/src/components/badge.vue';
// block
import f7Block from 'framework7-vue/src/components/block.vue';
import f7BlockTitle from 'framework7-vue/src/components/block-title.vue';
import f7BlockHeader from 'framework7-vue/src/components/block-header.vue';
import f7BlockFooter from 'framework7-vue/src/components/block-footer.vue';
// card
import f7Card from 'framework7-vue/src/components/card.vue';
import f7CardHeader from 'framework7-vue/src/components/card-header.vue';
import f7CardContent from 'framework7-vue/src/components/card-content.vue';
import f7CardFooter from 'framework7-vue/src/components/card-footer.vue';
// checkbox
import f7Checkbox from 'framework7-vue/src/components/checkbox.vue';
// chip
import f7Chip from 'framework7-vue/src/components/chip.vue';
// data-table - no vue
// fab
import f7Fab from 'framework7-vue/src/components/fab.vue';
import f7FabButtons from 'framework7-vue/src/components/fab-buttons.vue';
import f7FabButton from 'framework7-vue/src/components/fab-button.vue';
// form - no vue
// grid
import f7Row from 'framework7-vue/src/components/row.vue';
import f7Col from 'framework7-vue/src/components/col.vue';
// icon
import f7Icon from 'framework7-vue/src/components/icon.vue';
// infinite-scroll - no vue
// lazy - no vue
// link
import f7Link from 'framework7-vue/src/components/link.vue';
// login-screen
import f7LoginScreen from 'framework7-vue/src/components/login-screen.vue';
import f7LoginScreenTitle from 'framework7-vue/src/components/login-screen-title.vue';
// messagebar
import f7Messagebar from 'framework7-vue/src/components/messagebar.vue';
import f7MessagebarSheet from 'framework7-vue/src/components/messagebar-sheet.vue';
import f7MessagebarSheetImage from 'framework7-vue/src/components/messagebar-sheet-image.vue';
import f7MessagebarSheetItem from 'framework7-vue/src/components/messagebar-sheet-item.vue';
import f7MessagebarAttachments from 'framework7-vue/src/components/messagebar-attachments.vue';
import f7MessagebarAttachment from 'framework7-vue/src/components/messagebar-attachment.vue';
// messages
import f7Messages from 'framework7-vue/src/components/messages.vue';
import f7Message from 'framework7-vue/src/components/message.vue';
import f7MessagesTitle from 'framework7-vue/src/components/messages-title.vue';
// panel
import f7Panel from 'framework7-vue/src/components/panel.vue';
// photo-browser
import f7PhotoBrowser from 'framework7-vue/src/components/photo-browser.vue';
// progressbar
import f7Progressbar from 'framework7-vue/src/components/progressbar.vue';
// pull-to-refresh - no vue
// radio
import f7Radio from 'framework7-vue/src/components/radio.vue';
// range
import f7Range from 'framework7-vue/src/components/range.vue';
// searchbar
import f7Searchbar from 'framework7-vue/src/components/searchbar.vue';
// stepper
import f7Stepper from 'framework7-vue/src/components/stepper.vue';
// tabs
import f7Tabs from 'framework7-vue/src/components/tabs.vue';
import f7Tab from 'framework7-vue/src/components/tab.vue';
// toggle
import f7Toggle from 'framework7-vue/src/components/toggle.vue';
// typography - no vue
// vi - no vue


// Grouped Components: list / contacts-list / smart-select / sortable / swipeout / virtual-list
// list / contacts-list / smart-select / sortable / swipeout / virtual-list
import f7List from 'framework7-vue/src/components/list.vue';
import f7ListGroup from 'framework7-vue/src/components/list-group.vue';
// list-item
import f7ListItem from 'framework7-vue/src/components/list-item.vue';
import f7ListItemContent from 'framework7-vue/src/components/list-item-content.vue';
import f7ListItemRow from 'framework7-vue/src/components/list-item-row.vue';
import f7ListItemCell from 'framework7-vue/src/components/list-item-cell.vue';
// list-button
import f7ListButton from 'framework7-vue/src/components/list-button.vue';
//list-index
import f7ListIndex from 'framework7-vue/src/components/list-index.vue';
// swipeout
import f7SwipeoutActions from 'framework7-vue/src/components/swipeout-actions.vue';
import f7SwipeoutButton from 'framework7-vue/src/components/swipeout-button.vue';











export default {
  install(Vue, Framework7 = window.Framework7) {
    // Check for F7
    if (typeof Framework7 === 'undefined') {
      throw new Error('Framework7 is undefined, make sure you have passed it as an argument: Vue.use(Framework7Vue, Framework7)');
    }
    // Event Hub
    const eventHub = new Vue();

    // Flags
    let f7Ready = false;
    let f7Instance;

    // Define protos
    Object.defineProperty(Vue.prototype, '$f7', {
      get() {
        return f7Instance;
      },
    });

    const $theme = {};
    Object.defineProperty(Vue.prototype, '$theme', {
      get() {
        return {
          ios: f7Instance ? f7Instance.theme === 'ios' : $theme.ios,
          md: f7Instance ? f7Instance.theme === 'md' : $theme.md,
        };
      },
    });
    Vue.prototype.Dom7 = Framework7.$;
    Vue.prototype.$$ = Framework7.$;
    Vue.prototype.$device = Framework7.device;
    Vue.prototype.$request = Framework7.request;
    Vue.prototype.$utils = Framework7.utils;

    // Init F7
    function initFramework7(rootEl, params, routes) {
      const f7Params = Utils.extend({}, (params || {}), { root: rootEl });
      if (routes && routes.length && !f7Params.routes) f7Params.routes = routes;

      f7Instance = new Framework7(f7Params);
      f7Ready = true;
      eventHub.$emit('f7Ready', f7Instance);
    }

    // Extend F7 Router
    Framework7.Router
      .use(VueRouter)
      .use({
        on: {
          routeChange(to, from, router) {
            eventHub.$emit('f7RouteChange', to, from, router);
          },
          routeChanged(to, from, router) {
            eventHub.$emit('f7RouteChanged', to, from, router);
          },
        },
      });

    // Mixin
    Vue.mixin({
      directives: Directives,
      components: {
        
f7AccordionContent,
f7AccordionItem,
f7AccordionToggle,
f7Accordion,
f7ActionsButton,
f7ActionsGroup,
f7ActionsLabel,
f7Actions,
f7Badge,
f7BlockFooter,
f7BlockHeader,
f7BlockTitle,
f7Block,
f7Button,
f7CardContent,
f7CardFooter,
f7CardHeader,
f7Card,
f7Checkbox,
f7Chip,
f7Col,
f7FabButton,
f7FabButtons,
f7Fab,
f7Icon,
f7Input,
f7Label,
f7Link,
f7ListButton,
f7ListGroup,
f7ListIndex,
f7ListItemCell,
f7ListItemContent,
f7ListItemRow,
f7ListItem,
f7List,
f7LoginScreenTitle,
f7LoginScreen,
f7Message,
f7MessagebarAttachment,
f7MessagebarAttachments,
f7MessagebarSheetImage,
f7MessagebarSheetItem,
f7MessagebarSheet,
f7Messagebar,
f7MessagesTitle,
f7Messages,
f7NavLeft,
f7NavRight,
f7NavTitle,
f7Navbar,
f7PageContent,
f7Page,
f7Panel,
f7PhotoBrowser,
f7Popover,
f7Popup,
f7Preloader,
f7Progressbar,
f7Radio,
f7Range,
f7RoutableModals,
f7Row,
f7Searchbar,
f7Segmented,
f7Sheet,
f7Statusbar,
f7Stepper,
f7Subnavbar,
f7SwipeoutActions,
f7SwipeoutButton,
f7SwiperSlide,
f7Swiper,
f7Tab,
f7Tabs,
f7Toggle,
f7Toolbar,
f7View,
f7Views,

      },
      beforeCreate() {
        const self = this;
        if (self === self.$root) {
          const { theme } = (self.$options.framework7 || {});
          if (theme === 'md') $theme.md = true;
          if (theme === 'ios') $theme.ios = true;
          if (!theme || theme === 'auto') {
            $theme.ios = !!(Framework7.Device || Framework7.device).ios;
            $theme.md = !(Framework7.Device || Framework7.device).ios;
          }
        }

        let $route;
        let $router;
        let parent = self;
        while (parent && !$router && !$route) {
          if (parent.$f7route) $route = parent.$f7route;
          if (parent.$f7router) $router = parent.$f7router;
          else if (parent.f7View) {
            $router = parent.f7View.router;
          } else if (parent.$el && parent.$el.f7View) {
            $router = parent.$el.f7View.router;
          }
          parent = parent.$parent;
        }
        if ($route && $router) {
          self.$f7route = $route;
          self.$f7router = $router;
          self.$f7Route = $route;
          self.$f7Router = $router;
        }
      },
      beforeDestroy() {
        const self = this;
        if (self.$f7RouteChangeCallback) eventHub.$off('f7RouteChange', self.$f7RouteChangeCallback);
        if (self.$f7RouteChangedCallback) eventHub.$off('f7RouteChanged', self.$f7RouteChangedCallback);
      },
      created() {
        const self = this;

        const routeChangeCallback = self.onF7RouteChange || self.F7RouteChange || self.f7RouteChange || self.f7routeChange;
        const routeChangedCallback = self.onF7RouteChanged || self.F7RouteChanged || self.f7RouteChanged || self.f7routeChanged;
        if (!routeChangeCallback && !routeChangedCallback) return;

        function hasRouter(router) {
          return (self.$f7router && router === self.$f7router) ||
                 (!self.$f7router && self.$f7 && self.$f7.router);
        }

        function addRoutesCallbacks() {
          if (routeChangeCallback) {
            self.$f7RouteChangeCallback = function onRouteChange(to, from, router) {
              if (hasRouter(router)) {
                routeChangeCallback(to, from, router);
              }
            };
            eventHub.$on('f7RouteChange', self.$f7RouteChangeCallback);
          }
          if (routeChangedCallback) {
            self.$f7RouteChangedCallback = function onRouteChanged(to, from, router) {
              if (hasRouter(router)) {
                routeChangedCallback(to, from, router);
              }
            };
            eventHub.$on('f7RouteChanged', self.$f7RouteChangedCallback);
          }
        }

        if (!self.$f7) eventHub.$on('f7Ready', addRoutesCallbacks);
        else addRoutesCallbacks();
      },
      mounted() {
        const self = this;
        if (self === self.$root) {
          initFramework7(self.$root.$el, self.$options.framework7, self.$options.routes);
        }
        const callback = self.onF7Ready || self.onF7ready || self.onF7Init || self.onF7init || self.f7Ready || self.f7Init || self.f7ready || self.f7init;
        if (!callback) return;
        if (f7Ready) callback(f7Instance);
        else {
          eventHub.$on('f7Ready', (f7) => {
            callback(f7);
          });
        }
      },
    });
  },
};
