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
import br.com.sisinfoweb.configuracao.ConfiguracoesGerais;
import static br.com.sisinfoweb.controller.BaseMyController.logger;
import br.com.sisinfoweb.entity.CfaclifoEntity;
import br.com.sisinfoweb.entity.SmadispoEntity;
import br.com.sisinfoweb.entity.SmalogwsEntity;
import br.com.sisinfoweb.entity.SmausuarEntity;
import br.com.sisinfoweb.funcoes.BaseMyLoggerFuncoes;
import br.com.sisinfoweb.funcoes.FuncoesPersonalizadas;
import br.com.sisinfoweb.service.CfaclifoService;
import br.com.sisinfoweb.service.SmausuarService;
import com.google.gson.Gson;
import com.google.gson.JsonIOException;
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
 * @author Bruno Nogueira Silva
 */
@Controller
public class SmausuarController extends BaseMyController{
    
    @Autowired
    private SmausuarService smausuarService;
    
    @Autowired
    private CfaclifoService cfaclifoService;
    
    /**
     * <h1>GET /Smausuar?dispositivo={identificacao='00000'} <small>application/json</small></h1>
     * <h2>[?columnSelected=COLUNM_1, COLUNM_2, COLUNM_10, TABLE.COLUMN_100]</h2>
     * <h2>[?where=(TABLE.COLUMN_A = '%TEST%') AND (COLUMN_B > 100)]</h2>
     * <h2>[?sort=TABLE.COLUMN_Z, COLUMN_B, COLUMN_A]</h2>
     * <h2>[?resume=True]</h2>
     * <h2>[?sqlQuery=SELECT TABLE.COLUNM_A FROM TABLE WHERE (TABLE.ID_TABLE >= 1) AND TABLE.COLUMN_A IN(20, 21)]</h2>
     * <h2>[?size=100</h2>
     * <h2>[?pageNumber=2</h2>
     * 
     * @param model<p>
     * @param httpHeaders<p>
     * @param response<p>
     * @param dispositivo <b>required</b> Tipo:<code>String</code> Passado por padrão junto com a URL. Exemplo: dispositivo={identificacao='00000'}<p>
     * @param columnSelected <b>not required</b> Tipo:<code>String</code> Pode escolher apenas algumas colunas que deseja selecionar, separadas por virgula.
     * Exemplo: COLUNM_1, COLUNM_2, COLUNM_10, TABLE.COLUMN_100<p>
     * @param where <b>not required</b> Tipo:<code>String</code> Similar ao where do SQL SELECT.
     * Exemplo:(TABLE.COLUMN_A = '%TEST%') AND (COLUMN_B > 100).<p>
     * @param sort <b>not required</b> Tipo:<code>String</code><p>
     * @param resume <b>not required</b> Tipo:<code>Boolean</code> Se o valor for <code>True</code> vai ser retornado as colunas mais importantes.<p>
     * @param sqlQuery <b>not required</b> Tipo:<code>String</code> Pode ser passado uma SQL, ou seja, um SELECT customizado.
     * Caso seja passado(preenchido) este parametro os parametros <b>columnSelected, where, sort, resume,</b> vão ser desconsiderados.
     * Exemplo: SELECT TABLE.COLUNM_A FROM TABLE WHERE TABLE.ID_TABLE = 1<p>
     * @param size <b>not required</b> Tipo:<code>Integer</code> Esta opção define a quantidade de itens que deseja ser retornado na lista, por padrão a quantidade é 1000.<p>
     * @param pageNumber <b>not required</b> Tipo:<code>Integer</code> Seleciona a página que deseja retornar, caso seja dados que possua várias páginas.<p>
     * @return <code>RetornoWebServiceBeans</code> Retorna uma <code><b>String</b></code> no formato <code><b>JSON</b></code>
     * @see RetornoWebServiceBeans
     */
    @RequestMapping(value = {"/Smausuar"}, method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
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
            smausuarService.setSmadispoEntity(smadispoEntity);
            
            PageableBeans pageable = new PageableBeans( ((pageNumber != null && pageNumber > 0) ? pageNumber : 0), 
                                                        ((size != null && size > 0) ? size : 0)
                                                      );
            
            PageBeans<SmausuarEntity> listaPage;
            
            // Checa se foi passado alqum parametro para filtrar
            if ( ((sqlQuery != null) && (!sqlQuery.isEmpty())) || 
                    ((columnSelected != null) && (!columnSelected.isEmpty())) || 
                    ((where != null) && (!where.isEmpty())) ||
                    ((sort != null) && (!sort.isEmpty())) ){
                // Pesquisa de acordo com o sql passado
                listaPage = smausuarService.findCustomNativeQueryClient(resume, sqlQuery, columnSelected, where, sort, pageable);
            
            } else {
                listaPage = smausuarService.findAllClient(sort, pageable);
            }
            // Cria uma vareavel para retorna o status
            statusRetorno.setCodigoRetorno(HttpURLConnection.HTTP_OK);
            statusRetorno.setMensagemRetorno(MensagemPadrao.SUCCESS);
            
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
            smausuarService.closeEntityManager();
        }
    }
    
    
    /**
     * <h1><b>POST /Smausuar/Autenticador?dispositivo={identificacao='00000'}</b> <small>application/json</small></h1>
     * <p>Este método server para autenticar o login do usuário e a senha</p>
     * <p>Tem que ser passado no <b>Body</b> um <b>JSON</b> com os dados do usuário e a senha.
     * Basicamente tem que ser passado seguindo a estrutura e o nome da tabela <b>SMAUSUAR</b>.
     * A senha pode ser passada de forma plana(sem criptografica) ou pode ser passada criptografada seguindo o padrão <code><b>Java (AES/CBC/PKCS5Padding)</b></code>
     * </p>
     * <p>Lembrando que por padrão tem que ser enviado a identificação do dispositivo na URL de solicitação.</p>
     * 
     * @param model
     * @param httpHeaders
     * @param response
     * @param smausuarJson Esse parametro tem que vim no <code><b>Body</b></code>, e é passado no formato <code><b>JSON</b></code> como texto plano. Por Exemplo: {nome="USUARIO", senha="123"}
     * @param dispositivo Passado por padrão junto com a URL
     * @param where 
     * @param resume 
     * @return <code>RetornoWebServiceBeans</code> É retornado no padrão <code><b>JSON</b></code> de acordo com o padrão da classe.
     * @see RetornoWebServiceBeans
     * 
     */
    @RequestMapping(value = {"/Smausuar/Autenticador"}, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    @ResponseBody
    public String postAutenticadorJson(
                            Model model, 
                            @RequestHeader() HttpHeaders httpHeaders, 
                            HttpServletResponse response, 
                            @RequestBody String smausuarJson,
                            @RequestParam(name = PARAM_DISPOSITIVO, required = true) String dispositivo,
                            @RequestParam(name = PARAM_WHERE, required = false) String where,
                            @RequestParam(name = PARAM_RESUME, required = false, defaultValue = "false") Boolean resume) {
        
        StatusRetornoWebServiceBeans statusRetorno = new StatusRetornoWebServiceBeans();
        RetornoWebServiceBeans retornoWebService = new RetornoWebServiceBeans();
        
        // Coverte o dispositivo passado no formato json em uma entidade
        SmadispoEntity smadispoEntity = new Gson().fromJson(dispositivo, SmadispoEntity.class);
        try{
            JsonParser jsonParser = new JsonParser();
            JsonObject smausuarJsonObject = (JsonObject) jsonParser.parse(smausuarJson);
            
            // Verifica se realmente foi passar algum dado
            if( (smausuarJsonObject != null) && (smausuarJsonObject.has("nome")) && (smausuarJsonObject.has("senha"))){
                // Adiciona o nome de usuario e a senha na variavel do dispositivo
                smadispoEntity.setNome(smausuarJsonObject.get("nome").getAsString());
                // Descriptografa a senha que foi passada
                byte[] senha = new FuncoesPersonalizadas().encryptDecrypt(FuncoesPersonalizadas.KEY_DECRYPT, smausuarJsonObject.get("senha").getAsString(), ConfiguracoesGerais.CHAVE_DEFAULT_ENCRYPT_DECRYPT);
                // Checa se foi descriptografada
                if ((senha != null) ){
                    String passwordDecrypt = new String(senha, "UTF-8");
                    smadispoEntity.setSenha(passwordDecrypt);
                } else {
                    // Se nao eh uma senha criptografada entao vai tentar passar a senha que vei direto do parametro
                    smadispoEntity.setSenha(smausuarJsonObject.get("senha").getAsString());
                }
                
                smausuarService.setSmadispoEntity(smadispoEntity);
                String whereUsuar = "";
                
                // Verifica se foi enviado um where customizado
                if( (where !=null) && (!where.isEmpty())){
                    whereUsuar = where;
                } else {
                    whereUsuar = "(SMAUSUAR.NOME = '" + smausuarJsonObject.get("nome").getAsString() + "')";
                }
                // Busca o usuario no banco de dados do cliente, ou seja, faz autenticacao de acordo com os usuarios cadastrados no cliente
                List<SmausuarEntity> listaSmausuar = smausuarService.findCustomNativeQueryClient(resume, null, null, whereUsuar, null);
                
                // Checa se retornou alguma coisa
                if( (listaSmausuar != null) && (listaSmausuar.size() > 0) ){
                    // Adiciona o dispositivo na classe cfaclifoService para buscar o usuario na tabela clifo
                    cfaclifoService.setSmadispoEntity(smadispoEntity);
                    
                    where = "ID_CFACLIFO = " + listaSmausuar.get(0).getIdCfaclifo();
                    // Busca os dados do usuario 
                    List<CfaclifoEntity> listaCfaclifo = cfaclifoService.findCustomNativeQueryClient(Boolean.FALSE, null, "ID_CFACLIFO, ID_SMAEMPRE, NOME_RAZAO, NOME_FANTASIA, CODIGO_USU, ATIVO", where, null);
                    
                    // Checa se retornou alguma coisa
                    if( (listaCfaclifo != null) && (listaCfaclifo.size() > 0) ){
                        // Checa se o usuario esta ativo na tabela CFACLIFO
                        if( (listaCfaclifo.get(0).getAtivo() != null) && (listaCfaclifo.get(0).getAtivo().equals('1'))){
                            
                            // Cria uma vareavel para retorna o status
                            statusRetorno.setCodigoRetorno(HttpURLConnection.HTTP_OK);
                            statusRetorno.setMensagemRetorno(MensagemPadrao.SUCCESS);

                            // Adiciona o status
                            retornoWebService.statusRetorno = statusRetorno;
                            // Adiciona os dados que eh pra ser retornado
                            retornoWebService.object = listaSmausuar;
                            retornoWebService.page = new PageableBeans(listaSmausuar.size(), 1, 1000, 0, listaSmausuar.size());

                        } else {
                            //logger.warn(MensagemPadrao.ERROR_USUARIO_INATIVO + " - " + listaCfaclifo.get(0).getNomeRazao() + " - Dispositivo: " + smadispoEntity.getIdentificacao());
                            
                            SmalogwsEntity smalogwsEntity = new SmalogwsEntity();
                            smalogwsEntity.setLevel(this.getClass().getSimpleName());
                            smalogwsEntity.setMetodo(new Object() {} .getClass().getEnclosingMethod().getName());
                            smalogwsEntity.setTipo(BaseMyLoggerFuncoes.TYPE_WARN);
                            smalogwsEntity.setLog(MensagemPadrao.ERROR_USUARIO_INATIVO + " - " + listaCfaclifo.get(0).getNomeRazao() + " - Dispositivo: " + smadispoEntity.getIdentificacao());
                            smalogwsEntity.setAnexo(smadispoEntity.toString());
                            //Instancia a classe de logger para registrar o log no banco
                            new BaseMyLoggerFuncoes(cfaclifoService.getBaseMyRepository(), smadispoEntity, smalogwsEntity);

                            statusRetorno.setCodigoRetorno(HttpURLConnection.HTTP_INTERNAL_ERROR);
                            statusRetorno.setMensagemRetorno(MensagemPadrao.ERROR_USUARIO_INATIVO);
                            //statusRetorno.setExtra(e);

                            // Adiciona o status
                            retornoWebService.statusRetorno = statusRetorno;

                            StatusRetornoWebServiceBeans mensagem = new StatusRetornoWebServiceBeans();
                            mensagem.setCodigoRetorno(0);
                            mensagem.setMensagemRetorno(MensagemPadrao.ERROR_USUARIO_INATIVO + " - " + listaCfaclifo.get(0).getNomeRazao() + " - Dispositivo: " + smadispoEntity.getIdentificacao());
                            // Adiciona os dados que eh pra ser retornado
                            retornoWebService.object = mensagem;
                        }
                    } else {
                        //logger.warn(MensagemPadrao.ERROR_NOT_FOUND_USUARIO_CFACLIFO + " - " + listaSmausuar.get(0).getNome() + " - Dispositivo: " + smadispoEntity.getIdentificacao());
                        
                        SmalogwsEntity smalogwsEntity = new SmalogwsEntity();
                        smalogwsEntity.setLevel(this.getClass().getSimpleName());
                        smalogwsEntity.setMetodo(new Object() {} .getClass().getEnclosingMethod().getName());
                        smalogwsEntity.setTipo(BaseMyLoggerFuncoes.TYPE_WARN);
                        smalogwsEntity.setLog(MensagemPadrao.ERROR_NOT_FOUND_USUARIO_CFACLIFO + " - " + listaSmausuar.get(0).getNome() + " - Dispositivo: " + smadispoEntity.getIdentificacao());
                        smalogwsEntity.setAnexo(smadispoEntity.toString());
                        //Instancia a classe de logger para registrar o log no banco
                        new BaseMyLoggerFuncoes(cfaclifoService.getBaseMyRepository(), smadispoEntity, smalogwsEntity);

                        statusRetorno.setCodigoRetorno(HttpURLConnection.HTTP_INTERNAL_ERROR);
                        statusRetorno.setMensagemRetorno(MensagemPadrao.ERROR_NOT_FOUND_USUARIO_CFACLIFO);
                        //statusRetorno.setExtra(e);

                        // Adiciona o status
                        retornoWebService.statusRetorno = statusRetorno;

                        StatusRetornoWebServiceBeans mensagem = new StatusRetornoWebServiceBeans();
                        mensagem.setCodigoRetorno(0);
                        mensagem.setMensagemRetorno(MensagemPadrao.ERROR_NOT_FOUND_USUARIO_CFACLIFO);
                        // Adiciona os dados que eh pra ser retornado
                        retornoWebService.object = mensagem;
                    }
                } else {
                    //logger.warn(MensagemPadrao.ERROR_NOT_FOUND_USUARIO + " - Dispositivo: " + smadispoEntity.getIdentificacao());
                    
                    SmalogwsEntity smalogwsEntity = new SmalogwsEntity();
                    smalogwsEntity.setLevel(this.getClass().getSimpleName());
                    smalogwsEntity.setMetodo(new Object() {} .getClass().getEnclosingMethod().getName());
                    smalogwsEntity.setTipo(BaseMyLoggerFuncoes.TYPE_WARN);
                    smalogwsEntity.setLog(MensagemPadrao.ERROR_NOT_FOUND_USUARIO + " - Dispositivo: " + smadispoEntity.getIdentificacao());
                    smalogwsEntity.setAnexo(smadispoEntity.toString());
                    //Instancia a classe de logger para registrar o log no banco
                    new BaseMyLoggerFuncoes(cfaclifoService.getBaseMyRepository(), smadispoEntity, smalogwsEntity);

                    statusRetorno.setCodigoRetorno(HttpURLConnection.HTTP_UNAUTHORIZED);
                    statusRetorno.setMensagemRetorno(MensagemPadrao.ERROR_NOT_FOUND_USUARIO);
                    //statusRetorno.setExtra(e);

                    // Adiciona o status
                    retornoWebService.statusRetorno = statusRetorno;

                    StatusRetornoWebServiceBeans mensagem = new StatusRetornoWebServiceBeans();
                    mensagem.setCodigoRetorno(0);
                    mensagem.setMensagemRetorno(MensagemPadrao.ERROR_NOT_FOUND_USUARIO);
                    // Adiciona os dados que eh pra ser retornado
                    retornoWebService.object = mensagem;
                }
                
            } else {
                //logger.warn(MensagemPadrao.ERROR_NOT_USUARIO_SENHA + (smausuarJsonObject != null ? smausuarJsonObject.toString() : smausuarJson) );
                
                SmalogwsEntity smalogwsEntity = new SmalogwsEntity();
                smalogwsEntity.setLevel(this.getClass().getSimpleName());
                smalogwsEntity.setMetodo(new Object() {} .getClass().getEnclosingMethod().getName());
                smalogwsEntity.setTipo(BaseMyLoggerFuncoes.TYPE_WARN);
                smalogwsEntity.setLog(MensagemPadrao.ERROR_NOT_USUARIO_SENHA + (smausuarJsonObject != null ? smausuarJsonObject.toString() : smausuarJson) );
                smalogwsEntity.setAnexo(smadispoEntity.toString());
                //Instancia a classe de logger para registrar o log no banco
                new BaseMyLoggerFuncoes(cfaclifoService.getBaseMyRepository(), smadispoEntity, smalogwsEntity);

                statusRetorno.setCodigoRetorno(HttpURLConnection.HTTP_UNAUTHORIZED);
                statusRetorno.setMensagemRetorno(MensagemPadrao.ERROR_NOT_USUARIO_SENHA);
                //statusRetorno.setExtra(e);

                // Adiciona o status
                retornoWebService.statusRetorno = statusRetorno;

                StatusRetornoWebServiceBeans mensagem = new StatusRetornoWebServiceBeans();
                mensagem.setCodigoRetorno(0);
                mensagem.setMensagemRetorno(MensagemPadrao.ERROR_NOT_USUARIO_SENHA);
                // Adiciona os dados que eh pra ser retornado
                retornoWebService.object = mensagem;

                //response.setContentType(MediaType.APPLICATION_JSON_UTF8_VALUE);
                //response.getWriter().write(new Gson().toJson(retornoWebService));
            }
            
        } catch (JsonSyntaxException | JsonIOException e) {
            //logger.error(MensagemPadrao.ERROR + " - " + this.getClass().getSimpleName() + " - " + e.getMessage());
            
            SmalogwsEntity smalogwsEntity = new SmalogwsEntity();
            smalogwsEntity.setLevel(this.getClass().getSimpleName());
            smalogwsEntity.setMetodo(new Object() {} .getClass().getEnclosingMethod().getName());
            smalogwsEntity.setTipo(BaseMyLoggerFuncoes.TYPE_ERROR);
            smalogwsEntity.setLog(MensagemPadrao.ERROR + " - " + e.getMessage());
            smalogwsEntity.setAnexo(e.getCause());
            //Instancia a classe de logger para registrar o log no banco
            new BaseMyLoggerFuncoes(cfaclifoService.getBaseMyRepository(), smadispoEntity, smalogwsEntity);
            
            // Cria uma vareavel para retorna o status
            statusRetorno.setCodigoRetorno(HttpURLConnection.HTTP_INTERNAL_ERROR);
            statusRetorno.setMensagemRetorno(MensagemPadrao.ERROR + " | " + e.getMessage());
            statusRetorno.setExtra(e.toString());
            
            // Adiciona o status
            retornoWebService.statusRetorno = statusRetorno;
            
            return new Gson().toJson(retornoWebService);
        }  catch (Exception e) {
            //logger.error(MensagemPadrao.ERROR + " - " + this.getClass().getSimpleName() + " - " + e.getMessage());
            
            SmalogwsEntity smalogwsEntity = new SmalogwsEntity();
            smalogwsEntity.setLevel(this.getClass().getSimpleName());
            smalogwsEntity.setMetodo(new Object() {} .getClass().getEnclosingMethod().getName());
            smalogwsEntity.setTipo(BaseMyLoggerFuncoes.TYPE_ERROR);
            smalogwsEntity.setLog(MensagemPadrao.ERROR + " - " + e.getMessage());
            smalogwsEntity.setAnexo(e.getCause());
            //Instancia a classe de logger para registrar o log no banco
            new BaseMyLoggerFuncoes(cfaclifoService.getBaseMyRepository(), smadispoEntity, smalogwsEntity);
            
            // Cria uma vareavel para retorna o status
            statusRetorno.setCodigoRetorno(HttpURLConnection.HTTP_INTERNAL_ERROR);
            statusRetorno.setMensagemRetorno(MensagemPadrao.ERROR + " | " + e.getMessage());
            statusRetorno.setExtra(e.toString());
            
            // Adiciona o status
            retornoWebService.statusRetorno = statusRetorno;
            
            return new Gson().toJson(retornoWebService);
        }
        return new Gson().toJson(retornoWebService);
    }
}
