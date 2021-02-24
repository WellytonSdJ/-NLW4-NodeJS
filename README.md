# NODEJS

# DIA 1 - resumo
No primeiro dia vamos aprender os conceitos básicos sobre o que é uma API, entender o que é o NodeJS, onde ele tem sido utilizado e qual problema ele veio solucionar e também. Vamos também conhecer o Typescript e entender como ele irá nos ajudar durante o desenvolvimento da nossa aplicação. Já nessa aula vamos dar início ao desenvolvimento da nossa API, colocando em prática alguns dos conceitos aprendidos.

## APRESENTAÇÃO
O projeto dessa vez será uma API que faça o serviço de NPS - Net Promoter Score, que enviará um email para o cliente pedindo sua avaliação.


### API

API (aplication programming interface - ou, interface de programação) é o que faz a comunicação entre o cliente e o servidor. Ele faz isso por baixo dos panos, fazendo REQUISIÇÕES no banco de dados para o cliente enviando os dados solicitados por meio de RESPOSTA.


### NODEJS

NodeJS é uma plataforma opensource que permite usar javascript do lado servidor.
Com o NodeJS ele consegue fazer requisições de forma asincronas. Ou seja, se houver mais de uma requisição ele não irá parar a aplicação.

### Typescript

Typescript é um superset do Javascript, ou seja, um javascript com algumas features a mais. Por exemplo o uso da tipagem. A vantagem dele é exatamente essa, pois, uma vez que voce tiver que enviar informações para o backend elas já serão filtradas e corrigidas conforme voce já inserir as informações evitando erros futuros

## Instruções e Dependencias:

* express (para instalar `npm install express` ou `yarn add express`)
  * micro-framework para se trabalhar com NodeJS
  * com ele a gente consegue criar nossas 
    * rotas
    * middlewares
    * criar um servidor para rodar nossa aplicação.
  * é um dos mais utilizados pela comunidade.

* Para ele criar o servidor usando o Typescript precisamos instalar além da dependencia do express a extensão para typescript `npm i --save-dev @types/express` ou `yarn add @types/express -D`
  *ele precisa ser instalado em modo desenvolvimento ( -D ou -dev ) para não ser usado em produção.

* Typescript: instalaremos ele em modo de desenvolvimento ( `npm install typescript -D` ou `yarn add typescript -D`)

* para o typescript funcionar corretamente precisaremos instalar as extensões:
  * `yarn tsc --init` 
  * `yarn add ts-node-dev -D` - para converter o código em tempo de execução
  * depois iremos no nosso package.json criar um script
    * "dev": "ts-node-dev src/server.ts" - para ele rodar direto ao digitarmos apenas "npm run dev" ou "yarn dev"
    * ainda dentro do "dev" devemos inserir o comando "--transpile-only" para que não faça checagem de erro nas tipagens pois não precisamos que ele faça isso no momento em que estamos desenvolvendo pois o próprio VScode irá acusar isso quando estivermos fazendo errado.
    * também precisamos inserir o "-- ignore-watch node_modules" para ele ignorar tudo o que acontecer no node modules
    * por fim o script ficará assim:
      * "dev": "ts-node-dev --transpile-only -- ignore-watch node_modules src/server.ts"

* Uma vez tudo instalado criaremos as rotas
  * dentro da API existem 5 rotas bem conhecidas que são:
    * GET -> Buscar informações;
    * POST -> Salvar/ enviar informações
    * PUT -> Alterar
    * DELETE -> apagar
    * PATCH -> Alteração específica
* o formato utilizado para criação de rotas é:
  * app. (aplicação) + get/post/delete/... (método) -> dentro do método (em formato de função) chamaremos a rota, e depois a requisição/resposta. 
    * exemplo: app.get("/", (res, res) => { return res.json( message: "olá mundo" )})

#rumoaopróximonível

----------------------------------------------------------------------------------------------------
# DIA 2 - resumo

## banco de dados

No segundo dia vamos iniciar a configuração do banco de dados na nossa aplicação, aprendendo algumas formas possíveis para realizar o acesso do banco de dados através do Nodejs. Vamos entender os conceitos de migrations, models e criar nossa primeira tabela de usuário. Também nessa aula iremos aprender e criar nosso primeiro Controller, isolando toda regra para dentro dele.


## Instruções e Dependencias:

  * Para nossa aplicação usaremos um ORM 
  > ORM: Object Relatoional Mapping -> é um mapeamento entre objetos, ou seja, ele vai pegar nossa classe (entidade) e vai conseguir essa classe pra uma tabela especifica do banco de dados.
    * Por que usar ORM?
      * Ele trabalha bem com typescipt;
      * Por ele ser genérico, ou seja, facilmente podemos alterá-lo para outras opções como SQL por exemplo
    * para instalá-lo e suas dependencias documentação disponível em -> [Documentação Oficial] (www.typeorm.io/#/)
      * Para minha aplicação utilizei os comandos: `yarn add typeorm reflect-metadata --save`
    
  * Também instalei o SQlite por ser um banco em memória, ou seja, não precisando instalar nada em nossa maquina, não será esse usado para produção, mas para desenvolvimento é torna-se um facilitador e por isso essa escolha.
      * `yarn add sqlite3 --save`

  * Uma vez instalados iremos criar um ormconfig para passar para o typeORM quais serão nossas informações que vamos utilizar (qual banco de dados, onde estarão nossas entidades, onde estarão nossas migrations)
    * uma vez criado o arquivo (que pode ser .js .json), vamos inserir as configurações internas.
    > por enquanto o tipo e o banco de dados. (vide código)
  
  * depois disso precisaremos importar dentro do nosso server.ts o 'reflect-metadata' (*importante lembrar de colocar ele sempre primeiro nas importações*)
  * Também precisamos importar em server.ts nosso database
  
> Uma coisa interessante de se trabalhar com ORM é que não precisamos ter tanto conhecimento do SQL puro (SELECT *  FROM, INTO...) pois ele já dá essa facilidade pra gente. :)

### Migrations

  * O que são migrations??
  > São técnicas e ferramentas que auxiliam no versionamento da base de dados durante o desenvolvimento, que normalmente evitam a escrita de scripts 

  * para começarmos a trabalhar com migrations, precisaremos criar um comando para rodá-las na nossa aplicação
    * Em package.json, dentro de scripts: "typeorm": "ts-node-dev node_modules/typeorm/cli.js"

  * por padrão quando criarmos nossas migrations, ele vem configurado pra criar na raiz do projeto, mas como não queremos isso (queremos que tudo que seja relacionado a banco de dados esteja na pasta banco de dados)
    * para isso dentro de orm.config configuraremos a rota (vide código)
  
  * para criar uma migration no terminal digite: `yarn typeorm migration:create -n <nome-da-migration> ` e dentro dela (referindo-se ao novo arquivo criado) lançaremos as configurações das tabelas do nosso banco de dados.

  * uma vez criada nossa migration, para rodá-la, no terminal usaremos o comando: `yarn typeorm migration:run`
  * se tudo rodar sem problemas voce pode testar seu banco com extensões ou no site [beekeeper](www.beekeeperstudio.io)

  * dentro do *ormconfig* precisamos informar onde ficarão nossas migrations
    * dentro do json digitar: "migrations": ["./src/database/migrations/**.ts"]
    * caso precise dar um rollback, no terminal digite o comando: `yarn typeorm migration: revert`

  
### Controllers

  * O que são controllers?
  > Como o nome diz é um controlador. Mas explicando de forma melhor: é onde ficam as regras de negócio, funcionalidades e afins.
  > Por exemplo, no server chamaremos o controller e lá faremos todas execuções e regras de negócio que precisarmos.

  *