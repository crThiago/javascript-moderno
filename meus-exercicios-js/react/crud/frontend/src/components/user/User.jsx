import React, {Component} from 'react'
import axios from 'axios'
import Main from '../template/Main'

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, listar, Alterar e Excluir'
}

const baseUrl = 'http://localhost:3001/users'
const initicalState = {
    user: { name: '', email: '' },
    list: []
}

export default class UserCrud extends Component {

    state = { ...initicalState}

    componentWillMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    // Quando a função for chamada limpa os dados do usuário do formulário
    clear() {
        this.setState({user: initicalState.user}) 
    }

    save() {
        const user = this.state.user // Recebe o valor de user
        const method = user.id ? 'put' : 'post' // Caso exista o id define se será um insert ou update
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl // Caso exista o id define a url com id ou sem id
        axios[method](url, user)
            .then(resp => {
                const list = this.getUpdatedlist(resp.data) // atualiza a lista e armazena na constante
                this.setState({ user: initicalState.user, list }) // altera o state com a atualização ou inclusão
            })
    }

    getUpdatedlist(user, add = true) {
        const list = this.state.list.filter(u => u.id !== user.id) // .filter cria uma lista que não exista o id do usuário incluído ou alterado
        if (add) list.unshift(user) // Incluir o usuário no começo da lista criada por .filter
        return list
    }

    updateField(event) {
        const user = { ...this.state.user }
        user[event.target.name] = event.target.value
        this.setState({ user })
    }

    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="">Nome</label>
                            <input type="text" className="form-control" 
                                name="name"
                                value={this.state.user.name}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o nome..."/>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="">Email</label>
                            <input type="text" className="form-control" 
                                name="email"
                                value={this.state.user.email}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o email..."/>
                        </div>
                    </div>

                    <hr />
                        <div className="col-12 d-flex justify-content-end">
                            <button className="btn btn-primary" onClick={e => this.save(e)}>Salvar</button>
                            <button className="btn btn-secondary ml-2" onClick={e => this.clear(e)}>Cancelar</button>
                        </div>
                </div>
            </div>
        )
    }

    load(user) {
        this.setState({ user })
    }

    remove(user) {
        axios.delete(`${baseUrl}/${user.id}`).then(resp =>{
            const list = this.getUpdatedlist(user, false)
            this.setState({ list })
        })
    }

    renderTable() {
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    renderRows() {
        return this.state.list.map(user => {
            return (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <button className="btn btn-warning"
                            onClick={() => this.load(user)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ml-2"
                            onClick={() => this.remove(user)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    render() {
        return (
            <Main {...headerProps}>
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        )
    }
}