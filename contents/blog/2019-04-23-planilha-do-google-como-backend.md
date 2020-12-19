---
layout: post
title:  "Como usar uma planilha do Google como API e CMS para qualquer site"
date:   2019-04-23 18:00:00 -0200
subtitle: "É serverless que se fala?"
categories: ['Desenvolvimento']
hero-image: 'https://lucas-inocente.storage.googleapis.com/1556074790842.sbkX4K0.png'
---

### Conteúdo do post:

- [Planilha](https://docs.google.com/spreadsheets/d/1kfcHc1TNm1DHKLRf_WEwdcdyX23_V9IhiZ8hsFs-pVM/edit?usp=sharing)
- [API](https://spreadsheets.google.com/feeds/list/1kfcHc1TNm1DHKLRf_WEwdcdyX23_V9IhiZ8hsFs-pVM/od6/public/values?alt=json)
- [Blog de exemplo](https://lucasinocente.com/blog-googlesheets/)
- [Repositório](https://github.com/lucasinocente/blog-googlesheets)

---

Se por um acaso você precisa de uma estrutura / arquitetura pra um site que seja:

- Totalmente gratuíto pra ser hospedado (backend e frontend);
- Simples de instalar;
- Simples de fazer deploy;
- Rápido de ser desenvolvido;
- Possibilidade de um usuário comum cadastrar um conteúdo;
- Maleável o suficiente para poder ser replicado para vários sites;
- Sistema de login e gerenciamento de usuários;
- E baterias incluídas...

Continue lendo esse texto.

### Introdução

Esses dias estava conversando com o [Guerra](http://5minutos.de/por/?little_war) sobre um desafio que estava me propondo: desenvolver um site que fosse 100% gratuíto pra que qualquer pessoa conseguisse hospedar de forma tão simples quanto o Github Pages.

### Arquitetura

Eu já tava viajando em um monolito com botão de deploy no Heroku usando mongo gratuito e o Guerra me mostrou que a planilha do Google tinha uma API Json pra ler o conteúdo que ele usava pro bot dele no Telegram. Por sinal sigam: @Binho_personal_bot.

Como já estava com a ideia de hospedar alguma coisa estática no Github Pages, foi fácil pensar na simples arquitetura:

![Frontend: Github Pages / API JSON: Planilha do Google / CMS: Planilha do Google](/assets/imgs/arq-planilha-como-backend.png)


### Admin / Backend

A proposta é usar o Google Sheets como nosso servidor backend e interface de gerenciamento do conteúdo, servindo de CMS.

Pra começar, crie uma planilha do Google como uma outra planilha qualquer.

#### Deixar a planilha pública

![](/assets/imgs/publish-to-web.png)

Depois de criada, vá em **File > Entire Document > Publish**. Isso deixará os dados da planilha públicos gerando o JSON que usaremos. Fique tranquilo pois manterá a segurança e somente quem tem acesso poderá editar o conteúdo.

#### Configurar as colunas

![](/assets/imgs/nomes-de-colunas.png)

Cada linha será um post e a primeira linha da planilha será o identificador das nossas colunas. Pro exemplo usaremos: url, title, content, image. Que serão respectivamente o endereço do post pra ele ser acessado, o título, o conteúdo e a imagem principal do post.

![](/assets/imgs/freeze-1-row.png)

Configure na ordem `url, title, content, image` e vá em **View > Freeze > 1 row**

Preencha o conteúdo da sua ou use a [planilha de exemplo](https://docs.google.com/spreadsheets/d/1kfcHc1TNm1DHKLRf_WEwdcdyX23_V9IhiZ8hsFs-pVM/edit?usp=sharing)

![](/assets/imgs/planilha-exemplo.png)

#### Descobrir URL do JSON

A URL padrão é `https://spreadsheets.google.com/feeds/list/` + ID da sua planilha + `/od6/public/values?alt=json`.

E o ID da sua planilha pode ser visto entre `d` e o `/edit/` do link.

![](/assets/imgs/link-planilha.png)

No meu caso forma a seguinte url: `https://spreadsheets.google.com/feeds/list/1kfcHc1TNm1DHKLRf_WEwdcdyX23_V9IhiZ8hsFs-pVM/od6/public/values?alt=json` que você pode [acessar e visualizar aqui](https://spreadsheets.google.com/feeds/list/1kfcHc1TNm1DHKLRf_WEwdcdyX23_V9IhiZ8hsFs-pVM/od6/public/values?alt=json).

#### Objeto JSON

O objeto que lista o conteúdo e que iremos usar é o `feed.entry`. O título de cada coluna está com um prefixo `gsx$` e dentro desse objeto com um parametro `$t`. Então pra ler o título do primeiro post temos: `feed.entry[0].gsx$title.$t`.

Até aqui temos nosso CMS e API prontos, agora falta só o site ler esse conteúdo.

### Frontend

Você já deve ter percebido que qualquer coisa que for feita no frontend vai funcionar, é só ler o JSON que é gerado.

Pra esse exemplo vou propor uma estrutura que pode ser utilizada por qualquer pessoa que não tenha conhecimentos de frameworks como Vue, React e Angular.

Teremos duas páginas, uma para a listagem de posts e outra para o post em si. Gerando as rotas `site.com/` e `site.com/post/#pedale-pro-trabalho`

Teremos a seguinte estrutura de pastas:

```
.
├── index.html
├── posts
|   ├── index.html
├── assets
|   ├── file.js
```

*"Gambiarra ou genialidade? Só o tempo dirá..."*

### Javascript

Basicamente precisamos de três coisas:

#### 1) Carregar JSON

De forma muito simples podemos usar o `XMLHttpRequest()`.

```
const sheetAsJsonUrl = 'https://spreadsheets.google.com/feeds/list/1kfcHc1TNm1DHKLRf_WEwdcdyX23_V9IhiZ8hsFs-pVM/od6/public/values?alt=json'

const xhr = new XMLHttpRequest()
xhr.open('GET', sheetAsJsonUrl)
xhr.send()
xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    // Mostra conteúdo
  }
}
```
Nada novo até aqui.

#### 2) Montar a listagem de posts da home

Pra gerar a listagem de posts, iremos utilizar o `document.getElementById('post-list').innerHTML`. A cada post ele concatena o html com o `+=`

```
const postList = document.getElementById('post-list')
const response = JSON.parse(xhr.responseText)
const posts = response.feed.entry
for (let i = 0; i < posts.length; i++) {
  let post = renderPostList(posts[i])
  postList.innerHTML += post
}
```

Pra renderizar o card iremos usar uma velha tática, como visto abaixo:

```
function renderPostList(post) {
  const title = post.gsx$title.$t
  const image = post.gsx$image.$t
  const url = post.gsx$url.$t
  const content = post.gsx$content.$t

  return '<div class="column">' +
            '<a href="posts/#' + url +'">' +
              '<div class="card">' +
                '<div class="card-image">' +
                  '<figure class="image is-4by3">' +
                    '<img src="' + image + '" alt="' + title + '">' +
                  '</figure>' +
                '</div>' +
                '<div class="card-content">' +
                  '<div class="content">' +
                    '<h3 class="title is-4">' + title + '</h3>' +
                    '<p>' + content.slice(0, 90) + ' [...]</p>' +
                    '<span class="button"> Saiba mais </span>'
                  '</div>' +
                '</div>' +
              '</div>' +
            '</a>' +
          '</div>'
}
```

Assim teremos a listagem de posts na nossa home.

#### 3) Renderizar conteúdo do post

Pra renderizar o conteúdo do post, após carregar o JSON, faremos uma pequena gambiarra de buscar o `location.hash` e renderizar somente o conteúdo relacionado com um maroto `if` dentro do `for` de posts:

```
const slug = location.hash.replace('#', '')
[...]
for (let i = 0; i < posts.length; i++) {
  if (slug === posts[i].gsx$url.$t) {
    renderSinglePost(posts[i])
  }
}
```

E pra atualizar o conteúdo do post, simplesmente:

```
const title = post.gsx$title.$t
const image = post.gsx$image.$t
const content = post.gsx$content.$t

document.getElementById('post-title').innerHTML = title
document.getElementById('post-image').src = image
document.getElementById('post-content').innerHTML = content
```

O resultado você pode ver aqui: [https://lucasinocente.com/blog-googlesheets/](https://lucasinocente.com/blog-googlesheets/)

### Conclusão

É isso aí! Com um mínimo de conhecimento de Javascript temos um "framework" pra trabalhar com hospedagem gratuíta de sites e um CMS "serverless".

Pra um site pequeno encaixa perfeitamente. Quer ver um caso de uso em produção? [http://menteaberta.com.br](http://menteaberta.com.br)

Espero que tenha gostado e fico à disposição pra qualquer dúvida :)

Aproveita e me segue no [Github](https://github.com/lucasinocente) ou [Twitter](https://twitter.com/lucas_inocente)!

Quer trocar uma ideia? Me chama no **olucassanchez@gmail.com**

---


