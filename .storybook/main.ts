// Configuração principal do Storybook para o projeto.
const config = {
  // Define diretórios estáticos que o Storybook pode servir, como imagens e outros arquivos públicos.
  staticDirs: ['../public'],

  // Define os caminhos para encontrar arquivos de histórias (stories) dos componentes.
  // Neste caso, busca em todos os diretórios dentro de "src/components" que possuem o padrão "stories.tsx".
  stories: ['..src/components/**/stories.tsx'],

  // Adiciona complementos (addons) que expandem as funcionalidades do Storybook.
  // "@storybook/addon-essentials" é um pacote que inclui várias ferramentas úteis, como Actions, Controls, e Docs.
  addons: ['@storybook/addon-essentials'],

  // Configura o framework utilizado pelo Storybook.
  // Aqui está configurado para usar "@storybook/nextjs", que é otimizado para projetos Next.js.
  framework: {
    name: '@storybook/nextjs', // Nome do framework.
    options: {} // Opções específicas do framework (vazio neste caso).
  },

  // Configuração para geração de documentação.
  docs: {
    autodocs: true // Ativa a geração automática de documentação a partir dos arquivos de histórias.
  },

  // Configuração final do Webpack usada pelo Storybook.
  // Adiciona o diretório "src" como módulo resolvível, permitindo imports absolutos a partir de "src".
  webpackFinal: (config) => {
    // Adiciona o diretório "src" à lista de módulos resolvíveis.
    config.resolve.modules.push(`${process.cwd()}/src`)
    return config // Retorna a configuração atualizada.
  }
}

// Exporta o objeto de configuração para que o Storybook possa utilizá-lo.
export default config
