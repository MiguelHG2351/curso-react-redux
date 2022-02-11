import React, { useEffect } from 'react';
import Searcher from '../../components/Searcher';
import PokemonList from '../../components/PokemonList';
import { useDispatch, useSelector } from 'react-redux';
import getPokemons from '../../api/getPokemons';
import { setPokemon } from '../../actions';
import './styles.css';


function Home() {
  const dispatch = useDispatch();
  const list = useSelector(state => state.list);

  useEffect(() => {
    getPokemons(151)
    .then(response => response.json())
    .then(data => dispatch(setPokemon(data.results)));
  }, []);

  return (
    <div className='Home'>
      <Searcher />
      <PokemonList pokemons={list} />
    </div>
  );
}

export default Home;
