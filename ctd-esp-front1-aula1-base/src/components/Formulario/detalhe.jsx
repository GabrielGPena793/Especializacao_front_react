import React, { useContext } from "react";
import { FormContext } from "../../context/contextoFormulario";

const Detalhe = () => {
  const { state } = useContext(FormContext)

  const { trainer, pokemon } = state;
  
  return (
    <div className="detalhe-formulario">
      <div className="cabecalho">
        <h3>Vista prévia da solicitação</h3>
      </div>
      <section className="dados-cliente">
        <h4>Dados do Treinador</h4>
        <div className="lista">
          <p>Nome: {trainer.nome}</p>
          <p>Sobrenome:  {trainer.sobrenome}</p>
          <p>Email:  {trainer.email}</p>
        </div>
      </section>
      <section className="dados-cliente">
        <h4>Dados do Pokémon</h4>
        <div className="lista">
          <p>Nome:  {pokemon.nomePokemon}</p>
          <p>Tipo:  {pokemon.tipoPokemon}</p>
          <p>Elemento:  {pokemon.elementoPokemon}</p>
          <p>Altura:  {pokemon.alturaPokemon}</p>
          <p>Idade:  {pokemon.idadePokemon}</p>
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
