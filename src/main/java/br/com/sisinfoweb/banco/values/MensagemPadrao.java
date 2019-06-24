/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.sisinfoweb.banco.values;

/**
 *
 * @author Bruno
 */
public interface MensagemPadrao {

    String INSERT_ERROR = "Nao conseguimos inserir no Host (Servidor SisInfo da empresa).";
    String INSERT_SUCCESS = "Inserido com sucesso no Host (Servidor SisInfo da empresa).";
    String UPDATE_ERROR = "Nao conseguimos atualizar o registro no banco de dados do Host (Servidor SisInfo da empresa).";
    String EXISTS = "Ja existe no banco de dados";
    String SUCCESS = "Esta requisição foi bem sucedida";
    String ERROR = "Oops! Não conseguimos realizar o que queriamos.";
    String ERROR_FIND = "Nao conseguimos realizar a pesquisa/find. ";
    String ERROR_SAVE = "Erro ao tentar salvar. ";
    String ERROR_NOT_DISPOSITIVO = "Nao foi passado o parâmetro com a identificação do dispositivo, ou com os dados do usuário.";
    String ERROR_NOT_USUARIO_SENHA = "Nao foi passado os dados do usuário e/ou senha.";
    String ERROR_NOT_FOUND_USUARIO = "Usuário não encontrado, verificar se foi escrito corretamente e/ou se esse nome de usuário esta cadastrado no banco de dados da sua empresa.";
    String ERROR_NOT_FOUND_USUARIO_CFACLIFO = "Usuário não esta cadastrado na tabela CFACLIFO, precisamos que estaja cadastrado para chegar se este usuário esta ativo.";
    String ERROR_NOT_FOUND_SENHA = "Senha não esta correta, verificar se a senha foi escrita corretamente e/ou se esta cadastrada no banco de dados da sua empresa.";
    String ERROR_NOT_FOUND_KEY_PROPERTIE = "Não encontramos a chave(key) passada no parâmetro.";
    String ERROR_DISPOSITIVO_INATIVO = "Dispositivo esta inativo.";
    String ERROR_USUARIO_INATIVO = "Usuário esta inativo.";
    String ERROR_SQL_INJECTION = "O parametro where que foi passado tem algum traço de SQL Injection, por isso não iremos autorizar essa conexão.";
    String ERROR_DISPOSITIVO_NAO_CADASTRADO = "Dispositivo não encontrado.";
    String ERROR_DISPOSITIVO_SEM_UUID = "Dispositivo sem o UUID(Chave de identificacao).";
    String ERROR_EMPRESA_NAO_LICENCIADA = "Não foi encontrado em nosso banco de dados a empresa licenciada para usar o aplicativo. Ou a identificação do dispositivo não esta cadastrado em nosso banco de dados.";
    String ERROR_EMPRESA_INATIVA = "A empresa está inativada. Entre em contato com a sua empresa ou com o suporte.";
    String ERROR_CONECT_DATABASE = "Erro ao tentar conectar com o banco de dados.";
    String ERROR_CLOSE_DATABASE = "Erro ao fechar o banco de dados.";
    String ERROR_MAPEAR_RESULTSET = "Erro ao converter o result ResultSet em uma classe Entity.";
    String ERROR_SQL_EXCEPTION = "Erro ao executar o sql.";
    String ERROR_CONSTRUCT_SQL = "Erro ao construir o sql.";
    String ERROR_STRUCT_JSON = "Erro na estrutura do JSON";
    String ERROR_CONNECTION_NOT_INIT = "Conexão (connection) com banco de dados não inicializada.";
    String ERROR_STORED_PROCEDURE = "Erro ao executar Stored Procedure. ";
    String ERROR_INTERCEPTOR_AUTORIZADOR = "Erro desconhecido no autorizador. ";
    String ERROR_SMALOGWS_NULL = "A variável que tem os dados do log (SMALOGWS) esta vazia. ";
    String ERROR_SMALOGWS_DATABASE = "Erro ao tentar salvar os dados do log (SMALOGWS) no banco de dados. ";
    String ERROR_NOT_TEXT_FOR_ENCRYPT = "Não recebemos nenhum texto para criptografar.";
    String ERROR_ENCRYPT_DECRYPT = "Não coseguimos criptografar/descriptografar o texto, aconteceu algum erro.";
    String ERROR_PAGE_NOT_FOUND = "Página não encontrada!";
    String ERROR_PAGE_NOT_FOUND_EXTRA = "Nós levamos em consideração as letras maiúsculas e minusculas, então pedimos que cheque o endereço, se foi digitado correto.";
    String LOGGER_NEW_CAD_DISPOSITIVO = "CADASTRAR UM NOVO DISPOSITIVO";
    String LOGGER_EXECUTE_FIND = "EXECUTANDO SELECT NO BANCO DE DADOS";
    String LOGGER_EXECUTE_SALVE = "EXECUTANDO INSERT/UPDATE NO BANCO DE DADOS";
    String LOGGER_CLOSE_DATABASE = "FECHANDO BANCO DE DADOS";
    String LOGGER_EXECUTE_STORED_PROCEDURE = "EXECUTE STORED PROCEDURE";
    String LOGGER_ENCRYPT = "O texto encriptado.";
    String LOGGER_DECRYPT = "O texto foi descriptografado.";
}
