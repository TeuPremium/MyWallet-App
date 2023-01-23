import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import GlobalStyle from "../../../Styles/GlobalStyle";


export default function() {
    const navigate = useNavigate();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
      
      navigate('/home')
      console.log(data)
      
    };
  
    console.log(watch("example")); // watch input value by passing the name of it
  
    return (
      <Container>
      <GlobalStyle />
      <h2>Nova entrada</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
         <div><input placeholder="valor" id='valor' name="Valor" type="number" {...register("value", {required:true})} /></div>
        {errors.email && <div><h3>coloque o valor</h3></div>}
        
        <div><input id='entrada' name="entrada" placeholder="Descrição" type="text" {...register("description", { required: true })} /></div>
        {errors.password && <div><h3>insira uma descrição</h3></div>}

    <SubmitBtn> <input value="Salvar entrada" style={{background:'#ff4791', color:'white'}} type="submit" /></SubmitBtn>
      </form>
      </Container>
    );
  }

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    margin-top: 65px;
    h1{
        position: relative;
        /* left: 115px; */
    }
    input{
        width:303px ;
        height: 45px;
        border-color:#d4d4d4;
        border-style: solid;
        border-radius: 5px;
        border-width: 1px;
        margin-bottom: 15px;
        box-sizing: border-box;
        padding-left: 11px;
        font-weight: 400;
        font-size: 20px;
        color: #414141;
        ::placeholder{
        color:#dbdbdb;    
        }
        }
    img{
    margin-top: 80px;
    margin-bottom: 80px ;
    }
`

const SubmitBtn = styled.div`
    input{
        border: none;
    }
`
