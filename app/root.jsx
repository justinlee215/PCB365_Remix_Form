
import { Outlet, LiveReload, Link, Links, Meta } from 'remix'

import globalStyles from '~/styles/global.css'

export const links = () => [{ rel: 'stylesheet', href: globalStyles }, {rel: 'icon', type: 'image/x-icon', href: "/favicon.png"}]

export const meta = () => {
  return {
    description: 'PCB 365 Forms',
    keywords: 'remix, forms'
  }
}

export default function App() {
  return (
    <Document>
        <Outlet />
    </Document>
  );
}

function Document({ children, title }) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title ? title : "PCB365"}</title>

        <Meta />
        <Links />
      </head>
      <div className='container'>
      <body>
        <nav className="navbar">
        <Link to="/">
          <img src="/images/pcb365.png" alt="pcb 365 logo" width="200" />
        </Link>
        <ul className="nav">
          <li>
            <Link to="/forms">
              My Forms
            </Link>
          </li>
          <li>
            <Link to="/forms/canadacustomsinvoice">Canada Customs Invoice</Link>
          </li>
          <li>
            <Link to="/forms/uscustomsinvoice">US Customs Invoice</Link>
          </li>
        </ul>
      </nav>
      <div className="blueBackgroundImage"><img src="/images/blueBackground.jpg" alt="pcb current site Logo link"/></div>
      <div className="main">
      { children }
      
      { process.env.NODE_ENV == 'development' ? 
      <LiveReload /> : null }
        
      </div>
      </body>
      <div className="footer">
        <Link to="/"><div className="logo"><img src="/images/pcb365.png" alt="pcb current site "/></div></Link>
      </div>
      </div>
    </html>
  )
}



export function ErrorBoundary({error}) {
    console.log(error)
    return (
        <>
          <Document>
              <h1>Error</h1>
              <p>{error.message}</p>
          </Document>
        </>
    )
}