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

* Implementando casos de uso

## Caso de uso de autenticação
- Nesta aula, será iniciado o desenvolvimento da funcionalidade de autenticação em uma aplicação web. Será criado o use-case responsável por autenticar o usuário. Na próxima aula, será realizado a criação dos testes unitários e do controller que irá utilizar esse use-case.

## Testes e controller de autenticação
- Nesta aula, serão criados os testes unitários para o use-case de autenticação, garantindo que o processo de autenticação está funcionando corretamente. Também será criado o controller que receberá a requisição de autenticação, validará as informações e retornará a resposta adequada, foi colocado na rota de autenticação o /sessions pro código ficar mais semântico a leitura.

## Refatorando instâncias nos testes
- Nessa aula, vamos aprender a utilizar o método beforeEach para limpar o contexto de testes antes de cada execução, evitando interferências de testes anteriores e garantindo maior confiabilidade nos resultados dos testes.

## Utilizando Factory Pattern
- Nesta aula, você aprenderá sobre o conceito de Factory Pattern e como aplicá-lo para instanciar os use-cases de forma mais organizada, ele centraliza a criação de instâncias e fora do factory você só chama a função não precisa saber como usar as dependências.

## Caso de uso de perfil
- Nessa aula, vamos criar o use case para recuperar o perfil do usuário logado na aplicação e também o teste unitário para garantir que o retorno está correto.

## Caso de uso de check-in
- Nessa aula será criado o use case de check-in em uma academia e seu respectivo teste unitário. Além disso, será feita uma pequena refatoração para incluir o await antes de expect que utilizem o .rejects. O objetivo é garantir que o teste não falhe por não aguardar a resolução de uma Promise.

## TDD 
- (Test Driven Development) é uma abordagem de desenvolvimento de software em que os testes são escritos antes do código. Na aula, será explicado o conceito de TDD e aplicado no desenvolvimento da funcionalidade que valida se um usuário já realizou check-in no mesmo dia. Primeiramente, será criado o teste unitário e em seguida, o código será desenvolvido para que esse teste passe.

Red, green and Refactor:

O conceito "red, green and refactor" é uma abordagem do TDD (Test-Driven Development) para desenvolvimento de software. Consiste em três etapas:

Red (Vermelho): nesta fase, o desenvolvedor escreve um teste que deve falhar, ou seja, ele garante que o teste não passará sem implementar o código necessário.
Green (Verde): aqui, o desenvolvedor escreve a quantidade mínima de código necessária para fazer o teste passar.
Refactor (Refatorar): após o teste passar, o desenvolvedor refatora o código para melhorar a qualidade, sem alterar seu comportamento.
Essa abordagem garante que o código seja desenvolvido com base em testes confiáveis, resultando em um código mais limpo, seguro e fácil de manter.

## Validando data do check-in
- Nesta aula, será implementada a validação da data do check-in para garantir que o usuário possa realizar check-ins em diferentes dias, foi usado a instalação direta da biblioteca dayjs para essa aula.

## Implementando casos de uso - Validando distância do check-in
- Nesta aula, será criado um teste unitário para a validação de que o check-in só pode ser realizado se o usuário estiver em um raio de até 100 metros da academia. Em seguida, será implementada a funcionalidade correspondente no use-case de check-in.

função aplicada pra medir a distância :

Primeiro, a função verifica se as duas coordenadas são iguais e retorna 0 se for o caso, indicando que a distância entre elas é zero.

Em seguida, a função converte as coordenadas de graus para radianos e calcula a diferença de longitude entre as duas coordenadas. A fórmula de Haversine é usada para calcular a distância entre os dois pontos. Essa fórmula usa a lei dos cossenos para calcular a distância entre dois pontos em uma esfera, como a Terra.

A distância é então convertida em milhas e depois em quilômetros, e o resultado é retornado como um número de ponto flutuante que representa a distância em quilômetros entre as duas coordenadas.

## Caso de uso de criação de academia
- Nessa aula, é criado o use-case de criação de academia e seu respectivo teste unitário. Além disso, há uma refatoração no teste de check-in para utilizar o método create do gymsRepository e também é criado erros específicos para a distância entre a academia e o usuário e também quantidade máxima de check-ins em um dia.

## Caso de uso de histórico
- Nessa aula, será criado o use-case de histórico de check-ins de um usuário com paginação, permitindo que o usuário possa visualizar seus check-ins anteriores. Além disso, serão criados os testes unitários para validar o funcionamento correto desse use-case.

## Caso de uso de métricas
- Nesta aula, será criado o use-case responsável por obter o número de check-ins realizados por um usuário, assim como seu respectivo teste unitário.

## Caso de uso de busca de academias
- Nessa aula será criado o use-case para buscar academias pelo título, utilizando paginação e também serão criados os testes unitários para garantir o seu correto funcionamento.

## Caso de uso de academias próximas
- Nessa aula, será criado o use-case para listar academias próximas ao usuário, utilizando a latitude e longitude do usuário e da academia para o cálculo da distância. Também será criado o respectivo teste unitário para validar a funcionalidade.

## Caso de uso de validar de check-in
- Nessa aula será criado o use-case de validação de um check-in, ou seja, verificar se um usuário tem permissão para realizar um check-in em uma academia. Também serão criados os testes unitários para garantir o correto funcionamento do código.

## Validando horário do check-in
- Nesta aula, será aplicada a metodologia TDD para implementar a validação de tempo no use-case de validar um check-in. A implementação seguirá o processo red-green-refactor, em que primeiro serão escritos os testes para a funcionalidade, em seguida, a funcionalidade será implementada para passar nos testes e, por fim, será realizada uma refatoração para melhorar o código. A validação deve permitir que o check-in seja válido somente até 20 minutos após sua criação.

* Controllers & Testes E2E 

## Repositórios do Prisma
- Nessa aula, iniciará a implementação dos repositórios do Prisma seguindo as interfaces de contrato já definidas, utilizando o Prisma Client para realizar as operações no banco de dados.

## Repositório de academias
- Essa aula irá implementar o repositório de Gyms seguindo a interface de contrato utilizando o Prisma. 

A query SQL apresentada está realizando uma busca de todas as academias que estão a uma distância máxima de 10km da localização representada pela latitude e longitude informadas como parâmetros. A fórmula utilizada no WHERE é conhecida como Haversine Formula, e é utilizada para calcular a distância entre dois pontos em um globo. O resultado é multiplicado por 6371 para obter a distância em quilômetros.

## Factories dos casos de uso
- Nessa aula, serão criados os arquivos de factory de todos os use-cases restantes que ainda não foram implementados.

## Princípios da autenticação JWT
- Nessa aula, serão apresentadas duas estratégias de autenticação muito utilizadas em aplicações web: Basic Auth e JWT (JSON Web Token). Será explicado o funcionamento de cada uma e as suas principais diferenças. Além disso, será feita uma explanação mais detalhada sobre os conceitos por trás do JWT, como ele é gerado, a sua estrutura e os dados que podem ser armazenados nele.







