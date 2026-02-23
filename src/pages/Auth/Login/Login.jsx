import { useState } from "react"
import "./Login.css"

function Login({ aoLogar }) {

    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    const acessLogin = () => {
        if (usuario === "") {
            alert("Por favor, diga seu nome viajante!");
            return;
        }

        if (usuario === "Mestre" && senha === "1234") {
            alert("Bem-vindo à Dungeon, " + usuario + "!");
            aoLogar(usuario)
        }
        else
            alert("Usuário ou Senha incorretos, viajante.")
    };

    return (
        <div className="login_container">
            <div className="login-title">
                <h1>RPG Manager</h1>
            </div >
            <div className="login-group input-row">
                <label className="label-login">Usuário: </label>
                <input
                    type="text"
                    placeholder="Digite seu nome, viajante..."
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                />
            </div>
            <div className="login-group input-row">
                <label className="label-login">Senha: </label>
                <input
                    type="password"
                    placeholder="Digite seu feitiço secreto..."
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />
            </div>

            <div className="buttons-group">
                <button className="login-button" onClick={acessLogin}>Entrar na Dungeon</button>
                <button className="signin-button">Criar conta</button>
            </div>

            <div className="forgot-group">
                <p className="forgot-password">Memória nublada?</p><a href="#">Clique aqui!</a>
            </div>
        </div >
    )
}

export default Login
