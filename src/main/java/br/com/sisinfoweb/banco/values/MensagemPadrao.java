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
    String INSERT_ERROR = "Não conseguimos inserir no Host (Servidor SisInfo da empresa).";
    String INSERT_SUCCESS = "Inserido com sucesso no Host (Servidor SisInfo da empresa).";
    String UPDATE_ERROR = "Não conseguimos atualizar o registro no banco de dados do Host (Servidor SisInfo da empresa).";
    String EXISTS = "Já existe no banco de dados";
    String ERROR_FIND = "Não conseguimos realizar a pesquisa/find. ";
    String ERROR_SAVE = "Erro ao tentar salvar. ";
    String ERROR_NOT_DISPOSITIVO = "Não foi passado o parâmetro com a identificação do dispositivo";
    String ERROR_DISPOSITIVO_INATIVO = "Dispositivo esta inativo.";
    String ERROR_DISPOSITIVO_NAO_CADASTRADO = "Dispositivo não encontrado.";
    String ERROR_DISPOSITIVO_SEM_UUID = "Dispositivo sem o UUID(Chave de identificacao).";
    String ERROR_EMPRESA_NAO_LICENCIADA = "Não foi encontrado em nosso banco de dados a empresa licenciada para usar o aplicativo. Ou a identificação do dispositivo não esta cadastrada em nosso banco de dados.";
    String ERROR_EMPRESA_INATIVA = "A empresa está inativada. Entre em contato com a sua empresa ou com o suporte.";
    String ERROR_CONECT_DATABASE = "Erro ao tentar conectar com o banco de dados.";
    String ERROR_CLOSE_DATABASE = "Erro ao fechar o banco de dados.";
    String ERROR_MAPEAR_RESULTSET = "Erro ao converter o result ResultSet em uma classe Entity.";
    String ERROR_SQL_EXCEPTION = "Erro ao executar o sql.";
    String ERROR_CONSTRUCT_SQL = "Erro ao construir o sql.";
    String ERROR_STRUCT_JSON = "Erro na estrutura do JSON";
    String ERROR_CONNECTION_NOT_INIT = "Conexão (connection) com banco de dados não inicializada.";
    String ERROR_STORED_PROCEDURE = "Erro ao executar Stored Procedure. ";
    String LOGGER_NEW_CAD_DISPOSITIVO = "CADASTRAR UM NOVO DISPOSITIVO";
    String LOGGER_EXECUTE_FIND = "EXECUTANDO SELECT NO BANCO DE DADOS";
    String LOGGER_EXECUTE_SALVE = "EXECUTANDO INSERT/UPDATE NO BANCO DE DADOS";
    String LOGGER_CLOSE_DATABASE = "FECHANDO BANCO DE DADOS";
    String LOGGER_EXECUTE_STORED_PROCEDURE = "EXECUTE STORED PROCEDURE";
}
