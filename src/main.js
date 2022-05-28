import Vue from 'vue'
import app from './App.vue'
import { Header } from 'mint-ui';

Vue.component(Header.name, Header)

import { Button } from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.component(Button.name, Button);

import './lib/css/mui.min.css'
import './lib/css/icons-extra.css'

var vm = new Vue({
    el: '#app',
    render: function(createElement){
        return createElement(app)
    }
})

