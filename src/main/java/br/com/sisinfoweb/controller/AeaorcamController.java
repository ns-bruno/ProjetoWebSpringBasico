/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.sisinfoweb.controller;

import br.com.sisinfoweb.banco.beans.RetornoWebServiceBeans;
import br.com.sisinfoweb.banco.beans.StatusRetornoWebServiceBeans;
import br.com.sisinfoweb.banco.values.MensagemPadrao;
import br.com.sisinfoweb.entity.AeaorcamEntity;
import br.com.sisinfoweb.entity.SmadispoEntity;
import br.com.sisinfoweb.service.AeaorcamService;
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
public class AeaorcamController extends BaseMyController{
        
    @Autowired
    private AeaorcamService aeaorcamService;
    
    @RequestMapping(value = {"/Aeaorcam"}, method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    @ResponseBody
    @Override
    public String initJson( Model model, 
                            @RequestHeader() HttpHeaders httpHeaders, 
                            HttpServletResponse response, 
                            @RequestParam(name = "dispositivo", required = true) String dispositivo,
                            @RequestParam(name = "columnSelected", required = false) String columnSelected,
                            @RequestParam(name = "where", required = false) String where,
                            @RequestParam(name = "resume", required = false, defaultValue = "false") Boolean resume,
                            @RequestParam(name = "sqlQuery", required = false) String sqlQuery) {
        
        StatusRetornoWebServiceBeans statusRetorno = new StatusRetornoWebServiceBeans();
        RetornoWebServiceBeans retornoWebService = new RetornoWebServiceBeans();
        try{
            // Coverte o dispositivo passado no formato json em uma entidade
            SmadispoEntity smadispoEntity = new Gson().fromJson(dispositivo, SmadispoEntity.class);
            aeaorcamService.setSmadispoEntity(smadispoEntity);
            
            List<AeaorcamEntity> lista;
            // Checa se foi passado alqum parametro para filtrar
            if ( ((sqlQuery != null) && (!sqlQuery.isEmpty())) || 
                    ((columnSelected != null) && (!columnSelected.isEmpty())) || 
                    ((where != null) && (!where.isEmpty())) ){
                // Pesquisa de acordo com o sql passado
                lista = aeaorcamService.findCustomNativeQuery(resume, sqlQuery, columnSelected, where);
                
            } else {
                lista = aeaorcamService.findAll();
            }
            // Cria uma vareavel para retorna o status
            statusRetorno.setCodigoRetorno(HttpURLConnection.HTTP_OK);
            statusRetorno.setMensagemRetorno(String.valueOf(HttpStatus.OK));
            
            // Adiciona o status
            retornoWebService.statusRetorno = statusRetorno;
            // Adiciona os dados que eh pra ser retornado
            retornoWebService.object = lista;
            
            return new Gson().toJson(retornoWebService);
        } catch(JsonSyntaxException e){
            logger.error(getClass().getSimpleName() + " - " + e.getMessage());
            
            // Cria uma vareavel para retorna o status
            statusRetorno.setCodigoRetorno(HttpURLConnection.HTTP_INTERNAL_ERROR);
            statusRetorno.setMensagemRetorno(String.valueOf(e.getMessage()));
            statusRetorno.setExtra(e.getLocalizedMessage());
            
            // Adiciona o status
            retornoWebService.statusRetorno = statusRetorno;
            
            return new Gson().toJson(retornoWebService);
        } catch(Exception e){
            logger.error(getClass().getSimpleName() + " - " + e.getMessage());
            
            // Cria uma vareavel para retorna o status
            statusRetorno.setCodigoRetorno(HttpURLConnection.HTTP_INTERNAL_ERROR);
            statusRetorno.setMensagemRetorno(String.valueOf(e.getMessage()));
            statusRetorno.setExtra(e.getLocalizedMessage());
            
            // Adiciona o status
            retornoWebService.statusRetorno = statusRetorno;
            
            return new Gson().toJson(retornoWebService);
        } finally{
            aeaorcamService.closeEntityManager();
        }
    }
    
    @RequestMapping(value = {"/Aeaorcam"}, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    @ResponseBody
    public String postJson( Model model, 
                            @RequestHeader() HttpHeaders httpHeaders, 
                            HttpServletResponse response, 
                            @RequestBody String orcamentoJson,
                            @RequestParam(name = "dispositivo", required = true) String dispositivo,
                            @RequestParam(name = "columnSelected", required = false) String columnSelected,
                            @RequestParam(name = "where", required = false) String where,
                            @RequestParam(name = "resume", required = false, defaultValue = "false") Boolean resume,
                            @RequestParam(name = "sqlQuery", required = false) String sqlQuery) {
        StatusRetornoWebServiceBeans statusRetorno = new StatusRetornoWebServiceBeans();
        RetornoWebServiceBeans retornoWebService = new RetornoWebServiceBeans();
        try {
            JsonParser jsonParser = new JsonParser();
            JsonObject orcamento = (JsonObject) jsonParser.parse(orcamentoJson);
            
            String insertOrcamento =  "UPDATE OR INSERT INTO AEAORCAM(GUID, ID_CFACLIFO_VENDEDOR_INI, ID_SMAEMPRE, ID_CFACLIFO, ID_CFAESTAD, \n"
                                    + "ID_CFACIDAD, ID_CFATPDOC, ID_AEASERIE, DT_ORCAMENTO, \n"
                                    //+ "VL_MERC_CUSTO, VL_MERC_BRUTO, VL_MERC_DESCONTO, \n"
                                    + "VL_FRETE, VL_SEGURO, VL_OUTROS, \n"
                                    + "ATAC_VAREJO, PESSOA_CLIENTE, NOME_CLIENTE, IE_RG_CLIENTE, CPF_CGC_CLIENTE, \n"
                                    + "ENDERECO_CLIENTE, BAIRRO_CLIENTE, CEP_CLIENTE, OBS, ANDAMENTO) \n VALUES ("
                                    + "'"+orcamento.get("guid").getAsString() + "',"
                                    + "(SELECT CFACLIFO.ID_CFACLIFO FROM CFACLIFO WHERE CFACLIFO.CODIGO_FUN = " + orcamento.get("idPessoaVendedor").getAsInt() + "),"
                                    + orcamento.get("idEmpresa").getAsInt() + ","
                                    + orcamento.get("idPessoa").getAsInt() + ","
                                    + orcamento.get("idEstado").getAsInt() + ","
                                    + orcamento.get("idCidade").getAsInt() + ","
                                    + orcamento.get("idTipoDocumento").getAsInt() + ","
                                    + "(SELECT ID_AEASERIE_ORC_PALM FROM SMAEMPRE WHERE SMAEMPRE.ID_SMAEMPRE = " + orcamento.get("idEmpresa").getAsInt() + "), "
                                    + "'"+orcamento.get("dataCadastro").getAsString().replace("/", ".").substring(0, orcamento.get("dataCadastro").getAsString().indexOf(" ")) + "', "
                                    //+ orcamento.getTotalOrcamentoCusto() + ", "
                                    //+ orcamento.getTotalTabela() + ", "
                                    //+ orcamento.getTotalDesconto() + ", "
                                    + orcamento.get("totalFrete").getAsDouble() + ", "
                                    + orcamento.get("totalSeguro").getAsDouble() + ", "
                                    + orcamento.get("totalOutros").getAsDouble() + ", "
                                    + orcamento.get("tipoVenda").getAsString() + ", "
                                    + ""+( ((orcamento.has("pessoaCliente"))&& (!orcamento.get("pessoaCliente").getAsString().equals("null"))) ? ("'" + orcamento.get("pessoaCliente").getAsString() + "'") : "null" )+ ", "
                                    + "'"+orcamento.get("nomeRazao").getAsString() + "', "
                                    + "'"+( (orcamento.has("rgIe")) ? orcamento.get("rgIe").getAsString() : "")+ "', "
                                    + "'"+( (orcamento.has("cpfCnpj")) ? orcamento.get("cpfCnpj").getAsString() : "")+ "', "
                                    + "'"+( (orcamento.has("enderecoCliente")) ? orcamento.get("enderecoCliente").getAsString() : "")+ "', "
                                    + "'"+( (orcamento.has("bairroCliente")) ? orcamento.get("bairroCliente").getAsString() : "" )+ "', "
                                    + "'"+( (orcamento.has("cepCliente")) ? orcamento.get("cepCliente").getAsString() : "" )+ "', "
                                    + ( ( (orcamento.has("observacao")) && (orcamento.get("observacao") != null) && (!orcamento.get("observacao").getAsString().isEmpty()) ) ? "'"+orcamento.get("observacao").getAsString() + "', " : "null, ")
                                    + "'X') MATCHING (GUID);";
            
            Integer qtdInsert = (Integer) aeaorcamService.saveCustomNativeQuery(insertOrcamento);
            
            if(qtdInsert > 0){
                
                JsonArray itensOrcamento = orcamento.getAsJsonArray("listaItemOrcamento");
                
                boolean itensInseridoSucesso = true;
                
                for (JsonElement item : itensOrcamento){
                    JsonObject itemOrcamento = item.getAsJsonObject();
                    
                    JsonObject estoque = itemOrcamento.getAsJsonObject("estoqueVenda");
                    JsonObject planoPagamento = itemOrcamento.getAsJsonObject("planoPagamento");
                    JsonObject unidadeVenda = itemOrcamento.getAsJsonObject("unidadeVenda");
                    JsonObject pessoaVendedor = itemOrcamento.getAsJsonObject("pessoaVendedor");
                    
                    
                    String insertItem =   "UPDATE or INSERT INTO AEAITORC(GUID, ID_AEAORCAM, ID_AEAESTOQ, ID_AEAPLPGT, \n"
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
                                        + "'" +(((itemOrcamento.has("complemento")) && (!itemOrcamento.get("complemento").getAsString().isEmpty())) ?  itemOrcamento.get("complemento").getAsString() : "null" )+ "') MATCHING (GUID)";
                    
                    if (((Integer)aeaorcamService.saveCustomNativeQuery(insertItem)) <= 0){
                        itensInseridoSucesso = false;
                    }
                }
                if (itensInseridoSucesso){
                    String updateOrcamento = "UPDATE AEAORCAM SET AEAORCAM.ANDAMENTO = '1' WHERE (AEAORCAM.GUID = '" + orcamento.get("guid").getAsString() + "')";
                    
                    if(((Integer)aeaorcamService.saveCustomNativeQuery(updateOrcamento)) > 0){
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
                        statusRetorno.setMensagemRetorno(String.valueOf(HttpStatus.INTERNAL_SERVER_ERROR) + "\n" + MensagemPadrao.UPDATE_ERROR + "\n" + "Erro ao mudar o status do Orcamento/Pedido.");

                        // Adiciona o status
                        retornoWebService.statusRetorno = statusRetorno;
                        // Adiciona os dados que eh pra ser retornado
                        retornoWebService.object = qtdInsert;
                    }
                } else {
                    // Cria uma vareavel para retorna o status
                    statusRetorno.setCodigoRetorno(HttpURLConnection.HTTP_INTERNAL_ERROR);
                    statusRetorno.setMensagemRetorno(String.valueOf(HttpStatus.INTERNAL_SERVER_ERROR) + "\n" + MensagemPadrao.INSERT_ERROR + "\n" + "Itens do Orcamento/Pedido.");

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
            statusRetorno.setMensagemRetorno(String.valueOf(e.getMessage()));
            statusRetorno.setExtra(e.getLocalizedMessage());
            
            // Adiciona o status
            retornoWebService.statusRetorno = statusRetorno;
            
            return new Gson().toJson(retornoWebService);
        }  catch (Exception e) {
            // Cria uma vareavel para retorna o status
            statusRetorno.setCodigoRetorno(HttpURLConnection.HTTP_INTERNAL_ERROR);
            statusRetorno.setMensagemRetorno(String.valueOf(e.getMessage()));
            statusRetorno.setExtra(e.getLocalizedMessage());
            
            // Adiciona o status
            retornoWebService.statusRetorno = statusRetorno;
            
            return new Gson().toJson(retornoWebService);
        }
    }
}
