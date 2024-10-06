const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Configurações dos eventos para mochawesome
      on('after:run', (results) => {
        if (results) {
          const { merge } = require('mochawesome-merge')
          const generateReport = require('mochawesome-report-generator')
          const options = {
            reportDir: 'mochawesome-report', // diretório de saída dos relatórios
            inline: true,                    // para gerar o relatório com os gráficos inline
            saveHtml: true,
            saveJson: true,
          }

          return merge(options)
            .then((report) => generateReport.create(report))
            .catch((err) => {
              console.error('Erro ao gerar o relatório:', err)
            })
        }
      })
    },
    baseUrl: "https://bookcart.azurewebsites.net/",
    video: false, // opcional: desativa os vídeos dos testes
    reporter: 'mochawesome', // especifica mochawesome como o gerador de relatório
    reporterOptions: {
      reportDir: 'cypress/reports/mochawesome', // onde os relatórios serão salvos
      overwrite: false,
      html: true,
      json: true
    }
  }
})
