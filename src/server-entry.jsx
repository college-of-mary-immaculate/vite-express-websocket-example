import ReactDOMServer from 'react-dom/server'
import { StaticRouter, Routes, Route } from 'react-router-dom'
import App from './App'

export function render(url, context) {
  return ReactDOMServer.renderToString(
    <StaticRouter location={url} context={context}>
      <Routes>
        <Route path='/' element={<App />} />
      </Routes>
    </StaticRouter>
  )
}
