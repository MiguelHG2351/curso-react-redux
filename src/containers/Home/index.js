import React, { useEffect } from 'react';
import Searcher from '../../components/Searcher';
import PokemonList from '../../components/PokemonList';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonWithDeatils } from '../../actions';
import './styles.css';


function Home() {
  const dispatch = useDispatch();
  const list = useSelector(state => state.list);

  useEffect(() => {
    // getPokemons(151)
    dispatch(getPokemonWithDeatils())
  }, []);

  return (
    <div className='Home'>
      <Searcher />
      <PokemonList pokemons={list} />
    </div>
  );
}

export default Home;
