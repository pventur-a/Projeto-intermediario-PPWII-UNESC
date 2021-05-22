# Projeto Intermediário PPW UNESC

## Sobre o projeto

  Criar uma API que seja capaz de coletar (Web Scraping) e integrar dados na Web e responder com dados ao cliente de maneira estruturada usando JSON.

  Para quem gosta de músicas electronica, o [BeatPort](https://www.beatport.com/) é o site mais conhecido para baixar música eletrônica. Ele tem como foco único e exclusivo a especialização nas chamadas E-music.

## Desafio
  
- [x] Lista das musicas.
- [X] Top 10 de determinado género de música  

## TECNOLOGIAS

- [Node.js](https://www.npmjs.com/package/node-html-parser)
  - [Express](https://expressjs.com/pt-br/)
  - [Axios](https://www.npmjs.com/package/axios)
  - [Node-html-parser](https://www.npmjs.com/package/node-html-parser)

## EndPoints

    GET https://the-best-music.herokuapp.com/api/beatport

Exemplo

    {
        "TRACK": "Marea (We've Lost Dancing)",
        "ARTISTS": "The Blessed Madonna, Fred again",
        "BRAND": "Atlantic Records UK",
        "GENRES": "Deep House"
    }...

### Afro House

    // GET https://the-best-music.herokuapp.com/api/afroHouse

Exemplo

    {
        "TRACK": "Love Tonight",
        "ARTISTS": "Shouse",
        "BRAND": "Hell Beach",
        "GENRES": "Afro House"
    }...

Passando parâmetro na URL (Query string) para personalizar a requisição.

Pesquisando os "ARTISTS" onde o nome inclui "Fr".
Exemplo: ?search=Fr

        // GET https://the-best-music.herokuapp.com/api/beatport/?search=Fr

Resultado

    {
        "TRACK": "Marea (We've Lost Dancing)",
        "REMIXED": "Original Mix",
        "ARTISTS": "The Blessed Madonna, Fred again..",
        "BRAND": "Atlantic Records UK",
        "GENRES": "Deep House",
        "timestamp": 1621609381391
    },
    {
        "TRACK": "Want You to Love",
        "REMIXED": "Markus Homm Late Morning Dub",
        "ARTISTS": "Freaky Chakra, Freddy Be",
        "BRAND": "Monday Social Music",
        "GENRES": "Deep House",
        "timestamp": 1621609381391
    }

Exemplo

    // GET https://the-best-music.herokuapp.com/api/afroHouse/?search=Kim

Resultado

    {
        "TRACK": "Bana",
        "REMIXED": "BLOND:ISH Touch Edit",
        "ARTISTS": "Malone, BLOND:ISH, The Kimonos",
        "BRAND": "Abracadabra Music",
        "GENRES": "Afro House",
        "timestamp": 1621610394668
    }

<!-- Desenvolvido por Pedro Chimuco :v: -->
