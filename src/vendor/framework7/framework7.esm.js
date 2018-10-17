/**
 * Framework7 2.2.5
 * Full featured mobile HTML framework for building iOS & Android apps
 * http://framework7.io/
 *
 * Copyright 2014-2018 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: April 29, 2018
 */

import Template7 from 'template7';
import $ from 'dom7';

// F7 Class
import Framework7 from 'framework7/dist/components/core/core-class';

// Import Helpers
import Request from 'framework7/dist/utils/request';
import Utils from 'framework7/dist/utils/utils';
import Support from 'framework7/dist/utils/support';
import Device from 'framework7/dist/utils/device';

// Core Modules
import DeviceModule from 'framework7/dist/modules/device/device';
import SupportModule from 'framework7/dist/modules/support/support';
import UtilsModule from 'framework7/dist/modules/utils/utils';
import ResizeModule from 'framework7/dist/modules/resize/resize';
import RequestModule from 'framework7/dist/modules/request/request';
import TouchModule from 'framework7/dist/modules/touch/touch';
import ClicksModule from 'framework7/dist/modules/clicks/clicks';
import RouterModule from 'framework7/dist/modules/router/router';
import HistoryModule from 'framework7/dist/modules/history/history';
import StorageModule from 'framework7/dist/modules/storage/storage';

// Core Components
import View from 'framework7/dist/components/view/view';
import Modal from 'framework7/dist/components/modal/modal';
import Page from 'framework7/dist/components/page/page';
import Popup from 'framework7/dist/components/popup/popup';
import Dialog from 'framework7/dist/components/dialog/dialog';
import Toast from 'framework7/dist/components/toast/toast';
import Actions from 'framework7/dist/components/actions/actions';
import Preloader from 'framework7/dist/components/preloader/preloader';
import Swiper from 'framework7/dist/components/swiper/swiper';
import Popover from 'framework7/dist/components/popover/popover';
import Notification from 'framework7/dist/components/notification/notification';
import Input from 'framework7/dist/components/input/input';
import Button from 'framework7/dist/components/button/button';
import Sheet from 'framework7/dist/components/sheet/sheet';
import Picker from 'framework7/dist/components/picker/picker';
import Calendar from 'framework7/dist/components/calendar/calendar';


// Mobile APP Core Components
import Statusbar from 'framework7/dist/components/statusbar/statusbar';
import Navbar from 'framework7/dist/components/navbar/navbar';
import Toolbar from 'framework7/dist/components/toolbar/toolbar';
import Subnavbar from 'framework7/dist/components/subnavbar/subnavbar';
import TouchRipple from 'framework7/dist/components/touch-ripple/touch-ripple';

// Other Components
import Accordion from 'framework7/dist/components/accordion/accordion';
import Autocomplete from 'framework7/dist/components/autocomplete/autocomplete';
import Badge from 'framework7/dist/components/badge/badge';
import Block from 'framework7/dist/components/block/block';
import Card from 'framework7/dist/components/card/card';
import Checkbox from 'framework7/dist/components/checkbox/checkbox';
import Chip from 'framework7/dist/components/chip/chip';
import DataTable from 'framework7/dist/components/data-table/data-table';
import Fab from 'framework7/dist/components/fab/fab';
import Form from 'framework7/dist/components/form/form';
import Grid from 'framework7/dist/components/grid/grid';
import Icon from 'framework7/dist/components/icon/icon';
import InfiniteScroll from 'framework7/dist/components/infinite-scroll/infinite-scroll';
import Lazy from 'framework7/dist/components/lazy/lazy';
import Link from 'framework7/dist/components/link/link';
import LoginScreen from 'framework7/dist/components/login-screen/login-screen';
import Messagebar from 'framework7/dist/components/messagebar/messagebar';
import Messages from 'framework7/dist/components/messages/messages';
import Panel from 'framework7/dist/components/panel/panel';
import PhotoBrowser from 'framework7/dist/components/photo-browser/photo-browser';
import Progressbar from 'framework7/dist/components/progressbar/progressbar';
import PullToRefresh from 'framework7/dist/components/pull-to-refresh/pull-to-refresh';
import Radio from 'framework7/dist/components/radio/radio';
import Range from 'framework7/dist/components/range/range';
import Searchbar from 'framework7/dist/components/searchbar/searchbar';
import Stepper from 'framework7/dist/components/stepper/stepper';
import Tabs from 'framework7/dist/components/tabs/tabs';
import Timeline from 'framework7/dist/components/timeline/timeline';
import Toggle from 'framework7/dist/components/toggle/toggle';
import Typography from 'framework7/dist/components/typography/typography';
import Vi from 'framework7/dist/components/vi/vi';

// Grouped Components: list / contacts-list / smart-select / sortable / swipeout / virtual-list
import List from 'framework7/dist/components/list/list';
import ListIndex from 'framework7/dist/components/list-index/list-index';
import ContactList from 'framework7/dist/components/contacts-list/contact-list';
import SmartSelect from 'framework7/dist/components/smart-select/smart-select';
import Sortable from 'framework7/dist/components/sortable/sortable';
import Swipeout from 'framework7/dist/components/swipeout/swipeout';
import VirtualList from 'framework7/dist/components/virtual-list/virtual-list';



if ("es" !== 'es') {
  if (typeof window !== 'undefined') {
    // Template7
    if (!window.Template7) window.Template7 = Template7;

    // Dom7
    if (!window.Dom7) window.Dom7 = $;
  }
}

// Install Core Modules & Components
Framework7.use([
  DeviceModule,
  SupportModule,
  UtilsModule,
  ResizeModule,
  RequestModule,
  TouchModule,
  ClicksModule,
  RouterModule,
  HistoryModule,
  StorageModule,

  // Core Components  
  View,
  Modal,
  Page,
  Popup,

  Dialog,
  Toast,
  Actions,
  Preloader,

  Swiper,
  Popover,
  Notification,

  Sheet,
  Picker,
  Calendar,


  // Useful Components
  Icon,
  PhotoBrowser,


  // Mobile APP Core Components
  Statusbar,
  Navbar,
  Toolbar,
  Subnavbar,
  TouchRipple,


  // Other Components
  Accordion,
  Autocomplete,
  Badge,
  Block,
  Button,
  Card,
  Checkbox,
  Chip,
  ContactList,
  DataTable,
  Fab,
  Form,
  Grid,
  InfiniteScroll,
  Input,
  Lazy,
  Link,
  List,
  ListIndex,
  LoginScreen,
  Messagebar,
  Messages,
  Panel,
  Progressbar,
  PullToRefresh,
  Radio,
  Range,
  Searchbar,
  SmartSelect,
  Sortable,
  Stepper,
  Swipeout,
  Tabs,
  Timeline,
  Toggle,
  Typography,
  Vi,
  VirtualList,

  ]);

export { Template7, $ as Dom7, Request, Utils, Device, Support };
export default Framework7;
