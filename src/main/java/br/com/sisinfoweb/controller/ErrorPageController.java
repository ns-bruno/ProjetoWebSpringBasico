package br.com.sisinfoweb.controller;

import br.com.sisinfoweb.banco.beans.StatusRetornoWebServiceBeans;
import br.com.sisinfoweb.banco.values.MensagemPadrao;
import static br.com.sisinfoweb.controller.BaseMyController.PARAM_COLUMN_SELECTED;
import static br.com.sisinfoweb.controller.BaseMyController.PARAM_DISPOSITIVO;
import static br.com.sisinfoweb.controller.BaseMyController.PARAM_PAGE_NUMBER;
import static br.com.sisinfoweb.controller.BaseMyController.PARAM_RESUME;
import static br.com.sisinfoweb.controller.BaseMyController.PARAM_SIZE;
import static br.com.sisinfoweb.controller.BaseMyController.PARAM_SORT;
import static br.com.sisinfoweb.controller.BaseMyController.PARAM_SQL_QUERY;
import static br.com.sisinfoweb.controller.BaseMyController.PARAM_WHERE;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

/**
 *
 * @author Bruno Nogueira Silva
 */
@Controller
public class ErrorPageController extends BaseMyController {

    //@RequestMapping(value = {"/ErrorPage"}, method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    //@ResponseBody
    @Override
    public String initJson(Model model,
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

        return null;
    }

    @RequestMapping(value = {"/errorPage"}, method = RequestMethod.GET)
    public ModelAndView initErrorPage(Model model, @RequestHeader() HttpHeaders httpHeaders, HttpServletRequest httpRequest) {

        ModelAndView modelAndView = new ModelAndView("errorPage/errorPage");
        StatusRetornoWebServiceBeans retornoStatus = new StatusRetornoWebServiceBeans();
        retornoStatus.setCodigoRetorno((Integer) httpRequest.getAttribute("javax.servlet.error.status_code"));
        
        switch (retornoStatus.getCodigoRetorno()) {
            case 400: {
                retornoStatus.setMensagemRetorno("Http Error Code: 400. Bad Request");
                break;
            }
            case 401: {
                retornoStatus.setMensagemRetorno("Http Error Code: 401. Unauthorized");
                break;
            }
            case 404: {
                retornoStatus.setMensagemRetorno(MensagemPadrao.ERROR_PAGE_NOT_FOUND);
                retornoStatus.setExtra(MensagemPadrao.ERROR_PAGE_NOT_FOUND_EXTRA);
                break;
            }
            case 500: {
                retornoStatus.setMensagemRetorno("Http Error Code: 500. Internal Server Error");
                break;
            }
        }
        modelAndView.addObject("returnWebserviceStatus", retornoStatus);
        return modelAndView;
    }
}
