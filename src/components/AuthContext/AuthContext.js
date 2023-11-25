import { createContext, useContext, useState } from "react"
import { loginApi } from "../../lib/UtilService"


const Context = createContext()

const getContext = () => {
    return useContext(Context)
}

const AuthContext = ({children}) => {

    const [user, setUser] = useState('')

    const login = async (login, senha)=>{

        const u = await loginApi(login, senha)
        console.log(u)
        if (u) {
            setUser({
                nome: u.nome,
                email: u.email,
                idade: u.idade,
                instituicao: u.instituicao,
                cep: u.cep,
                perfil: u.perfil,
                token: 'Sffeff'+ Math.random()*5000
            })
            return true
        }
    return false
    }

    const isAdm = () => {
        if (user === ""){
            return false
        }
        if (user.perfil === 'ADMIN' || user.perfil === 'admin' || user.perfil === 'Admin' || user.perfil === 'Adm') {
            return true
        }
        return false
    }

    const isAluno = () => {
        if (user === ""){
            return false
        }
        if (user.perfil === 'ALUNO' || user.perfil === 'aluno' || user.perfil === 'Aluno') {
            return true
        }
        return false
    }


    const resetPassword = async (id, login, senha) => {
}


    return (
        <Context.Provider value={{user, login, isAdm, isAluno}}>
            {children}
        </Context.Provider>
    )

}

export {AuthContext, getContext}