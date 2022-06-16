import React from 'react'
import { useGetApi } from '../hooks/useGetApi'

const Login = () => {
  const API = 'https://jsonplaceholder.typicode.com/users/'  
  const {characters}=useGetApi(API);
  const optionEmails= characters.map(user => <option key={user.id} value={user.email}/>)
  return (
    <div className="login">
			<div className="form-container">
				<h1 className="title">Bienvenido</h1>
                <span className="subtitle">Inicia sesión en tu cuenta para empezar tu jornada laboral.</span><br/>
                <span className="subtitle">Esperamos que tengas un excelente día.</span>
				<form action="/" className="form">
					<label htmlFor="email" className="label">Correo electrónico</label>
                    <input list='emails' name='email' id='email' required type='email'/>
                    <datalist id="emails">{optionEmails}</datalist>
					<label htmlFor="new-password" className="label">Password</label>
					<input type="password" id="new-password" placeholder="*********" className="input input-password" required/>
                    <label htmlFor="onSesion">Mantenerme conectado</label>
                    <input type="checkbox" id="onSesion"/>
					<input type="submit" value="Iniciar Sesión" className="primary-button login-button" />
                    
				</form>
			</div>
		</div>
  )
}

export default Login