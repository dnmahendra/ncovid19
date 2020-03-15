import { Fragment } from 'react'
import Document from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { ServerStyleSheets as MUIServerStyleSheets } from '@material-ui/core/styles'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const styledComponentSheet =  new ServerStyleSheet()
    const materialUISheets = new MUIServerStyleSheets()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => {
            return styledComponentSheet.collectStyles(
              materialUISheets.collect(<App {...props} />)
            )
          },
        })

      const initialProps = await Document.getInitialProps(ctx)

      return {
        ...initialProps,
        styles: [
          <Fragment key="styles">
            {initialProps.styles}
            {materialUISheets.getStyleElement()}
            {styledComponentSheet.getStyleElement()}
          </Fragment>
        ],
      }
    } finally {
      styledComponentSheet.seal()
    }
  }
}