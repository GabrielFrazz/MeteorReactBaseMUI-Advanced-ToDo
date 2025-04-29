# Advanced To-Do List

<div>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"      title="React"     alt="React"     width="40" height="40" />&nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/meteor/meteor-original.svg"             title="Meteor"    alt="Meteor"    width="40" height="40" />&nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg"  title="Mongo"     alt="Mongo"     width="40" height="40" />&nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg"     title="Material"  alt="Material"  width="40" height="40" />&nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"     title="TS"        alt="TS"        width="40" height="40" />&nbsp;
</div>

<br/>

## Sumário

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Executar](#como-executar)
- [Demonstração](#demonstração)

## Sobre o Projeto

Advanced To-Do List é uma aplicação web para gerenciamento de tarefas desenvolvida com Meteor e React, utilizando o Boilerplate do Synergia. O sistema oferece uma gestão de tarefas com autenticação de usuários, categorização e filtros .

## Funcionalidades

### Autenticação e Segurança

- Sistema completo de login e senha
- Acesso restrito a usuários autenticados
- Gerenciamento de permissões baseado no proprietário da tarefa

### Tela de Boas-Vindas

- Visualização das 5 últimas tarefas adicionadas/atualizadas
- Botão de acesso rápido para lista de tarefas
- Menu de navegação entre módulos

### Gerenciamento de Tarefas

- Criação, edição, visualização e exclusão de tarefas
- Marcação de tarefas como concluídas ou pendentes
- Opção para definir tarefas como pessoais (visíveis apenas ao criador)

### Interface e Usabilidade

- Campo de pesquisa para filtragem de tarefas por descrição
- Design responsivo adaptado para dispositivos móveis
- Interface moderna utilizando Material-UI
- Notificações de feedback ao realizar operações

## Tecnologias Utilizadas

- [Meteor](https://www.meteor.com/) - Framework full-stack JavaScript
- [React](https://reactjs.org/) - Biblioteca para construção de interfaces
- [MongoDB](https://www.mongodb.com/) - Banco de dados NoSQL
- [Material-UI](https://material-ui.com/) - Framework de componentes React
- [MeteorReactBaseMUI](https://github.com/synergia-labs/MeteorReactBaseMUI) - Boilerplate para desenvolvimento com Meteor e React

## Como Executar

1. Clone o repositório:

```bash
git clone https://github.com/GabrielFrazz/MeteorReactBaseMUI-Advanced-ToDo.git
cd MeteorReactBaseMUI-Advanced-ToDo
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie a aplicação:

```bash
meteor run
```

4. Acesse a aplicação em seu navegador:

```
http://localhost:3000
```

## Demonstração

![Demonstração do Advanced To-Do List](assets/2025-04-29%2016-58-54.gif)
