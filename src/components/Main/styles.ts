// 'use client' indica que o código a seguir será executado no lado do cliente (navegador),
// necessário quando estamos utilizando o Next.js com recursos de renderização do lado do cliente.
'use client'

// Importa a biblioteca "styled-components" para estilizar componentes no estilo CSS-in-JS.
// O "styled" é uma função usada para criar componentes estilizados.
import styled from "styled-components"

// Cria um componente estilizado chamado "Wrapper" usando a função "styled.main",
// que gera um elemento <main> com os estilos definidos dentro da template string.
export const Wrapper = styled.main`
  // Define a cor de fundo do componente como um tom escuro (#06092b), que será o fundo da área principal.
  background-color: #06092b;
  
  // Define a cor do texto como branca (#fff) para garantir que o texto seja legível sobre o fundo escuro.
  color: #fff;
  
  // Define a largura do componente como 100% da largura da tela disponível.
  width: 100%;
  
  // Define a altura do componente como 100% da altura da tela disponível.
  height: 100%;
  
  // Define o preenchimento interno (padding) do componente em 3rem (tamanho relativo à fonte raiz),
  // criando espaço entre o conteúdo do componente e suas bordas.
  padding: 3rem;
  
  // Centraliza o texto horizontalmente dentro do componente, garantindo que qualquer texto fique alinhado ao centro.
  text-align: center;
  
  // Define o display do componente como "flex", que permite usar o modelo de layout flexbox para o layout interno.
  display: flex;
  
  // Define a direção dos itens dentro do layout flexbox como uma coluna (itens empilhados verticalmente).
  flex-direction: column;
  
  // Alinha os itens dentro do componente ao centro horizontalmente, ou seja, os itens flexíveis ficam centralizados ao longo do eixo transversal.
  align-items: center;
  
  // Justifica os itens dentro do componente ao centro verticalmente, ou seja, os itens flexíveis ficam centralizados ao longo do eixo principal.
  justify-content: center;
`
