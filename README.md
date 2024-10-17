# Desafio Técnico

O design para o sistema pode ser acessado através do seguinte link: [Clique aqui!](https://www.figma.com/design/Clapt3HvixJ0GoEbJVhQG9/Untitled?node-id=1-3&node-type=canvas&t=dRtxmuAwqZC3UUu2-0).

O objetivo deste desafio é criar um sistema que consuma a API pública de Star Wars, cuja base URL é `https://swapi.dev/`. O sistema foi desenvolvido utilizando as seguintes bibliotecas e ferramentas:

- **Axios**: Para realizar as requisições HTTP à API.
- **Styled-Components**: Para estilização dos componentes.
- **React Router DOM**: Para gerenciar a navegação entre as páginas.
- **TypeScript**: Para adicionar tipagem estática ao projeto e garantir maior segurança no desenvolvimento.

## Funcionalidades do Sistema

1. **Listagem de Personagens**:

   - O sistema deverá exibir uma lista de personagens obtidos através da API.
   - A listagem deve contar com um campo de input de texto para que o usuário possa realizar pesquisas por nome.

2. **Paginação**:

   - A listagem deve suportar paginação, permitindo que o usuário navegue entre as diferentes páginas de resultados.

3. **Detalhes do Personagem**:
   - Ao clicar em um card de personagem, o usuário deverá ser redirecionado para uma tela de detalhes, onde será possível visualizar informações mais completas sobre o personagem, incluindo os filmes em que ele participou.

A navegação entre as páginas foi implementada utilizando o **React Router DOM**, enquanto as requisições à API foi realizada com o **Axios**. O uso de **Styled-Components** deve garantir uma estilização modular e reutilizável, enquanto o **TypeScript** proporcionará uma melhor organização e robustez ao código.
