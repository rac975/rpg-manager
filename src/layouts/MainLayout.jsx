import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import "./MainLayout.css"

function MainLayout({ nomeUsuario, aoSair }) {
    return (
        <div className='app-grid'>
            <Header
                nomeUsuario={nomeUsuario}
                aoSair={aoSair}
            />
            <main className='content'>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default MainLayout