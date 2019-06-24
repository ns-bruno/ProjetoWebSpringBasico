<template>
    <v-autocomplete
        v-bind:value="value"
        :label="mylabel"
        v-model="localValue"
        :items="myitems"
        :item-text="myitemtext"
        :item-value="myitemvalue"
        :loading="myloading"
        :hint="myhint"
        :placeholder="myplaceholder"
        :persistent-hint="mypersistenthint"
        :rules="[requiredRules]">
    </v-autocomplete>
</template>
<script>
import baseMyRules from 'services/baseMyRules';

    export default {
        name: 'my-select',
        data() {
            return {
                
            }
        },
        props:{
            value: {
                
            },
            myitems: {
                type: Array,
                default: []
            },
            mylabel: {
                type: String,
                default: 'My Select'
            },
            myrequired: {
                type: Boolean,
                default: false
            },
            myitemtext: {
                type: [String, Array, Function]
            },
            myitemvalue: {
                type: [String, Array, Function]
            },
            myhint: {
                type: String
            },
            mysingleline: {
                type: Boolean,
                default: false
            },
            myreturnobject: {
                type: Boolean,
                default: false
            },
            myuppercase: {
                type: Boolean,
                default: false
            },
            myloading: {
                type: Boolean,
                default: false
            },
            myplaceholder: {
                type: String
            },
            mypersistenthint: {
                type: Boolean,
                default: false
            }
        },
        mixins: [
            baseMyRules
        ],
        methods: {
            
        },
        watch: {
            //value: function(newQuestion, oldQuestion) {
                //console.log('MyTextField - watch - new: ' + newQuestion + ' old: ' + oldQuestion);
                //console.log('MyTextField - watch - value: ' + this.value);
            //}
        },
        computed: {
            localValue: {
                get: function() {
                    //console.log('component - computed get ' + this.value);
                    return this.value;
                },
                set: function(value) {
                    // Verifica se o campo eh pra deixar tudo em maiusculo
                    if (this.myuppercase){
                        value = '' + value.toString().toUpperCase();
                    }
                    //console.log('component - computed set ' + value);
                    this.$emit('input', value);
                }
            }
        }
    }
</script>
