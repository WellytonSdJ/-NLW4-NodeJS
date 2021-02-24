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

