<%--
    Document   : MyToolbar
    Created on : 04/05/2019, 23:19:29
    Author     : Bruno Nogueira Silva
--%>
<%@attribute name="mytoolbarafterspace" fragment="true" required="false" description="E toda parte direita do toobar, ou seja, depois do title pode inserir uma cadeia de elementos aqui." %>

<!--Vai mostrar este toolbar caso o usuario esteja logado e
    a chave do dispositivo esteja salvo o sessionstorage-->
<v-toolbar
    v-if="dispositivo !== null"
    fixed
    app>
    <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    <v-toolbar-title>SisInfo Web</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
        <v-icon>refresh</v-icon>
    </v-btn>
    <v-menu bottom left>
        <template v-slot:activator="{ on }">
            <v-btn
                icon
                v-on="on"
                >
                <v-icon>more_vert</v-icon>
            </v-btn>
        </template>

        <v-list>
            <v-list-tile
                <!--v-for="(item, i) in items"-->
                <!--:key="i"-->
                <!--@click=""-->
                >
                <v-list-tile-title>Opcoes</v-list-tile-title>
            </v-list-tile>
        </v-list>
    </v-menu>
</v-toolbar>
<v-toolbar
    v-else
    flat >
    <v-toolbar-title>${title}</v-toolbar-title>
    <v-divider
        class="mx-2"
        inset
        vertical
        ></v-divider>
    <v-spacer></v-spacer>

    <jsp:invoke fragment="mytoolbarafterspace"></jsp:invoke>

</v-toolbar>