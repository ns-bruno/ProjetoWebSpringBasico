<template>
  <v-dialog 
    v-bind:value="value"
    max-width="500" 
    scrollable>
    
    <v-card>
        <v-card-title 
            class="headline error white--text">
            Código do Retorno: {{this.myreturnwebservicestatus.codigoRetorno}}
        </v-card-title>

        <v-card-text>{{this.myreturnwebservicestatus.mensagemRetorno}}</v-card-text>

        <v-expansion-panel v-if="this.myreturnwebservicestatus.extra">
            <v-expansion-panel-content>
            <div slot="header">Extra</div>
            <v-card>
                <v-card-text 
                    class="grey lighten-3">
                    {{this.myreturnwebservicestatus.extra}}
                </v-card-text>
            </v-card>
            </v-expansion-panel-content>
        </v-expansion-panel>

        <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn 
                outline 
                flat="flat" 
                color="default" 
                @click="emitMyClickClose(false)">Fechar</v-btn>
                
        </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>

    export default {
        name: 'my-dialog-return-webservice',
        data() {
            return {
                mydialogerror: this.value
            }
        },
        props:{
            value: {

            },
            myreturnwebservicestatus: {
                type: Object,
                default: function() {
                    return {
                        codigoRetorno: 0,
                        errorMsg: '',
                        errorMsgExtra: ''
                    }
                }
            }
        },
        watch: {
            
        },
        computed: {
            
        },
        methods: {
            emitMyClickClose(dialogError){
                this.mydialogerror = dialogError;
                this.$emit('emit-myclick-close', dialogError);
            }
        }
    }
</script>