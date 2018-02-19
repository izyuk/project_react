import {combineReducers} from 'redux';
import WorkReducers from './project';
import ActiveProject from './project-active';

const allReducers = combineReducers({
  projects: WorkReducers,
  active: ActiveProject
});

export default allReducers;
