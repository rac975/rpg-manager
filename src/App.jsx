import "./App.css"

function App() {

  return (
    <div className="app-container">
      <div className="login_container">
        <div className="login-title">
          <h1>RPG Manager</h1>
        </div>
        <div className="login-group input-row">
          <label className="label-login">Usuário: </label>
          <input type="text" placeholder="Digite seu nome, viajante..." />
        </div>
        <div className="login-group input-row">
          <label className="label-login">Senha: </label>
          <input type="password" placeholder="Digite seu feitiço secreto..." />
        </div>

        <div className="buttons-group">
          <button className="login-button">Entrar na Dungeon</button>
          <button className="signin-button">Criar conta</button>
        </div>

        <div className="forgot-group">
          <p className="forgot-password">Memória nublada?</p><a href="#">Clique aqui!</a>
        </div>
      </div>
    </div>
  )
}

export default App
