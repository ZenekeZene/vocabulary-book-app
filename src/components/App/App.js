import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import EmailLogin from 'templates/login/EmailLogin/EmailLogin'
import SocialLogin from 'templates/login/SocialLogin/SocialLogin'
import Divisor from 'components/Divisor/Divisor'

const App = () => {
  const {
    isAuthenticated,
    loginWithRedirect,
  } = useAuth0()

  React.useEffect(() => {
    fetch('https://vocabulary-book.mucholab.com/api/v1/words')
    .then(response => response.json())
    .then(({ data }) => {
      console.log(data)
    })
  }, [])

  return (
    <main className="main">
      <header className="main__header header">
        <img className="header__logo" alt="" src="notion-logo.svg" />
        <section className="header__titles">
          <h1>Vocabulary book</h1>
          <p className="subtitle">A personal tool to make revision of our vocabulary.</p>

        </section>
      </header>

      <article>
        <SocialLogin />
        <Divisor />
        <EmailLogin />
      </article>

      { !isAuthenticated && (<button onClick={loginWithRedirect}>Log in</button>) }

      <footer className="footer">
        <img src="/use-cases.png" alt="" className="footer__image" />
      </footer>
    </main>
  )
}

export default App;
