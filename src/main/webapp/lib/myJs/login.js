
new Vue({
    // Dados
    data: {
        showDispositivo: false,
        showSenha: false,
        valido: false,
        showError: false,
        smausuar: {},
        smadispo: {},
        codigoRetorno: 0,
        errorMsg: '',
        errorMsgExtra: '',
        campoObrigatorio: [
            (v) => !!v || 'O campo é obrigatório',
        ]
    },
    // Executa depois de carregar a tela (similar onLoad)
    mounted(){
        
    },
    // Metodos
    methods: {
        login() {
            // Preserva toda a classe Veu aqui
            var selfVue = this;
            try{
                this.smausuar.nome = this.smausuar.nome.toString().toUpperCase();
                
                axios.post('/SisInfoWeb/Smausuar/Autenticador?dispositivo={identificacao=' + this.smadispo.identificacao + '}&resume=true', this.smausuar)
                        .then(function (response) {

                            console.log('Data: ' + response.data);
                            console.log(response.data);
                            console.log('Status: ' + response.status);
                            console.log('StatusText: ' + response.statusText);
                            console.log('Config: ' + response.config.toString());
                            console.log(response.config);
                            console.log('Document');
                            console.log(document);

                            if(response.status === 200){
                                // Checa se tem algum coisa do status de retorno do webservice
                                if(response.data.statusRetorno){
                                    // Checa se o retorno do webservice esta ok ou um erro
                                    if(response.data.statusRetorno.codigoRetorno === 200){
                                        console.log('Vai para outra tela');
                                        
                                        const returnUsuar = JSON.stringify(response.data.object);
                                        
                                        sessionStorage.setItem('usuarios', returnUsuar);
                                        //localStorage.setItem('usuarios', returnUsuar);
                                        document.location.replace('/SisInfoWeb/Smpmenup');
                                        //selfVue.$router.push('/SisInfoWeb.ini');
                                    } else {
                                        // Checa se tem algum status de retorno dentro do object
                                        if (response.data.object){
                                            selfVue.codigoRetorno = response.data.object.codigoRetorno;
                                            selfVue.errorMsg = response.data.object.mensagemRetorno;
                                            selfVue.errorMsgExtra = '';
                                        // Chaso nao tenha status no object entao pega o status padrao
                                        } else {
                                            selfVue.codigoRetorno = response.data.statusRetorno.codigoRetorno;
                                            selfVue.errorMsg = response.data.statusRetorno.mensagemRetorno;
                                            selfVue.errorMsgExtra = response.data.statusRetorno.extra;
                                        }
                                        selfVue.showError = true;
                                    }
                                }
                            }
                        })
                        .catch(function (error) {
                            // Checa se deu 
                            selfVue.codigoRetorno = 0;
                            selfVue.errorMsg = error.toString();
                            selfVue.errorMsgExtra = '';
                            selfVue.showError = true;
                        });
            }catch(error){
                selfVue.codigoRetorno = 0;
                selfVue.errorMsg = error.toString();
                selfVue.errorMsgExtra = '';
                selfVue.showError = true;
            }
        }
    },
    // Ponto de acesso
    el: '#app'
});