import React from 'react';
import {connect} from 'react-redux';
import {Filter} from '../ui/filter.component';
import {StoreStateType} from '../../store';
import {GenreReducerStateType} from '../../types';
const CFilter = ({genres}: {genres: GenreReducerStateType}) => {
  return <Filter genres={genres} />;
};

export const FilterContainer = connect(
  (state: StoreStateType) => ({
    genres: state.genres,
  }),
  null,
)(CFilter);
