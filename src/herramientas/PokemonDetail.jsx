import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Navbar } from "../Navbar";
import "./pokedex.css";

function PokemonDetail() {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchPokemon() {
            try {
                const response = await fetch(
                    `https://pokeapi.co/api/v2/pokemon/${id}`
                );
                const data = await response.json();
                setPokemon(data);
            } catch (error) {
                navigate("/*");
            }
        }

        fetchPokemon();
    }, [id]);

    if (!pokemon) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="card card-detail my-5 mx-auto">
                    <img
                        src={pokemon.sprites.front_default}
                        alt={pokemon.name}
                        className="card-img-top"
                    />
                    <div className="card-body">
                        <h2 className="card-title">{pokemon.name}</h2>
                        <p className="card-text">
                            
                            {pokemon.types.length === 1 ? (
                                <span
                                className="badge bg-secondary"
                                key={1}
                            >
                                {pokemon.types[0].type.name}
                            </span>
                            ) : (
                                <>
                                <span
                                    className="badge bg-secondary"
                                    key={1}
                                >
                                    {pokemon.types[0].type.name}
                                </span>
                                <span
                                    className="badge bg-secondary"
                                    key={2}
                                >
                                    {pokemon.types[1].type.name}
                                </span>
                                </>
                            )}
                        </p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            Vida: {pokemon.stats[0].base_stat}
                        </li>
                        <li className="list-group-item">
                            Ataque: {pokemon.stats[1].base_stat}
                        </li>
                        <li className="list-group-item">
                            Defensa: {pokemon.stats[2].base_stat}
                        </li>
                        <li className="list-group-item">
                            Ataque especial: {pokemon.stats[3].base_stat}
                        </li>
                        <li className="list-group-item">
                            Defensa especial: {pokemon.stats[4].base_stat}
                        </li>
                        <li className="list-group-item">
                            Velocidad: {pokemon.stats[5].base_stat}
                        </li>
                    </ul>
                    <div className="card-body">
                        <button
                            className="btn btn-primary"
                            onClick={() => navigate(-1)}
                        >
                            Volver
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PokemonDetail;
