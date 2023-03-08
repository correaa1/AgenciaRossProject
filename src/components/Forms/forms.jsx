import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";

import "./forms.scss";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="containerTextForms">      <h2 className="textForms">AGENDE UMA SESSÃO ESTRATÉGICA E DESCUBRA O PASSO A PASSO PARA VENDER MAIS EM 2023.</h2>
      <h2 className="textForms">PARA VENDER MAIS EM 2023.</h2>
      <h3 className="textForms1">PREENCHA O FORMULÁRIO ABAIXO</h3>
      </div>
      
     <div className="containerInput"> 
     <input
        placeholder="Nome"
        {...register("firstName", {
          validate: (value) => value !== ''
        })}
      />
      {errors.firstName && <p>Preencha o campo vazio</p>}

      
      <input
        placeholder="Sobrenome"
        {...register("lastName", {
          validate: (value) => value !== ''
        })}
      />
      {errors.lastName && <p>Preencha o campo vazio</p>}

      
      <input
        placeholder="Seu melhor e-mail "
        type="email"
        {...register("email",{
          validate: (value) => value !== ''
        })}
      />
      {errors.email && <p>Preencha o campo vazio</p>}
      
      <input
        placeholder="Seu número de whatsApp"
        type="text"
        {...register("telefone", {
          validate: {
            positiveNumber: (value) => parseFloat(value) > 0,
            lessThanHundred: (value) => parseFloat(value) < 1000000000000000
          }
        })}
      />
      {errors.telefone && errors.telefone.type === "positiveNumber" && (
        <p>Preencha o campo vazio</p>
      )}
      {errors.telefone && errors.telefone.type === "lessThanHundred" && (
        <p>o número de whatswapp deve conter no maximo 15 números.</p>
      )}

<input
        placeholder="Qual o instagram do seu negócio?"
        {...register("instagram", {
          validate: (value) => value !== ''
        })}
      />
      {errors.instagram && <p>Preencha o campo vazio</p>}

      <input
        placeholder="Qual o seu cargo na empresa"
        {...register("cargo", {
          validate: (value) => value !== ''
        })}
      />
      {errors.cargo && <p>Preencha o campo vazio</p>}
      
      <select {...register("select")}>
        <option value="female">0 a R$15 mil</option>
        <option value="male">R$15 a 30 mil</option>
        <option value="other">R$30 a R$60 mil</option>
        <option value="other">R$60 a 100 mil</option>
        <option value="other">R$100 a R$500 mil</option>
        <option value="other">mais de R$500 mil</option>
      </select>
      <input type="submit" /></div>
    </form>
  );
}


