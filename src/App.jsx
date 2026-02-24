import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import Login from "./pages/Auth/Login/Login"
import Dashboard from "./pages/Dashboard/Dashboard"
import MainLayout from "./layouts/MainLayout"
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
    <div className={ usuarioLogado ? "app-main-flow" : "app-auth-flow"}>
      {usuarioLogado ? (
        <Routes>
          <Route path="/" element={<MainLayout nomeUsuario={usuarioLogado} aoSair={handleLogout} />} >
            <Route index element={<Dashboard />} />
          </Route>
        </Routes>
      ) : (
        <Login
          aoLogar={handleLoginSucesso}
        />
      )}
    </div >
  )
}

export default App
