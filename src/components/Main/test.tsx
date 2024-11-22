// Importa a função "render" da biblioteca "@testing-library/react".
// Ela é usada para renderizar componentes React em um ambiente de teste virtual.
import { render, screen } from '@testing-library/react'

// Importa as extensões do Jest para a biblioteca de teste.
// Isso adiciona matchers customizados, como "toBeInTheDocument", para facilitar verificações específicas.
import '@testing-library/jest-dom'

// Importa o componente Main para ser testado.
import Main from '.'

// Define um conjunto de testes para o componente <Main />.
// A função "describe" agrupa testes relacionados, facilitando organização e leitura nos relatórios.
describe('<Main />', () => {
  // Define um teste específico dentro do grupo acima.
  // A função "it" descreve o que o teste deve verificar e contém o código que realiza a verificação.
  it('should render the heading', () => {
    // Renderiza o componente <Main /> no ambiente de teste.
    render(<Main />)

    // Verifica se o elemento do tipo "heading" com o texto "React Avançado" está presente no componente renderizado.
    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()

    // Comentário de exemplo para um teste (remover ou substituir pelo código real):
    // Rende o componente <Main /> em um ambiente de teste virtual.
    // const { getByText } = render(<Main />);

    // Verifica se o texto esperado está presente no componente renderizado.
    // Aqui, 'Your Heading' seria o texto esperado no componente.
    // expect(getByText('Your Heading')).toBeInTheDocument();
  })
})
