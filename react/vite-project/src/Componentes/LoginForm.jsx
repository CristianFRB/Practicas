import { useState } from "react";
import './Diseño.css';
import styled from "styled-components";

export function LoginForm() {
  const [nombre, setNombre] = useState("");
  const [contraseña, setContraseña] = useState("");

  return (
    <LoginFomr>
      <Titulo>Login</Titulo>
      <form action="loginform">
        <Texto>Usuario:</Texto>
        <Datos
          type="text"
          value={nombre}
          onChange={e => setNombre(e.target.value)}
        />
        <Texto>Contraseña:</Texto>
        <Datos
          type="password"
          value={contraseña}
          onChange={e => setContraseña(e.target.value)}
        />
        <Boton type="submit">Iniciar sesión</Boton>
        <Enlaces>
          <Link href="/crear-cuenta">Crear cuenta</Link>
          <Link href="/recuperar-contraseña">Recuperar contraseña</Link>
        </Enlaces>
      </form>
    </LoginFomr>
  );
}

export default LoginForm;

const LoginFomr = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #1c8c7f;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`;

const Titulo = styled.h1`
  font-size: 3.5rem; 
  color: #ffffff;
  margin-bottom: 1rem;
`;

const Texto = styled.p`
  font-size: 1.45rem; 
  color: #cbffa9;
  text-align: left;
`;

const Datos = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd; 
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 1rem;
  background-color: #ffffff; 
`;

const Boton = styled.button`
  width: 100%;
  padding: 0.75rem;
  border: none; 
  border-radius: 4px;
  background-color: #f4a261; 
  color: #ffffff;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #e76f51; 
  }
`;

const Enlaces = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 1rem;
`;

const Link = styled.a`
  color: #cbffa9;
  font-size: 0.9rem;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;
