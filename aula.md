* Estrutura do Projeto

- Save exact - Nesta aula, será explicado como configurar a opção save-exact no arquivo .npmrc, que permite fixar as versões exatas das dependências instaladas em um projeto. Isso garante a estabilidade e consistência do ambiente de desenvolvimento e produção, prevenindo problemas de compatibilidade e incompatibilidade entre as versões das dependências. Além disso, esta configuração ajuda a evitar problemas de segurança, pois impede a instalação de versões vulneráveis das dependências.

- Carregando variáveis ambiente - Nessa aula é explicado como utilizar o dotenv para carregar as variáveis ambiente no projeto e o zod para fazer a validação dessas variáveis, garantindo assim que elas estejam em um formato correto e seguro.

- Configurando ESLint - Essa aula ensina como configurar o ESLint, uma ferramenta que ajuda a manter a consistência do código em projetos de software, e utiliza a configuração pré-existente @rocketseat/eslint-config.

- Criando aliases de importação - Nessa aula, você aprenderá como configurar aliases de importação para melhorar a organização e legibilidade do seu código. Essa configuração pode ser feita por meio dos paths do TypeScript e será explicada de forma simples e prática.

* Integração com Prisma ORM

Fundamentos do Prisma ORM - Nesta aula, será explicado o que é um ORM e suas vantagens em relação aos drivers nativos e query builders. Em seguida, será apresentado o Prisma ORM, suas vantagens e como configurá-lo para ser utilizado no projeto, obs: O Prisma ORM é uma ferramenta que facilita o mapeamento, a criação e o acesso a dados em um banco de dados relacional por meio de código TypeScript/JavaScript, permitindo interações seguras, tipadas e eficientes com tabelas e registros.

## Docker

- Essa aula é uma introdução ao Docker, explicando o que é, como funciona e quais são os benefícios de utilizá-lo para rodar serviços como PostgreSQL, Redis, Mongo e outros.

O que é o Docker?

Docker é uma plataforma de software que permite criar, implantar e executar aplicativos em contêineres virtuais. Ele permite que as aplicações e seus componentes sejam empacotados em um contêiner isolado e portátil, que pode ser executado em qualquer ambiente que tenha o Docker instalado, sem a necessidade de instalar dependências adicionais ou fazer grandes configurações. Com o Docker, é possível ter ambientes de desenvolvimento, teste e produção consistentes, seguros e escaláveis, aumentando a eficiência e a produtividade do desenvolvimento de software.

## PostgreSQL com Docker

- Nessa aula, você vai aprender a utilizar comandos básicos do Docker para criar um container do Postgres, iniciá-lo, pará-lo e removê-lo. Com isso, você poderá utilizar o banco de dados dentro do container em sua aplicação local, sem precisar instalá-lo diretamente na sua máquina

## Utilizando o Docker Compose

- Essa aula ensina a criar o arquivo do Docker Compose, que é um arquivo YAML, para definir os serviços da aplicação e suas configurações, como a imagem do Postgres a ser usada, as portas a serem expostas, as variáveis ambiente, entre outros. Com isso, é possível iniciar o container do Postgres com apenas um comando, que utiliza as configurações do arquivo do Docker Compose.

## Criando Schema do Prisma
- Nessa aula, serão criados os models CheckIn e Gym no arquivo de schema do Prisma.
- password hash - Irreversível: Não pode ser transformado de volta na senha original, melhor uso para armazenamento de senhas, na verificação compara o hash da senha digitada com o hash armazenado.

## Relacionamentos entre tabelas
- Nessa aula, serão explicados os conceitos básicos de relacionamentos em bancos de dados, incluindo os tipos 1 para 1, 1 para N e N para N. Em seguida, será mostrado como configurar esses relacionamentos no arquivo de schema do Prisma para as entidades User, CheckIn e Gym. obs: o primeiro campo da relação serve para armazenar a relação dos bancos de dados e ele não gera uma coluna.

* Caso de Uso e Design Patterns

##  Criação de um usuário
- Ainda de forma bem simples, será criado uma rota para a inserção de usuários.

## Controller de registro 
- Nesta aula, será criado um controller para receber as requisições HTTP e tratar as informações, podendo realizar ações como validar dados, buscar informações do banco de dados e enviar uma resposta ao cliente. O controller é uma parte importante da arquitetura de um servidor web, e ajuda a manter as regras de negócio separadas do restante da aplicação.

## Hash da senha e validação
- Nesta aula, será ensinado como utilizar o pacote bcryptjs para criar um hash da senha do usuário antes de inserir no banco de dados. Também será explicado como realizar a validação do email recebido na requisição antes de inserir o usuário.

## Caso de uso de registro 
- Nessa aula será explicado o conceito de Use Case Pattern e como ele pode ser aplicado em um projeto Node.js. Será criado um Use Case para a criação de usuário, onde a lógica de negócio será separada do controller.

## Repository Pattern
- Nessa aula, vamos entender o que é o Repository Pattern e seus benefícios na organização do código. Em seguida, vamos implementar o repositório de usuários utilizando o Prisma para realizar as operações no banco de dados.

## Inversão de dependências
- Nessa aula, você aprenderá sobre o princípio da inversão de dependência (DIP) do SOLID e como implementá-lo no use-case de registro de usuário, sobre a dependência do usersRepository.

O DIP propõe que as camadas mais altas de uma aplicação não dependam diretamente das camadas mais baixas, mas sim de uma abstração entre elas. Isso permite maior flexibilidade e facilidade de manutenção do código.

## Interface do repositório
- Nessa aula, vamos criar a interface de contrato do repositório de usuários, que definirá quais métodos deverão ser implementados pela classe concreta de repositório. Essa interface será utilizada para realizar a inversão de dependência no use-case de registro de usuário, seguindo o princípio da Dependency Inversion do SOLID.

## Lidando com erros do use case
- Nesta aula, você aprenderá a criar um arquivo de erro personalizado para o caso de um e-mail já existente ao criar um usuário. Dessa forma, a resposta da API será mais clara e amigável para o usuário final.

## Handler de erros global
- Nessa aula será ensinado como criar um Error Handler global na aplicação utilizando o método setErrorHandler do Fastify. Isso permitirá tratar erros de maneira centralizada, melhorando a manutenção e legibilidade do código.


* Design Patterns & Testes

## Configurando Vitest
- Nessa aula, você aprenderá como configurar o Vite e o plugin vite-tsconfig-paths na aplicação para permitir que o Vite entenda os paths definidos no arquivo tsconfig.json.

## Primeiro teste unitário
- Nesta aula, vamos criar o primeiro teste unitário para o use-case de criação de usuário. Vamos validar se está sendo feito o hash da senha corretamente. Também vamos aprender sobre como informar um objeto "fake" na inversão de dependência, para não realizar operações no banco durante um teste unitário.

##  In-Memory Databases

- Nessa aula, será explicado sobre o conceito de InMemoryTestDatabase, que permite criar um banco de dados em memória para testes unitários, sem afetar o banco de dados real. Será criada a classe de repositório em memória dos usuários e implementada a switch de testes do use-case de criação de usuários, utilizando esse banco de dados em memória.

## Gerando coverage de testes

- O Coverage é uma métrica utilizada para medir a quantidade de código que está sendo testado em uma aplicação. A aula irá explicar como configurar o comando test:coverage no package.json para gerar um relatório de cobertura de testes da aplicação.

## Utilizando UI do Vitest
- O Vitest é uma ferramenta de testes para Node.js que oferece uma interface de usuário (UI) para monitorar o status dos testes, logs, gráficos e outras informações úteis durante a execução dos testes. A aula pode ser focada em demonstrar as funcionalidades da UI do Vitest e como usá-las para analisar os resultados dos testes.

## Caso de uso de autenticação
- Nesta aula, será iniciado o desenvolvimento da funcionalidade de autenticação em uma aplicação web. Será criado o use-case responsável por autenticar o usuário. Na próxima aula, será realizado a criação dos testes unitários e do controller que irá utilizar esse use-case.


