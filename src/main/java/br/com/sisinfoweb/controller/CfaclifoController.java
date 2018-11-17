/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.sisinfoweb.controller;

import br.com.sisinfoweb.banco.beans.PageBeans;
import br.com.sisinfoweb.banco.beans.PageableBeans;
import br.com.sisinfoweb.banco.beans.RetornoWebServiceBeans;
import br.com.sisinfoweb.banco.beans.StatusRetornoWebServiceBeans;
import br.com.sisinfoweb.banco.values.MensagemPadrao;
import static br.com.sisinfoweb.controller.BaseMyController.logger;
import br.com.sisinfoweb.entity.CfaclifoEntity;
import br.com.sisinfoweb.entity.SmadispoEntity;
import br.com.sisinfoweb.service.CfaclifoService;
import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.google.gson.JsonSyntaxException;
import java.net.HttpURLConnection;
import java.util.List;
import javax.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 *
 * @author Bruno
 */
@Controller
public class CfaclifoController extends BaseMyController{
    
    @Autowired
    private CfaclifoService cfaclifoService;
    
    @RequestMapping(value = {"/Cfaclifo"}, method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    @ResponseBody
    @Override
    public String initJson( Model model, 
                            @RequestHeader() HttpHeaders httpHeaders, 
                            HttpServletResponse response, 
                            @RequestParam(name = PARAM_DISPOSITIVO, required = true) String dispositivo,
                            @RequestParam(name = PARAM_COLUMN_SELECTED, required = false) String columnSelected,
                            @RequestParam(name = PARAM_WHERE, required = false) String where,
                            @RequestParam(name = PARAM_SORT, required = false) String sort,
                            @RequestParam(name = PARAM_RESUME, required = false, defaultValue = "false") Boolean resume,
                            @RequestParam(name = PARAM_SQL_QUERY, required = false) String sqlQuery,
                            @RequestParam(name = PARAM_SIZE, required = false) Integer size,
                            @RequestParam(name = PARAM_PAGE_NUMBER, required = false) Integer pageNumber) {
        
        StatusRetornoWebServiceBeans statusRetorno = new StatusRetornoWebServiceBeans();
        RetornoWebServiceBeans retornoWebService = new RetornoWebServiceBeans();
        try{
            // Coverte o dispositivo passado no formato json em uma entidade
            SmadispoEntity smadispoEntity = new Gson().fromJson(dispositivo, SmadispoEntity.class);
            cfaclifoService.setSmadispoEntity(smadispoEntity);
            
            PageableBeans pageable = new PageableBeans( ((pageNumber != null && pageNumber > 0) ? pageNumber : 0), 
                                                        ((size != null && size > 0) ? size : 0)
                                                      );
            
            PageBeans<CfaclifoEntity> listaPage;
            
            // Checa se foi passado alqum parametro para filtrar
            if ( ((sqlQuery != null) && (!sqlQuery.isEmpty())) || 
                    ((columnSelected != null) && (!columnSelected.isEmpty())) || 
                    ((where != null) && (!where.isEmpty())) ||
                    ((sort != null) && (!sort.isEmpty())) ){
                // Pesquisa de acordo com o sql passado
                listaPage = cfaclifoService.findCustomNativeQueryClient(resume, sqlQuery, columnSelected, where, sort, pageable);
            
            } else {
                listaPage = cfaclifoService.findAllClient(sort, pageable);
            }
            // Cria uma vareavel para retorna o status
            statusRetorno.setCodigoRetorno(HttpURLConnection.HTTP_OK);
            statusRetorno.setMensagemRetorno(String.valueOf(HttpStatus.OK));
            
            // Adiciona o status
            retornoWebService.statusRetorno = statusRetorno;
            // Adiciona os dados que eh pra ser retornado
            retornoWebService.object = listaPage.getContent();
            retornoWebService.page = listaPage.getPageable();
            
            return new Gson().toJson(retornoWebService);
        } catch(JsonSyntaxException e){
            logger.error(getClass().getSimpleName() + " - " + e.getMessage());
            
            // Cria uma vareavel para retorna o status
            statusRetorno.setCodigoRetorno(HttpURLConnection.HTTP_INTERNAL_ERROR);
            statusRetorno.setMensagemRetorno(MensagemPadrao.ERROR_STRUCT_JSON + " | " + e.getMessage());
            statusRetorno.setExtra(e.toString());
            
            // Adiciona o status
            retornoWebService.statusRetorno = statusRetorno;
            
            return new Gson().toJson(retornoWebService);
        } catch(Exception e){
            logger.error(getClass().getSimpleName() + " - " + e.getMessage());
            
            // Cria uma vareavel para retorna o status
            statusRetorno.setCodigoRetorno(HttpURLConnection.HTTP_INTERNAL_ERROR);
            statusRetorno.setMensagemRetorno(MensagemPadrao.ERROR_FIND + " | " + e.getMessage());
            statusRetorno.setExtra(e.toString());
            
            // Adiciona o status
            retornoWebService.statusRetorno = statusRetorno;
            
            return new Gson().toJson(retornoWebService);
        } finally{
            cfaclifoService.closeEntityManager();
        }
    }

    
    @RequestMapping(value = {"/Cfaclifo/Admin"}, method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    @ResponseBody
    public String initJsonAdmin( Model model, 
                            @RequestHeader() HttpHeaders httpHeaders, 
                            HttpServletResponse response, 
                            @RequestParam(name = PARAM_DISPOSITIVO, required = true) String dispositivo,
                            @RequestParam(name = PARAM_COLUMN_SELECTED, required = false) String columnSelected,
                            @RequestParam(name = PARAM_WHERE, required = false) String where,
                            @RequestParam(name = PARAM_SORT, required = false) String sort,
                            @RequestParam(name = PARAM_RESUME, required = false, defaultValue = "false") Boolean resume,
                            @RequestParam(name = PARAM_SQL_QUERY, required = false) String sqlQuery) {
        
        StatusRetornoWebServiceBeans statusRetorno = new StatusRetornoWebServiceBeans();
        RetornoWebServiceBeans retornoWebService = new RetornoWebServiceBeans();
        try{
            List<CfaclifoEntity> lista;
            // Checa se foi passado alqum parametro para filtrar
            if ( ((sqlQuery != null) && (!sqlQuery.isEmpty())) || 
                    ((columnSelected != null) && (!columnSelected.isEmpty())) || 
                    ((where != null) && (!where.isEmpty())) ){
                // Pesquisa de acordo com o sql passado
                lista = cfaclifoService.findCustomNativeQuery(resume, sqlQuery, columnSelected, where, sort);
            
            } else {
                lista = cfaclifoService.findAllClient();
            }
            // Cria uma vareavel para retorna o status
            statusRetorno.setCodigoRetorno(HttpURLConnection.HTTP_OK);
            statusRetorno.setMensagemRetorno(String.valueOf(HttpStatus.OK));
            
            // Adiciona o status
            retornoWebService.statusRetorno = statusRetorno;
            // Adiciona os dados que eh pra ser retornado
            retornoWebService.object = lista;
            cfaclifoService.findCustomNativeQuery(Boolean.FALSE, null, null, where, sort);
            
            return new Gson().toJson(retornoWebService);
        } catch(Exception e){
            // Cria uma vareavel para retorna o status
            statusRetorno.setCodigoRetorno(HttpURLConnection.HTTP_INTERNAL_ERROR);
            statusRetorno.setMensagemRetorno(String.valueOf(e.getMessage()));
            statusRetorno.setExtra(e.getLocalizedMessage());
            
            // Adiciona o status
            retornoWebService.statusRetorno = statusRetorno;
            
            return new Gson().toJson(retornoWebService);
        } finally{
            cfaclifoService.closeEntityManager();
        }
    }
    
    
    @RequestMapping(value = {"/Cfaclifo/One"}, method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    @ResponseBody
    public String initOneJson(  Model model, 
                                @RequestHeader() HttpHeaders httpHeaders, 
                                HttpServletResponse response, 
                                @RequestParam(name = PARAM_DISPOSITIVO, required = true) String dispositivo,
                                @RequestParam(name = PARAM_COLUMN_SELECTED, required = false) String columnSelected,
                                @RequestParam(name = PARAM_WHERE, required = false) String where,
                                @RequestParam(name = PARAM_SORT, required = false) String sort,
                                @RequestParam(name = PARAM_RESUME, required = false, defaultValue = "false") Boolean resume,
                                @RequestParam(name = PARAM_SQL_QUERY, required = false) String sqlQuery) {
        
        StatusRetornoWebServiceBeans statusRetorno = new StatusRetornoWebServiceBeans();
        RetornoWebServiceBeans retornoWebService = new RetornoWebServiceBeans();
        try{
            // Checa se foi passado alqum parametro para filtrar
            if ( ((sqlQuery != null) && (!sqlQuery.isEmpty())) || 
                    ((columnSelected != null) && (!columnSelected.isEmpty())) || 
                    ((where != null) && (!where.isEmpty())) ){
                // Pesquisa de acordo com o sql passado
                retornoWebService.object = cfaclifoService.findCustomNativeQueryClient(resume, sqlQuery, columnSelected, where, sort).get(0);
            
            } else {
                retornoWebService.object = cfaclifoService.findAllClient();
            }
            // Cria uma vareavel para retorna o status
            statusRetorno.setCodigoRetorno(HttpURLConnection.HTTP_OK);
            statusRetorno.setMensagemRetorno(String.valueOf(HttpStatus.OK));
            
            // Adiciona o status
            retornoWebService.statusRetorno = statusRetorno;
            // Adiciona os dados que eh pra ser retornado
            //retornoWebService.object = smaempreEntity;
            
            return new Gson().toJson(retornoWebService);
        } catch(Exception e){
            // Cria uma vareavel para retorna o status
            statusRetorno.setCodigoRetorno(HttpURLConnection.HTTP_INTERNAL_ERROR);
            statusRetorno.setMensagemRetorno(String.valueOf(e.getMessage()));
            statusRetorno.setExtra(e.getLocalizedMessage());
            
            // Adiciona o status
            retornoWebService.statusRetorno = statusRetorno;
            
            return new Gson().toJson(retornoWebService);
        }
    }
    
    @RequestMapping(value = {"/Cfaclifo"}, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    @ResponseBody
    public String postJson( Model model, 
                            @RequestHeader() HttpHeaders httpHeaders, 
                            HttpServletResponse response, 
                            @RequestBody String clienteJson,
                            @RequestParam(name = PARAM_DISPOSITIVO, required = true) String dispositivo,
                            @RequestParam(name = PARAM_COLUMN_SELECTED, required = false) String columnSelected,
                            @RequestParam(name = PARAM_WHERE, required = false) String where,
                            @RequestParam(name = PARAM_RESUME, required = false, defaultValue = "false") Boolean resume,
                            @RequestParam(name = PARAM_SQL_QUERY, required = false) String sqlQuery) {
        StatusRetornoWebServiceBeans statusRetorno = new StatusRetornoWebServiceBeans();
        RetornoWebServiceBeans retornoWebService = new RetornoWebServiceBeans();
        try {
            JsonParser jsonParser = new JsonParser();
            JsonObject cliente = (JsonObject) jsonParser.parse(clienteJson);
            
            // Coverte o dispositivo passado no formato json em uma entidade
            SmadispoEntity smadispoEntity = new Gson().fromJson(dispositivo, SmadispoEntity.class);
            cfaclifoService.setSmadispoEntity(smadispoEntity);
            
            StringBuilder insertCliente = new StringBuilder();
            
            insertCliente.append("INSERT INTO CFACLIFO(ID_CFAPROFI, ID_CFAATIVI, ID_CFAAREAS, ID_CFATPCLI, ID_CFASTATU, ID_SMAEMPRE, ");
            insertCliente.append("CPF_CGC, IE_RG, NOME_RAZAO, NOME_FANTASIA, CLIENTE, PESSOA, CAPITAL_SOCIAL) VALUES (");
            insertCliente.append( ((cliente.has("profissaoPessoa")) && (cliente.getAsJsonObject("profissaoPessoa").has("idProfissao")) && (cliente.getAsJsonObject("profissaoPessoa").get("idProfissao").getAsInt() > 0) ) ? cliente.getAsJsonObject("profissaoPessoa").get("idProfissao").getAsInt() : "null" ).append(", ");
            insertCliente.append( ((cliente.has("ramoAtividade")) && (cliente.getAsJsonObject("ramoAtividade").has("idRamoAtividade")) && (cliente.getAsJsonObject("ramoAtividade").get("idRamoAtividade").getAsInt() > 0) ) ? cliente.getAsJsonObject("ramoAtividade").get("idRamoAtividade").getAsInt() : "null" ).append(", ");
            insertCliente.append( ((cliente.has("areaPessoa")) && (cliente.getAsJsonObject("areaPessoa").has("idArea")) && (cliente.getAsJsonObject("areaPessoa").get("idArea").getAsInt() > 0) ) ? cliente.getAsJsonObject("areaPessoa").get("idArea").getAsInt() : "null" ).append(", ");
            insertCliente.append( ((cliente.has("tipoClientePessoa")) && (cliente.getAsJsonObject("tipoClientePessoa").has("idTipoCliente")) && (cliente.getAsJsonObject("tipoClientePessoa").get("idTipoCliente").getAsInt() > 0) ) ? cliente.getAsJsonObject("tipoClientePessoa").get("idTipoCliente").getAsInt() : "null" ).append(", ");
            insertCliente.append( ((cliente.has("statusPessoa")) && (cliente.getAsJsonObject("statusPessoa").has("idStatus")) && (cliente.getAsJsonObject("statusPessoa").get("idStatus").getAsInt() > 0) ) ? cliente.getAsJsonObject("statusPessoa").get("idStatus").getAsInt() : "null" ).append(", ");
            insertCliente.append("( SELECT CFACLIFO.ID_SMAEMRPE FROM CFACLIFO WHERE CFACLIFO.ID_CFACLIFO = (SELECT SMADISPO.ID_CFACLIFO_FUNC FROM SMADISPO WHERE SMADISPO.IDENTIFICACAO = '").append(smadispoEntity.getIdentificacao()).append("') )").append(", ");
            insertCliente.append("'").append(cliente.get("cpfCnpj").getAsString()).append("'").append(", ");
            insertCliente.append( ((cliente.has("IeRg")) && (cliente.get("IeRg").getAsString().length() > 0) ) ? ("'" + cliente.get("IeRg").getAsString() + "'") :"null" ).append(", ");
            insertCliente.append("'").append(cliente.get("nomeRazao").getAsString().replace("'", "\'")).append("'").append(", ");
            insertCliente.append( ((cliente.has("nomeFantasia")) && (cliente.get("nomeFantasia").getAsString().length() > 0) ) ? ("'" + cliente.get("nomeFantasia").getAsString() + "'") :"null" ).append(", ");
            insertCliente.append("'1'").append(", ");
            insertCliente.append( ((cliente.has("pessoa")) && (cliente.get("pessoa").getAsString().length() > 0) ) ? ("'" + cliente.get("pessoa").getAsString() + "'") :"null" ).append(", ");
            insertCliente.append( ((cliente.has("capitalSocial")) && (cliente.get("capitalSocial").getAsInt() > 0) ) ? cliente.get("capitalSocial").getAsInt(): 0 ).append(") ");
            
            Integer qtdInsert = (Integer) cfaclifoService.saveCustomNativeQueryClient(insertCliente.toString());
            
            if(qtdInsert > 0){
                
                JsonObject enderecoCliente = cliente.getAsJsonObject("enderecoPessoa");
                
                boolean itensInseridoSucesso = true;
                
                JsonObject itemOrcamento = cliente.getAsJsonObject();

                JsonObject estoque = itemOrcamento.getAsJsonObject("estoqueVenda");
                JsonObject planoPagamento = itemOrcamento.getAsJsonObject("planoPagamento");
                JsonObject unidadeVenda = itemOrcamento.getAsJsonObject("unidadeVenda");
                JsonObject pessoaVendedor = itemOrcamento.getAsJsonObject("pessoaVendedor");


                String insertItem =   "UPDATE OR INSERT INTO AEAITORC(GUID, ID_AEAORCAM, ID_AEAESTOQ, ID_AEAPLPGT, \n"
                                    + "ID_AEAUNVEN, ID_CFACLIFO_VENDEDOR, SEQUENCIA, QUANTIDADE, \n"
                                    + "VL_CUSTO, VL_BRUTO, VL_DESCONTO, PROMOCAO, TIPO_PRODUTO, COMPLEMENTO) \n VALUES ("
                                    + "'" + itemOrcamento.get("guid").getAsString() + "',"
                                    + "(SELECT ID_AEAORCAM FROM AEAORCAM WHERE AEAORCAM.GUID = '" + itemOrcamento.get("guidOrcamento").getAsString() +"')" + ","
                                    + estoque.get("idEstoque").getAsInt() + ","
                                    + planoPagamento.get("idPlanoPagamento").getAsInt() + ","
                                    + unidadeVenda.get("idUnidadeVenda").getAsInt() + ","
                                    + "(SELECT CFACLIFO.ID_CFACLIFO FROM CFACLIFO WHERE CFACLIFO.CODIGO_FUN = " + pessoaVendedor.get("idPessoa").getAsInt() + "),"
                                    + itemOrcamento.get("sequencia").getAsInt() + ","
                                    + itemOrcamento.get("quantidade").getAsDouble() + ","
                                    + itemOrcamento.get("valorCusto").getAsDouble() + ","
                                    + itemOrcamento.get("valorBruto").getAsDouble() + ","
                                    + itemOrcamento.get("valorDesconto").getAsDouble() + ","
                                    + "" +(((itemOrcamento.has("promocao")) && (!itemOrcamento.get("promocao").getAsString().isEmpty())) ? itemOrcamento.get("promocao").getAsString() : "'0'" )+ ","
                                    + "'" +(((itemOrcamento.has("tipoProduto")) && (!itemOrcamento.get("tipoProduto").getAsString().isEmpty())) ? itemOrcamento.get("tipoProduto").getAsString() : "null" )+ "',"
                                    + (((itemOrcamento.has("complemento")) && (itemOrcamento.get("complemento") != null) && (itemOrcamento.get("complemento").getAsString().length() > 0)) ?  "'" + itemOrcamento.get("complemento").getAsString() + "'" : "null" )+ ") MATCHING (GUID)";

                if (((Integer)cfaclifoService.saveCustomNativeQueryClient(insertItem)) <= 0){
                    itensInseridoSucesso = false;
                }
                if (itensInseridoSucesso){
                    
                    // Cria uma vareavel para retorna o status
                    statusRetorno.setCodigoRetorno(HttpURLConnection.HTTP_OK);
                    statusRetorno.setMensagemRetorno(String.valueOf(HttpStatus.OK) + "\n" + MensagemPadrao.INSERT_SUCCESS);

                    // Adiciona o status
                    retornoWebService.statusRetorno = statusRetorno;
                    // Adiciona os dados que eh pra ser retornado
                    retornoWebService.object = qtdInsert;
                    
                } else {
                    // Cria uma vareavel para retorna o status
                    statusRetorno.setCodigoRetorno(HttpURLConnection.HTTP_INTERNAL_ERROR);
                    statusRetorno.setMensagemRetorno(String.valueOf(HttpStatus.INTERNAL_SERVER_ERROR) + "\n" + MensagemPadrao.INSERT_ERROR + "\n" + "Cliente Novo.");

                    // Adiciona o status
                    retornoWebService.statusRetorno = statusRetorno;
                    // Adiciona os dados que eh pra ser retornado
                    retornoWebService.object = qtdInsert;
                }
            } else {
                // Cria uma vareavel para retorna o status
                statusRetorno.setCodigoRetorno(HttpURLConnection.HTTP_INTERNAL_ERROR);
                statusRetorno.setMensagemRetorno(String.valueOf(HttpStatus.INTERNAL_SERVER_ERROR) + "\n" + MensagemPadrao.INSERT_ERROR);
                
                // Adiciona o status
                retornoWebService.statusRetorno = statusRetorno;
                // Adiciona os dados que eh pra ser retornado
                retornoWebService.object = qtdInsert;
            }
            return new Gson().toJson(retornoWebService);
        } catch (JsonSyntaxException e) {
            // Cria uma vareavel para retorna o status
            statusRetorno.setCodigoRetorno(HttpURLConnection.HTTP_INTERNAL_ERROR);
            statusRetorno.setMensagemRetorno(MensagemPadrao.INSERT_ERROR + " | " + e.getMessage());
            statusRetorno.setExtra(e.toString());
            
            // Adiciona o status
            retornoWebService.statusRetorno = statusRetorno;
            
            return new Gson().toJson(retornoWebService);
        }  catch (Exception e) {
            // Cria uma vareavel para retorna o status
            statusRetorno.setCodigoRetorno(HttpURLConnection.HTTP_INTERNAL_ERROR);
            statusRetorno.setMensagemRetorno(MensagemPadrao.INSERT_ERROR + " | " + e.getMessage());
            statusRetorno.setExtra(e.toString());
            
            // Adiciona o status
            retornoWebService.statusRetorno = statusRetorno;
            
            return new Gson().toJson(retornoWebService);
        }
    }
}
