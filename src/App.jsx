import { useState } from "react"
import Login from "./pages/Auth/Login/Login"
import Dashboard from "./pages/Dashboard/Dashboard"
import "./App.css"

function App() {
  const [usuarioLogado, setUsuarioLogado] = useState('')

  const handleLoginSucesso = (nome) => {
    setUsuarioLogado(nome);
  }

  const handleLogout = () => {
    setUsuarioLogado(null)
  }

  return (
    <div className="app-container">
      {usuarioLogado ? (
        <Dashboard
          nomeUsuario={usuarioLogado}
          aoSair={handleLogout}
        />
      ) : (
        <Login
          aoLogar={handleLoginSucesso}
        />
      )
      }
    </div >
  )
}

export default App
