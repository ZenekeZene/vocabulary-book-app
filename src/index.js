import React from 'react'
import ReactDOM from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'
import App from './components/App/App'
import reportWebVitals from './reportWebVitals'
import './assets/styles/styles.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Auth0Provider
    domain="dev-nwltfa38llpvvt82.eu.auth0.com"
    clientId="UEX2vio0eX5p3cFB2IgcS2Kcu5vQXs5q"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
