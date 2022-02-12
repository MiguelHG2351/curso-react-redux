import React, { useEffect } from 'react';
import Searcher from '../../components/Searcher';
import PokemonList from '../../components/PokemonList';
import Loader from '../../components/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemonsWithDetails } from '../../actions';
import './styles.css';


function Home() {
  const dispatch = useDispatch();
  const list = useSelector(state => state.list);
  const loading = useSelector(state => state.loading);

  useEffect(() => {
    // getPokemons(151)
    dispatch(fetchPokemonsWithDetails())
  }, []);

  return (
    <div className='Home'>
      <Searcher />
      {
        loading && <Loader isActive={loading} />
      }
      <Loader />
      <PokemonList pokemons={list} />
    </div>
  );
}

export default Home;
