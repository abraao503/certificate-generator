<h1 align="center">
   Gerador de certificados para cursos
</h1>

<p align="center">
  <a href="#space_invader-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-sobre-o-projeto">Sobre o projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-como-rodar-a-aplicação">Como rodar a aplicação</a>&nbsp;&nbsp;&nbsp;
  <br><br>
  <img src="https://user-images.githubusercontent.com/51488383/99077444-253b5e00-2593-11eb-8bb0-cced530894be.png">
</p>
<br><br>

## :space_invader: Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [Puppetter](https://github.com/puppeteer/puppeteer)
- [Express](https://expressjs.com/)
- [Handlebars](https://handlebarsjs.com/)

## :computer: Sobre o projeto

O projeto se trata de um serviço web para geração de certificados de cursos. O serviço recebe um template HTML e dados referente a um aluno do curso, então, um certificado, em formato PDF, é devolvido. 

Também disponível no Heroku através desse endereço [https://certificate-generator-ts.herokuapp.com/certificado](https://certificate-generator-ts.herokuapp.com/certificado)

## :information_source: Como rodar a aplicação

### Pré-requesitos
Você vai precisar instalar [Git](https://git-scm.com), [Node.js](https://nodejs.org/) v12.18.4 (ou versão posterior) e [Yarn](https://yarnpkg.com/). 

Clone o repositório e navegue até a pasta do projeto. 
```bash
git clone https://github.com/abraao503/certificate-generator.git
cd certificate-generator

```

Instale as dependências e rode o projeto utilizando o Yarn.
```bash
yarn
yarn dev
```
