// Importa o tipo "PropsWithChildren" do React. Ele adiciona automaticamente a tipagem para a propriedade "children",
// que é usada para tipar o conteúdo que será passado para o componente (geralmente outros componentes ou elementos JSX).
import { PropsWithChildren } from 'react'

// Importa o componente GlobalStyles, que contém os estilos globais da aplicação.
// Este componente aplica os estilos globais em toda a árvore de componentes dentro do Providers.
import GlobalStyles from '../styles/global'

// Define o componente Providers, que é um "wrapper" (envolvedor) para aplicar os provedores de contexto e os estilos globais.
// "PropsWithChildren" garante que o componente "Providers" aceita o conteúdo filho (children) de qualquer tipo.
export function Providers({ children }: PropsWithChildren) {
  return (
    <>
      {/* O componente GlobalStyles aplica os estilos globais em toda a aplicação. */}
      <GlobalStyles />

      {/* Renderiza os filhos passados para o componente Providers.
          Ou seja, o conteúdo que é passado entre as tags de abertura e fechamento do componente Providers será renderizado aqui. */}
      {children}
    </>
  )
}
