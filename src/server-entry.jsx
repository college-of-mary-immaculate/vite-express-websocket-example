import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'

import Routes from './Routes';

import './index.css';

export function render(url, context) {
  return ReactDOMServer.renderToString(
    <StaticRouter location={url} context={context}>
      <Routes />
    </StaticRouter>
  )
}
