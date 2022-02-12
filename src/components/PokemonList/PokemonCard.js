import React from 'react';
import { Image, Label, Divider, Grid, Icon } from 'semantic-ui-react';
import { FAV_COLOR, MAIN_COLOR , DEFAULT_COLOR } from '../../utils/constants';
import { setFavorite } from '../../actions';
import { useDispatch } from 'react-redux'
import './styles.css';

const PokemonCard = ({ pokemon }) => {
  const dispatch = useDispatch();
  const color = pokemon.favorite ? FAV_COLOR : DEFAULT_COLOR;

  function addFavorite() {
    dispatch(setFavorite(pokemon.id));
  }

  return (
    <Grid.Column mobile={16} tablet={8} computer={4}>
      <div className='PokemonCard'>
        <button className="PokemonCard-favorite" onClick={addFavorite}>
          <Icon name='favorite' color={color} />
        </button>
        <Image
          centered
          src={pokemon.sprites.front_default}
        />
        <h2 className='PokemonCard-title'>{pokemon.name}</h2>
        <Divider />
        {
          pokemon.types.map(type => (
            <Label key={`${pokemon.id}-${type.type.name}`} color={MAIN_COLOR}>
              { type.type.name }
            </Label>
          ))
        }
      </div>
    </Grid.Column>
  );
};

export default PokemonCard;
