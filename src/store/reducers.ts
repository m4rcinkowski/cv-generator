import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { workExperienceReducer, WorkExperienceState } from './work-experience';

export type StoreState = {
  [k: string]: any,
  form: {},
  workExperience: WorkExperienceState,
};

export default combineReducers({
  form: formReducer,
  workExperience: workExperienceReducer,
});
