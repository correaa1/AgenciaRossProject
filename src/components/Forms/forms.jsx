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
      <div className="containerTextForms">   
    <h2 className="textForms">AGENDE UMA SESSÃO ESTRATÉGICA E DESCUBRA O PASSO A PASSO<br/> PARA VENDER MAIS EM 2023.</h2>
      <h3 className="textForms">PREENCHA O FORMULÁRIO ABAIXO</h3>
      </div>
      
     <div className="containerInput"> 
     <input
        placeholder="Nome e Sobrenome"
        {...register("NameComplet", {
          validate: (value) => value !== ''
        })}
      />
      {errors.NameComplet && <p className="formsP">Preencha o campo vazio</p>}

      
      <input
        placeholder="Seu melhor e-mail "
        type="email"
        {...register("email",{
          validate: (value) => value !== ''
        })}
      />
      {errors.email && <p className="formsP">Preencha o campo vazio</p>}
     
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
        <p className="formsP">Preencha o campo vazio</p>
      )}
      {errors.telefone && errors.telefone.type === "lessThanHundred" && (
        <p className="formsP">o número de whatswapp deve conter no maximo 15 números.</p>
      )}

<input
        placeholder="Qual o instagram do seu negócio?"
        {...register("instagram", {
          validate: (value) => value !== ''
        })}
      />
      {errors.instagram && <p className="formsP">Preencha o campo vazio</p>}

      <input
        placeholder="Qual o seu cargo na empresa"
        {...register("cargo", {
          validate: (value) => value !== ''
        })}
      />
      {errors.cargo && <p className="formsP">Preencha o campo vazio</p>}
      
      <select {...register("select")}>
        <option value="valor">R$15 a 30 mil</option>
        <option value="valor">R$30 a R$60 mil</option>
        <option value="valor">R$60 a 100 mil</option>
        <option value="valor">R$100 a R$500 mil</option>
        <option value="valor">mais de R$500 mil</option>
      </select>
      
      <input type="submit" value="Enviar Contato"/> </div>
    </form>
  );
}


