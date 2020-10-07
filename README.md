
### :rocket: Sobre a aplicação

Esta é uma aplicação construída em typescript para uma barbearia  fictícia, usando Node, React, React Native.

- **API:** NodeJs usando banco de dados PostgreSQL. Com autenticação JWt 
- **WEB:** React yup para verificação de dados, e compoonents estilizados.
- **MOBILE:** React Native usando compoonents estilizados.

### :bookmark_tabs: **Funcionalidades do site web**

### :bookmark_tabs: **Funcionalidades do aplicativo**


### :bookmark_tabs: **Rotas**
As rotas estão disponiveis pra consulta no arquivo <a href="https://github.com/fabianoobispo/gobarberbootcamp11/blob/master/backend/Insomnia_2020-04-16.json" target="_blank" alt="Rotas">Insomnia.json</a>

### Clonando repositorio
```sh 
git clone https://github.com/fabianoobispo/gobarberbootcamp11
```

### Instalando Dependências backend
```sh
cd gobarberbootcamp11/backend
yarn

```

### Subindo os bancos postgres e redis via docker 
```sh
docker run --name gobarber -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres

```
 

### Rodando migração e criando usuário Admin
Antes da migrate temos que criar um databese com o nome gostack_gobarber dentro do banco postgres
```sh
yarn typeorm migration:run

```

### Subindo a aplicação
```sh

```



### Instalando Dependências Fontend
```sh
cd gobarberbootcamp11/frontend
yarn
```

### Iniciando a aplicação frontend
```sh
yarn start
```
 



### Instalando Dependências Mobile
```sh
cd gobarberbootcamp11/app
yarn
```

### Iniciando a aplicação Mobile
```sh
yarn android
```
Obs.: App testado em dispositivo fisico android.


### Funcionalidades da aplicacao toda
 
# Recuperação de senha

**RF**

- O usuário deve poder recuperar sua senha informando o seu e-mail;
- O usuário deve receber um e-mail com instruções de recuperação de senha;
- O usuário deve poder resetar sua senha;

**RNF**

- Utilizar Mailtrap para testar envios em ambiente de dev;
- Utilizar Amazon SES para envios em produção;
- O envio de e-mails deve acontecer em segundo plano (background job);

**RN**

- O link enviado por email para resetar senha, deve expirar em 2h;
- O usuário precisa confirmar a nova senha ao resetar sua senha;

# Atualização do perfil

**RF**

- O usuário deve poder atualizar seu nome, email e senha;

**RN**

- O usuário não pode alterar seu email para um email já utilizado;
- Para atualizar sua senha, o usuário deve informar a senha antiga;
- Para atualizar sua senha, o usuário precisa confirmar a nova senha;

# Painel do prestador

**RF**

- O usuário deve poder listar seus agendamentos de um dia específico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;

**RNF**

- Os agendamentos do prestador no dia devem ser armazenados em cache;
- As notificações do prestador devem ser armazenadas no MongoDB;
- As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io;

**RN**

- A notificação deve ter um status de lida ou não-lida para que o prestador possa controlar;

# Agendamento de serviços

**RF**

- O usuário deve poder listar todos prestadores de serviço cadastrados;
- O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador;
- O usuário deve poder listar horários disponíveis em um dia específico de um prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;

**RNF**

- A listagem de prestadores deve ser armazenada em cache;

**RN**

- Os agendamentos devem estar disponíveis entre 8h às 18h (Primeiro às 8h, último às 17h);
- O usuário não pode agendar em um horário que já passou;
- O usuário não pode agendar serviços consigo mesmo;
- Cada agendamento deve durar 1h exatamente;
- O usuário não pode agendar em um horário já ocupado;
