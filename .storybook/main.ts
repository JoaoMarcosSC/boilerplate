const config = {
  // Certifique-se de que está abrangendo todos os tipos de arquivos de histórias.
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],

  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-webpack5-compiler-swc',
    '@chromatic-com/storybook'
  ],

  framework: {
    name: '@storybook/react',
    options: {}
  },

  webpackFinal: async (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`) // Permite imports absolutos.
    return config
  },

  docs: {}
}

export default config
