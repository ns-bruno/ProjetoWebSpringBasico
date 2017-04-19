# ProjetoWebSpringBasico
É um Projeto Web Mavem com Spring MVC Básico. Já pré-configurado a conexão com banco de dados com firebird e usar o JPA e Hibernete.
O projeoto foi construido usando a IDE Netbeans 8.2
No arquivo `pon.xml`já existe diversas dependências e configurações para que o projeto funcione assim que for clonado.

## Estrutura do projeto

Dentro do download você encontrará os seguintes diretórios e arquivos, os pacores e projetos main se chamam `SisInfoWeb`(abreviação de Sistemas de Informação Web).
```
SisInfoWeb/
├── src/
│   └── main/
|       ├── java/
|       |   └── br/com/sisinfoweb/
|       |       ├── banco/
|       |       |   └── diagrama/
|       |       |       └── JPADiagramaBanco.jpa
|       |       ├── controller/
|       |       ├── entity/
|       |       ├── repository/
|       |       └── service/
|       ├── resources/
|       |   └── META-INF/
|       |       └── persistence.xml
|       └── webapp/
|           ├── lib/
|           |   ├── menuCabecalho.jsp
|           |   ├── menuLateralEsquerda.jsp
|           |   ├── MyLayout.tag
|           |   └── rodape.jsp
|           ├── WEB-INF/
|           |   ├── jsp/
|           |   |   ├── dashboard.jsp
|           |   |   ├── index.jsp
|           |   |   └── smpempre.jsp
|           |   ├── tags/
|           |   ├── applicationContext.xml
|           |   ├── dispatcher-servlet.xml
|           |   ├── glassfish-resources.xml
|           |   ├── glassfish-web.xml
|           |   └── web.xml
|           └── index.html
├── nb-configuration.xml
└── pom.xml


│   ├── bootstrap.js
│   └── bootstrap.min.js
└── fonts/
    ├── glyphicons-halflings-regular.eot
    ├── glyphicons-halflings-regular.svg
    ├── glyphicons-halflings-regular.ttf
    └── glyphicons-halflings-regular.woff
```

## Plugin para o Netbeans IDE

Na estrutura do projeto existe o arquivo `JPADiagramaBanco.jpa`, onde mostra a modelagem gráfica do banco de dados. Para visualizar esse arquivo é necessário usar o plugin para o Netbeans chamado [Jeddict](https://jeddict.github.io). Com esse plugin pode modelar a estrutura de banco de dados e gerar as classes de entidades(`@Entity`) de forma automática. Também pode ser gerado o banco de dados através da modelagem feita pelo [Jeddict](https://jeddict.github.io). Para mais detalhes basta acessa o site ou entrar no canal do [Youtube da Jeddict](https://www.youtube.com/channel/UCGiNTVm6N_gtn4qIvBXOAoA)
