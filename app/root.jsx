
import { Outlet, LiveReload, Link, Links, Meta } from 'remix'
import globalStyles from '~/styles/global.css'

export const links = () => [{ rel: 'stylesheet', href: globalStyles }]

export const meta = () => {
  return {
    description: 'PCB 365 Forms',
    keywords: 'remix, forms'
  }
}

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
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
        <title>{title ? title : "My First Remix"}</title>
        <Meta />
        <Links />
      </head>
      <body>
        { children }
        { process.env.NODE_ENV == 'development' ? 
        <LiveReload /> : null }
      </body>
    </html>
  )
}

function Layout({ children }) {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logo">
          PCB365
        </Link>
        <ul className="nav">
          <li>
            <Link to="/forms">
              Forms 
            </Link>
          </li>
          <li>
            <label>Select:</label>
            <select name="forms" id="">Forms
              <option value=""><Link to="/forms/canadacustomsinvoice">Canada Customs Invoice</Link></option>
              <option value=""><Link to="/forms/uscustomsinvoice">US Customs Invoice</Link></option>

            </select>
          </li>
          <li>
            <Link to="/forms/canadacustomsinvoice">Canada Customs Invoice</Link>
          </li>
          <li>
            <Link to="/forms/uscustomsinvoice">US Customs Invoice</Link>
          </li>
        </ul>
      </nav>
      <div className="main">
        { children }
      </div>
    </>
  )
}

export function ErrorBoundary({error}) {
    console.log(error)
    return (
        <>
          <Document>
            <Layout>
              <h1>Error</h1>
              <p>{error.message}</p>
            </Layout>
          </Document>
        </>
    )
}