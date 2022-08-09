import React from "react";
import { useFormContext } from "../../context/contextoFormulario";

const Detalhe = () => {
  const { state } = useFormContext()

  const { trainer, pokemon } = state;

  return (
    <div className="detalhe-formulario">
      <div className="cabecalho">
        <h3>Vista prévia da solicitação</h3>
      </div>
      <section className="dados-cliente">
        <h4>Dados do Treinador</h4>
        <div className="lista">
          <p>Nome: {trainer.name}</p>
          <p>Sobrenome:  {trainer.lastName}</p>
          <p>Email:  {trainer.email}</p>
        </div>
      </section>
      <section className="dados-cliente">
        <h4>Dados do Pokémon</h4>
        <div className="lista">
          <p>Nome:  {pokemon.name}</p>
          <p>Tipo:  {pokemon.type}</p>
          <p>Elemento:  {pokemon.element}</p>
          <p>Altura:  {pokemon.height ? `${pokemon.height}cm`: ""}</p>
          <p>Idade:  {pokemon.age ? `${pokemon.age} anos` : ""} </p>
        </div>
      </section>
      <button
        className="botao-enviar"
        onClick={() => alert("Solicitação enviada :)")}
      >
        Enviar Solicitação
      </button>
    </div>
  );
};

export default Detalhe;
