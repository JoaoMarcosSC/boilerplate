// 'use client' indica que o código deste arquivo deve ser executado no lado do cliente.
// Isso é utilizado no Next.js 13+ para indicar que o componente ou arquivo depende de funcionalidades específicas do cliente,
// como manipulação do DOM ou interação com APIs do navegador que não estão disponíveis no lado do servidor.
'use client'

import { createGlobalStyle } from 'styled-components'

// Define os estilos globais da aplicação utilizando o "createGlobalStyle".
const GlobalStyles = createGlobalStyle`
  // Seleciona todos os elementos e aplica os seguintes estilos:
  // Remove todas as margens e preenchimentos padrões, além de definir o box-sizing como "border-box".
  // Isso ajuda a manter um controle mais previsível das dimensões dos elementos.
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  // Define o tamanho da fonte base no elemento <html>.
  // Configura o tamanho da fonte para 62.5%, o que facilita o cálculo de unidades relativas (1rem = 10px).
  // Por exemplo, 1.4rem será igual a 14px.
  html {
    font-size: 62.5%; // 1rem = 10px == 10/16px = 62.5% (1.4rem = 14px)
  }

  // Aplica altura de 100% nos elementos <html>, <body> e no identificador #__next, garantindo que ocupem toda a altura da tela.
  html, body, #__next {
    height: 100%;
  }

  // Define a fonte padrão do corpo do documento, utilizando fontes comuns do sistema, caso uma não esteja disponível.
  // As fontes escolhidas são as mais comuns para garantir boa legibilidade e consistência entre diferentes sistemas.
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }`

// Exporta o "GlobalStyles" para que ele possa ser usado em outros lugares do aplicativo.
// Geralmente, "GlobalStyles" é incluído no arquivo principal de layout para garantir que os estilos globais sejam aplicados a toda a aplicação.
export default GlobalStyles
