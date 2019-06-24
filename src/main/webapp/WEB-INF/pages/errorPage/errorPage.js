/*
 * Document   : erro404
 * Created on : 12/06/2019, 15:19:42
 * Author     : Bruno Nogueira Silva
 */
import Vue from 'vue';
import Vuetify from 'vuetify';
import '../globalComponents';
import baseMyService from 'services/baseMyService';

Vue.use(Vuetify);

var errorPage = new Vue({
    el: "#errorPage",
    data: {
        
    },
    mixins: [
        baseMyService
    ],
    watch: {

    },
    created() {

    },
    methods: {

    },
    computed: {

    }
});

