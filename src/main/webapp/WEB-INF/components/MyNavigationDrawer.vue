<template>
    <v-navigation-drawer v-if="dispositivo == null" fixed v-model="drawer" app>
        <v-list dense>
            <v-list-tile @click="a">
            <v-list-tile-action>
                <v-icon>home</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
                <v-list-tile-title>Home</v-list-tile-title>
            </v-list-tile-content>
            </v-list-tile>
            <v-list-tile @click="a">
            <v-list-tile-action>
                <v-icon>contact_mail</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
                <v-list-tile-title>Contact</v-list-tile-title>
            </v-list-tile-content>
            </v-list-tile>
            <v-list-tile @click="a">
            <v-list-tile-action>
                <v-icon>contact_mail</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
                <v-list-tile-title></v-list-tile-title>
            </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
</template>
<script>

export default {
  name: "my-navigation-drawer",
  data() {
    return {
        dispositivo: null,
        drawer: null,
    };
  },
  props: {
    value: {},
    
  },
  methods: {
      a: function(){
          console.log('MyNavigationDrawer - Method a');
          
      }
  },
  watch: {
    //value: function(newQuestion, oldQuestion) {
    //console.log('MyTextField - watch - new: ' + newQuestion + ' old: ' + oldQuestion);
    //console.log('MyTextField - watch - value: ' + this.value);
    //}
  },
  computed: {
    
  }
};
</script>