import { WorkExperienceSectionActionType, WorkExperienceSectionActionTypes } from './types';
import { WorkItem } from '../../components/work-experience/WorkExperienceSection';

export type WorkExperienceState = {
  showNewItemForm: boolean,
  workItems: WorkItem[],
}

const initialState: WorkExperienceState = {
  showNewItemForm: false,
  workItems: [],
};

export const workExperienceReducer = (state = initialState, action: WorkExperienceSectionActionType) => {
  switch (action.type) {
    case WorkExperienceSectionActionTypes.ToggleNewItemForm:
      return { ...state, showNewItemForm: !state.showNewItemForm };
  }

  return { ...state };
};
