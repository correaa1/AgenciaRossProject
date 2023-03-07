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
      <label htmlFor="firstName">Nome</label>
      <input
        placeholder="Digite seu nome"
        {...register("firstName", {
          validate: (value) => value !== ""
        })}
      />
      {errors.firstName && <p>Preencha o campo vazio</p>}

      <label htmlFor="lastName">Sobrenome</label>
      <input
        placeholder="Digite seu sobrenome"
        {...register("lastName", {
          validate: (value) => value !== ''
        })}
      />
      {errors.lastName && <p>Preencha o campo vazio</p>}

      <label htmlFor="email">Email</label>
      <input
        placeholder="exemplo@gmail.com"
        type="email"
        {...register("email")}
      />
      <label htmlFor="age">Idade</label>
      <input
        placeholder="Digite sua idade"
        type="text"
        {...register("age", {
          validate: {
            positiveNumber: (value) => parseFloat(value) > 0,
            lessThanHundred: (value) => parseFloat(value) < 200
          }
        })}
      />
      {errors.age && errors.age.type === "positiveNumber" && (
        <p>Idade Invalida</p>
      )}
      {errors.age && errors.age.type === "lessThanHundred" && (
        <p>Insira uma idade menor que 200</p>
      )}

      <input type="submit" />
    </form>
  );
}


