<%--
    Document   : MyNavigationDrawer
    Created on : 04/05/2019, 23:23:42
    Author     : Nogueira
--%>

<v-navigation-drawer
    v-if="dispositivo !== null"
    fixed
    v-model="drawer"
    app>
    <v-list dense>
        <v-list-tile @click="">
            <v-list-tile-action>
                <v-icon>home</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
                <v-list-tile-title>Home</v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
            <v-list-tile-action>
                <v-icon>contact_mail</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
                <v-list-tile-title>Contact</v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
            <v-list-tile-action>
                <v-icon>contact_mail</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
                <v-list-tile-title></v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>
    </v-list>
</v-navigation-drawer>