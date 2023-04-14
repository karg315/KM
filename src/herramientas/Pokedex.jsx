import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./pokedex.css";
import { Navbar } from "../Navbar";

function Pokedex() {
    const [pokemonList, setPokemonList] = useState([]);
    const [nextUrl, setNextUrl] = useState("");
    const [prevUrl, setPrevUrl] = useState("");
    const [pokemonImageList, setPokemonImageList] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const getPokemonList = async () => {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon");
            const data = await response.json();
            setNextUrl(data.next);
            setPrevUrl(data.previous);
            setPokemonList(data.results);
            setLoading(false);
        };
        getPokemonList();
    }, []);

    const fetchImage = async (pokemonName) => {
        const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
        );
        const data = await response.json();
        const types = data.types.map((type) => type.type.name);
        setPokemonImageList((prevState) => ({
            ...prevState,
            [pokemonName]: {
                image: data.sprites.front_default,
                types: types,
            },
        }));
    };

    useEffect(() => {
        pokemonList.forEach((pokemon) => {
            fetchImage(pokemon.name);
        });
    }, [pokemonList]);

    const handleNextClick = async () => {
        setLoading(true);
        try {
            const response = await fetch(nextUrl);
            const data = await response.json();
            setPokemonList(data.results);
            setNextUrl(data.next);
            setPrevUrl(data.previous);
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
    };

    const handlePrevClick = async () => {
        setLoading(true);
        try {
            const response = await fetch(prevUrl);
            const data = await response.json();
            setPokemonList(data.results);
            setNextUrl(data.next);
            setPrevUrl(data.previous);
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row mt-5">
                    <h2 className="mb-4">
                        Pokedex <span className="badge bg-primary">Beta</span>
                    </h2>
                    {pokemonList.map((pokemon) => (
                        <div
                            key={pokemon.name}
                            className="col-sm-4 col-md-3 mb-3"
                        >
                            <div className="card shadow-sm">
                                {pokemonImageList[pokemon.name] && (
                                    <img
                                        className="card-img-top"
                                        src={pokemonImageList[pokemon.name].image}
                                        alt={pokemon.name}
                                    />
                                )}
                                <div className="card-body">
                                    <h3 className="card-title">
                                        {pokemon.name}
                                    </h3>
                                    {pokemonImageList[pokemon.name] && (
                                        <div className="mb-2 justify-content-center d-flex">
                                            {pokemonImageList[
                                                pokemon.name
                                            ].types.map((type, index) => (
                                                <span
                                                    className="badge bg-secondary"
                                                    key={index}
                                                    >
                                                    {type}
                                                </span>
                                                
                                            ))}
                                        </div>
                                    )}                                    
                                    <Link
                                        to={`/herramientas/pokemon/${pokemon.name}`}
                                        className="btn btn-primary"
                                    >
                                        Detalles
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="d-flex justify-content-center my-3">
                    {prevUrl && (
                        <button
                            className="btn btn-primary me-2"
                            onClick={handlePrevClick}
                        >
                            Anterior
                        </button>
                    )}
                    {nextUrl && (
                        <button
                            className="btn btn-primary"
                            onClick={handleNextClick}
                        >
                            Siguiente
                        </button>
                    )}
                </div>
            </div>
        </>
    )
}

export default Pokedex;
