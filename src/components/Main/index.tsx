// Importa todos os elementos exportados do arquivo 'styles' e os atribui ao objeto "S".
// Isso permite acessar os componentes estilizados definidos em 'styles' através do alias "S".
// Exemplo: S.Wrapper se refere ao componente Wrapper estilizado em 'styles'.
import * as S from './styles'

// Define o componente funcional Main. Ele é responsável por renderizar a estrutura da interface
// e usa o componente estilizado "Wrapper" importado de 'styles' para envolver o conteúdo.
const Main = () => (
  // Renderiza o componente "Wrapper" que foi importado como S.Wrapper de 'styles'.
  // O "Wrapper" é um componente estilizado que aplicará os estilos definidos no arquivo 'styles.ts' (ou .js).
  <S.Wrapper>
    {/* Renderiza um elemento <h1> que contém o texto "React Avançado".
         Esse é o título principal da seção ou página */}
    <h1>React Avançado</h1>
  </S.Wrapper>
)

// Exporta o componente Main para que ele possa ser usado em outras partes do aplicativo.
export default Main
