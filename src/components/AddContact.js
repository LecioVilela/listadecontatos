import React from "react";

class AddContact extends React.Component {
    state = {
        name: "",
        email: "",
        cpf: "",
        telefone: "",
        cep: "",
        logradouro: "",
        numero: "",
        bairro: "",
        cidade: "",
        estado: "",
    };

    add = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.email === "") {
            alert("Todos os campos são obrigatórios!");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({ 
        name: "",
        email: "" ,
        cpf: "",
        telefone: "",
        cep: "",
        logradouro: "",
        numero: "",
        bairro: "",
        cidade: "",
        estado: "",});
    };
    render() {
        return (
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Nome</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Nome completo"
                            value={this.state.name}
                            onChange={(e) => this.setState({ name: e.target.value })}
                        />
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input
                            type="text"
                            name="email"
                            placeholder="Seu melhor e-mail"
                            value={this.state.email}
                            onChange={(e) => this.setState({ email: e.target.value })}
                        />
                    </div>
                    <div className="field">
                        <label>CPF/CNPJ</label>
                        <input
                            type="text"
                            name="cpf/cnpj"
                            placeholder="000.000.000-00 / 00.000.000/0000-00"
                            value={this.state.cpf}
                            onChange={(e) => this.setState({ cpf: e.target.value })}
                        />
                    </div>
                    <div className="field">
                        <label>Telefone</label>
                        <input
                            type="text"
                            name="telefone"
                            placeholder="(00) 90000-0000"
                            value={this.state.telefone}
                            onChange={(e) => this.setState({ telefone: e.target.value })}
                        />
                    </div>
                    <div className="field">
                        <label>CEP</label>
                        <input
                            type="text"
                            name="cep"
                            placeholder="00000-000"
                            value={this.state.cep}
                            onChange={(e) => this.setState({ cep: e.target.value })}
                        />
                    </div>
                    <div className="field">
                        <label>Logradouro</label>
                        <input
                            type="text"
                            name="logradouro"
                            placeholder="Logradouro"
                            value={this.state.logradouro}
                            onChange={(e) => this.setState({ logradouro: e.target.value })}
                        />
                    </div>
                    <div className="field">
                        <label>Número</label>
                        <input
                            type="text"
                            name="numero"
                            placeholder="Número"
                            value={this.state.numero}
                            onChange={(e) => this.setState({ numero: e.target.value })}
                        />
                    </div>
                    <div className="field">
                        <label>Bairro</label>
                        <input
                            type="text"
                            name="bairro"
                            placeholder="Bairro"
                            value={this.state.bairro}
                            onChange={(e) => this.setState({ bairro: e.target.value })}
                        />
                    </div>
                    <div className="field">
                        <label>Cidade</label>
                        <input
                            type="text"
                            name="cidade"
                            placeholder="Cidade"
                            value={this.state.cidade}
                            onChange={(e) => this.setState({ cidade: e.target.value })}
                        />
                    </div>
                    <div className="field">
                        <label>Estado</label>
                        <input
                            type="text"
                            name="estado"
                            placeholder="Estado"
                            value={this.state.estado}
                            onChange={(e) => this.setState({ estado: e.target.value })}
                        />
                    </div>
                    <button className="ui button blue">Cadastre-se</button>
                </form>
            </div>
        );
    }
}

export default AddContact;