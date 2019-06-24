/*
 * Document   : globalComponents
 * Created on : 10/05/2019, 13:03:38
 * Author     : Bruno Nogueira Silva
 */
import Vue from 'vue';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';

const requireComponent = require.context(
  // O caminho relativo da pasta de componentes
  '../components',
  // Se deve ou não olhar subpastas
  false,
  // Expressão regular para localizar nomes de componentes base
  /My[A-Z]\w+\.(vue|js)$/
);

requireComponent.keys().forEach(fileName => {
  // Pega a configuração do componente
  const componentConfig = requireComponent(fileName);

  // Obtém nome em PascalCase do componente
  const componentName = upperFirst(
    camelCase(
      // Tira o início `./` e a extensão do nome do arquivo
      fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
    )
  );

  // Registra o componente globalmente
  Vue.component(
    componentName,
    // Olha para as opções em `.default`, existentes
    // se o componente foi exportado com `export default`,
    // caso contrário usa o módulo raiz.
    componentConfig.default || componentConfig
  );
});