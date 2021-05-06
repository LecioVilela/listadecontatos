import React from 'react'
import user from '../images/user.png'

const ContactCard = (props) => {

    const { id, name, email, cpf, telefone, cep, logradouro, numero, bairro, cidade, estado } = props.contact
    return (
        <div className='item'>
            <img className='ui avatar image' src={user} alt='user' />
            <div className='content'>
                <div className='header'>
                    {name}
                </div>
                <div>
                    {email}
                </div>
                <div>
                    {cpf}
                </div>
                <div>
                    {telefone}
                </div>
                <div>
                    {cep}
                </div>
                <div>
                    {logradouro}
                </div>
                <div>
                    {numero}
                </div>
                <div>
                    {bairro}
                </div>
                <div>
                    {cidade}
                </div>
                <div>
                    {estado}
                </div>
            </div>
            <i className='trash alternate outline icon' style={{ color: 'red', marginTop: '7px' }} onClick={() => props.clickHandler(id)}></i>
        </div>
    )
}

export default ContactCard