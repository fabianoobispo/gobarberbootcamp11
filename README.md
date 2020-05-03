
### :rocket: Sobre a aplicação

Esta é uma aplicação construída para uma transportadora fictícia, a FastFeet, usando Node, React, React Native.

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
docker run --name gobarber_postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres


```
 

### Rodando migração e criando usuário Admin
Antes da migrate temos que criar um databese com o nome gostack_gobarber dentro do banco postgres
```sh
yarn sequelize db:migrate

```

### Subindo a aplicação
```sh
yarn dev:server
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
 