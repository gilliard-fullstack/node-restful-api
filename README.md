😀 Restfull API | MongoDB CRUD 😀

> `::` Code made with 💓 by **Gilliard** `::`
Está API tem como objetivo, demonstrar como utilizar o MongoDB em uma API no NodeJS. Para utilizar esta API é bem simples, não é nada de outro 🌍.

## Clonando o Repositório

```bash
git clone https://github.com/gilliard-fullstack/node-restful-api.git
```

### Requerimentos

```bash
Nodejs >= 17.2.0
```

### Instalar dependências

```bash
npm install
```

## `::` **Documentação**

---

Primeiro você precisará alterar o `URI` de conexão ao `MongoDB`.

1. Abra o arquivo `app.js`
2. Insira a `URI` de conexão, que você poderá obter em seu **Painel de Controle** do **MongoDB Cloud**. Este [**Passo a Passo**](http://www.site.com) ensina como fazer.

```js
mongoose.connect(
  "mongodb+srv://username:password@core.x6vxh.mongodb.net/the-database-name-here?retryWrites=true&w=majority"
);
```

---

## 💎 `Cadastrando Usuário` 💎

Primeiro, nós precisaremos cadastrar um usuário, para que possamos habilitar a `autenticação`, que esta sendo gerenciado pelo framework `JWT`, sem o `username` e `senha`, você não conseguirá consumir a API, pois a sua requisição será negada.

## `Cadastrando os dados do usuário`

```bash
POST | http://your-domain-here:3000/user/
```

## `Objeto`

```bash
{
  "email": "email@github.com",
  "password": "12345"
}
```

🔒 `OBSERVAÇÃO: ` A sua senha enviada, será criptografada automaticamente pelo framework `bcrypt`. 🔒

🚨 `ALERTA SPOILER !!!!`

🔺 `OBSERVAÇÃO: ` Para executar os `REQUESTS` abaixo, será necessário efetuar o `LOGIN` conforme descrito 👇 `abaixo` 👇 no tópico `Efetuando Login`.

LISTAR TODOS OS USUÁRIOS

```
GET | http://your-domain-here:3000/user
```

LISTAR UM USUÁRIO ESPECIFICO

```
GET | http://your-domain-here:3000/user/insert-the-user-id-here
```

ALTERAR OS DADOS DO USUÁRIO

```
PATCH | http://your-domain-here:3000/user/insert-the-user-id-here
```

```
{
  "email": "email@github.com",
  "password": "12345"
}
```

DELETAR UM USUÁRIO

```
DELETE | http://your-domain-here:3000/user/insert-the-user-id-here
```

<br>

---

## 💎 `Cadastrando Produto` 💎

1.1 - Antes de iniciar o cadastramento de um `Produto`, nós precisaremos efetuar `login` e obter nosso `token`, que será retornado pelo `response ` de sua aplicação, como um `JSON`, que será gerado automaticamente pelo framework `JWT` e enviar este token pelo `header` como `BEARER` de sua aplicação.

## `Efetuando Login`

```bash
POST | http://your-domain-here:3000/user/login
```

## `Objeto`

```javascript
{
  "email": "email@github.com",
  "password": "12345"
}
```

1.2 - Agora nós poderemos efetuar o cadastramento de nosso `produto`.

## `Cadastrando um produto`

```bash
POST | http://your-domain-here:3000/product/
```

## `Objeto`

```javascript
{
  "name": "Harry Potter and the Philosopher's Stone",
  "price": 10.50
}
```

🔒 `OBSERVAÇÃO: ` É obrigatório enviar o `token` no `header` de sua aplicação, sem esta configuração, você não conseguirá enviar os `requests`. 🔒

🚨 `ALERTA SPOILER !!!!`

LISTAR TODOS OS PRODUTOS

```
GET | http://your-domain-here:3000/product
```

LISTAR UM PRODUTO ESPECIFICO

```
GET | http://your-domain-here:3000/product/insert-the-product-id-here
```

ALTERAR OS DADOS DO PRODUTO

```
PATCH | http://your-domain-here:3000/product/insert-the-product-id-here
```

```javascript
{
  name: "Harry Potter and the Philosopher's Stone",
  price: 10.5,
};
```

DELETAR UM PRODUTO

```
DELETE | http://your-domain-here:3000/user/insert-the-product-id-here
```

<br>

---

## 💎 `Cadastrando uma Compra` 💎

Após os produtos terem sido cadastrados com `sucesso`, nós poderemos cadastrar nossas `compras`.

## `Cadastrando uma compra`

```bash
POST | http://your-domain-here:3000/order
```

## `Objeto`

```javascript
{
  "productId": "gh4650gnh63big05nf83yfnf949",
  "quantity": 10
}
```

🔒 `OBSERVAÇÃO: ` Não esqueça de enviar o `token` pelo `header` de sua aplicação, senão o seu `request` não será aceito 🔒

🚨 `ALERTA SPOILER !!!!`

LISTAR TODAS AS COMPRAS

```
GET | http://your-domain-here:3000/order
```

LISTAR UMA COMPRA ESPECIFICA

```
GET | http://your-domain-here:3000/order/insert-the-order-id-here
```

DELETAR UMA COMPRA

```
DELETE | http://your-domain-here:3000/order/insert-the-order-id-here
```

## 😀 💓 ` EU DESEJO QUE ESTA API SEJA DE GRANDE UTILIDADE A TODOS !!!! BONS ESTUDOS !!!! 👍 Thank You 🤝`

<br>

---

## 👉 License

```
[Apache-2.0](LICENSE)
Disclaimer: _This is not an officially supported Google product._
```
