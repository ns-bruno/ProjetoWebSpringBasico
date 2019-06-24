/*
 * Document   : webservice
 * Created on : 07/06/2019, 08:56:00
 * Author     : Bruno Nogueira Silva
 */
import axios from 'axios';

export default {

    data: {
        GET: 'GET',
        POST: 'POST',
        DELETE: 'DELETE',
        PUT: 'PUT'
    },
    methods: {
        /**
         * Funcao para buscar os dados na API rest (webservice).
         * Foi criado essa funcao com uma Promise (promessa) de returnar os dados do servidor 
         * ou retornar uma rejeição(erro).
         * 
         * @param {type} url
         * @param {type} metodo - 'GET', 'POST', 'DELETE', 'PUT'
         * @param {type} chave - Exemplo: 0123456789Aa
         * @param {type} dados
         * @param {type} parametrosUrl - Tem que ser passado no formato JSON. Exemplo: {resume: true, colunns: 'id, nome'}
         * @returns {Promise}
         */
        returnWebserviceJsonPromise: function(url, metodo, chave, dados, parametrosUrl) {
            dados = (dados ? dados : {});
            parametrosUrl = (parametrosUrl ? parametrosUrl : null);
            url = url + (chave ? ("?dispositivo={identificacao=\'" + chave + "\'}") : "");
            let configuracoes = {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            };
            if (parametrosUrl) {
                var size = 0;
                for (var key in parametrosUrl) {
                    // Pega o valor da chave
                    var value = parametrosUrl[key];
                    // Checa se realmente tem algum valor no elemento
                    if ( (value) || (typeof(value) === 'number'))  {
                        if ((!chave) && (size === 0)) {
                            url = url + "?";
                        } else {
                            url = url + "&";
                        }
                        //url = url + key + "=" + ((typeof (value) === 'string') ? "\"" + value + "\"" : value);
                        url = url + key + "=" + value;
                        size++;
                    }
                }
            }
            // Codifica a url, substituindo os caracteres especiais
            url = encodeURI(url);
            // Cria uma nova promessa de retorno
            return new Promise((resolve, reject) => {
                if ((metodo) && ((metodo === 'GET') || (metodo === 'get'))) {

                } else if ((metodo) && ((metodo === 'POST') || (metodo === 'post'))) {
                    axios.post(
                            url,
                            dados,
                            configuracoes
                            )
                            .then(function(response) {
                                //console.log('log webservice do then axios response: ' + JSON.stringify(response));
                                // Checa o status do header do rest
                                if (response.status === 200) {

                                    if (response.data.statusRetorno.codigoRetorno === 200) {
                                        resolve({
                                            statusRetorno: response.data.statusRetorno,
                                            object: response.data.object,
                                            page: response.data.page
                                        });
                                    } else {
                                        reject({
                                            statusRetorno: {
                                                codigoRetorno: response.data.statusRetorno.codigoRetorno,
                                                mensagemRetorno: response.data.statusRetorno.mensagemRetorno,
                                                extra: response.data.statusRetorno.extra
                                            }
                                        });
                                    }

                                } else {
                                    reject({
                                        statusRetorno: {
                                            codigoRetorno: response.status,
                                            mensagemRetorno: response.statusText,
                                            extra: ''
                                        }
                                    });
                                }
                            })
                            .catch(function(error) {
                                //console.log('log webservice do catch axios response: ' + error);
                                var msgRetorno = '';
                                // Verifica se tem mais algum dados importate para mostrar na mensagem de erro
                                if (error.response) {
                                    msgRetorno = msgRetorno + '\n response.data: ' + error.response.data;
                                    msgRetorno = msgRetorno + '\n response.headers: ' + JSON.stringify(error.response.headers);
                                } else if (error.request) {
                                    msgRetorno = msgRetorno + '\n request: ' + error.request;
                                } else {
                                    msgRetorno = msgRetorno + '\n message: ' + error.message;
                                }
                                reject({
                                    statusRetorno: {
                                        codigoRetorno: 0,
                                        mensagemRetorno: error.toString(),
                                        extra: msgRetorno
                                    }
                                });
                            });
                } else {
                    reject({
                        statusRetorno: {
                            codigoRetorno: 0,
                            mensagemRetorno: 'Metodos não definido ou não encontramos este metodos: "' + metodo + '"',
                            extra: ''
                        }
                    });
                }
            });
        },
        /**
         * Essa funcao foi criada com assyncrona para o codigo js parar e aguardar 
         * a execucao da funcao returnWebserviceJsonPromise que pega os dados do webservice (API Rest) 
         * quando os dados de sucesso ou erro eh retornado entao o javascript continua a sua sequencia
         * de execucao.
         * 
         * @param {type} url
         * @param {type} metodo
         * @param {type} chave
         * @param {type} dados
         * @param {type} parametrosUrl
         * @param {type} configuracoes
         * @returns {Promise}
         */
        conectWebserviceJson: async function(url, metodo, chave, dados, parametrosUrl, configuracoes) {
            try {
                return await this.returnWebserviceJsonPromise(url, metodo, chave, dados, parametrosUrl, configuracoes);
            } catch (error) {
                throw error;
            }
        }
    }
}