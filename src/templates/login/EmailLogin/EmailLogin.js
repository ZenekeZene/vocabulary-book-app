const EmailLogin = () => {
  return (
    <form className="login__form">
      <label>Email</label>
      <div className="input">
        <input className="input__field" type="text"></input>
      </div>

      <label>Password</label>
      <div className="input">
        <input className="input__field" type="password"></input>
      </div>

      <button className="login__form__submit button" type="submit">Continue with email</button>
    </form>
  )
}

export default EmailLogin
