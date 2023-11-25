const URL = 'https://b7e3-186-233-43-17.ngrok.io'

const loginApi = async (login, senha)=>{

    const users = await fetch(`${URL}/usuario`)
    const jsUsers = await users.json();
    console.log(jsUsers)
    
    const logado = jsUsers.filter((u) => {
        return u.email === login && u.senha === senha
    })
    console.log(logado)

    if (logado.length == 0) {
        return false
    }else {
        return logado [0]
    }
}

const buscaCep = (cep) =>{

    const dados = fetch(`https://viacep.com.br/ws/${cep}/json/`)

        return dados.then((result) => {
            return result.json()
        }).then((json) => {
            console.log(json)
            return json
        })
}

const saveAluno = (user) => {

    return fetch(`${URL}/usuario`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                "body": JSON.stringify({ ...user, perfil: 'ALUNO' }),
            }).then((result) => {
                return (result.status == 201)
            }).catch(() => {
                return false
            })
}

export { loginApi, buscaCep, saveAluno }