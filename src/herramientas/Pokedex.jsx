import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./pokedex.css";
import { Navbar } from "../Navbar";

function Pokedex() {
    const [pokemonList, setPokemonList] = useState([]);
    const [nextUrl, setNextUrl] = useState("");
    const [prevUrl, setPrevUrl] = useState("");
    const [pokemonImageList, setPokemonImageList] = useState({});
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");

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

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        /* handleSearch(searchTerm); */
        navigate("/herramientas/pokemon/" + searchTerm);
        setSearchTerm("");
    };

    /* const handleSearch = (term) => {
        setSearchTerm(term);
    }; */

    const getTypeClass = (type) => {
        switch (type) {
            case "normal" :
                return "badge badge-normal";
            case "grass":
                return "badge badge-grass";
            case "fire":
                return "badge badge-fire";
            case "water":
                return "badge badge-water";
            case "bug" :
                return "badge badge-bug";
            case "poison" :
                return "badge badge-poison";
            case "ghost" :
                return "badge badge-ghost";
            case "rock" :
                return "badge badge-rock";
            case "ground" :
                return "badge badge-ground";
            case "electric" :
                return "badge badge-electric";
            case "psychic" :
                return "badge badge-psychic";
            case "ice" :
                return "badge badge-ice";
            case "dragon" :
                return "badge badge-dragon";
            case "dark" :
                return "badge badge-dark";            
            case "fairy" :
                return "badge badge-fairy";
            case "fighting" :
                return "badge badge-fighting";
            case "flying" :
                return "badge badge-flying";
            case "steel" :
                return "badge badge-steel";
            default:
                return "badge bg-secondary";
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

                    <h3>
                        <div className="mb-3 px-5">
                            <form
                                className="d-flex bg-dark"
                                onSubmit={handleSubmit}
                                id="search-form"
                            >
                                <input
                                    className="form-control me-2"
                                    type="search"
                                    placeholder="Buscar Pokemon"
                                    aria-label="Search"
                                    value={searchTerm}
                                    onChange={handleChange}
                                />
                                <button
                                    className="btn btn-outline-success"
                                    type="submit"
                                >
                                    Buscar
                                </button>
                            </form>
                        </div>
                    </h3>
                    {pokemonList.map((pokemon) => (
                        <div
                            key={pokemon.name}
                            className="col-sm-4 col-lg-3 mb-3"
                        >
                            <div className="card shadow-sm">
                                {pokemonImageList[pokemon.name] && (
                                    <img
                                        className="card-img-top"
                                        src={
                                            pokemonImageList[pokemon.name].image
                                        }
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
                                                    className={getTypeClass(type)}
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
    );
}

export default Pokedex;
