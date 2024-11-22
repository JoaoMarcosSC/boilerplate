// Importa o componente "Main" de um arquivo localizado na pasta 'components'.
// O componente "Main" é responsável por renderizar o conteúdo principal da página.
import Main from '../components/Main'

// Define o componente funcional "Home". Ele representa a página inicial ou principal do aplicativo.
export default function Home() {
  // Retorna o componente "Main" dentro do JSX.
  // Isso faz com que o conteúdo do componente "Main" seja exibido dentro da página "Home".
  return <Main />
}
