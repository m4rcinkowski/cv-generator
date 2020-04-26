import { WorkExperienceSectionActionType, WorkExperienceSectionActionTypes } from './types';
import WorkExperienceSection, { WorkItem } from '../../components/work-experience/WorkExperienceSection';

export type WorkExperienceState = {
  workItemForm: null | 'new' | 'edit',
  workItems: WorkItem[],
}

const initialState: WorkExperienceState = {
  workItemForm: null,
  workItems: [
    { id: 4, name: 'Something next', dateFrom: new Date('2020') },
    { id: 3, name: 'RST Software Masters', dateFrom: new Date('2015') },
    { id: 2, name: 'Supersam', dateFrom: new Date('2014'), dateTo: new Date('2015') },
    { id: 1, name: 'Nasza Klasa', dateFrom: new Date('2009'), dateTo: new Date('2014') },
  ],
};

export const workExperienceReducer = (state = initialState, action: WorkExperienceSectionActionType) => {
  let newItems: WorkItem[];

  switch (action.type) {
    case WorkExperienceSectionActionTypes.AddNewCompany:
      newItems = [
        ...state.workItems,
        {
          id: (Math.random() * 100).toFixed(0),
          dateFrom: new Date(action.payload.dateFrom),
          name: action.payload.name,
        },
      ];
      return {
        ...state,
        workItems: WorkExperienceSection.sortItems(newItems),
      };
    case WorkExperienceSectionActionTypes.EditCompany:
      newItems = state.workItems.filter((item) => item.id !== action.payload.id);
      newItems.push(action.payload);

      return {
        ...state,
        workItems: WorkExperienceSection.sortItems(newItems),
      };
    case WorkExperienceSectionActionTypes.ToggleNewCompanyForm:
      return { ...state, workItemForm: state.workItemForm === null ? 'new' : null };
    case WorkExperienceSectionActionTypes.OpenNewCompanyForm:
      return { ...state, workItemForm: 'edit' };
    default:
      return state;
  }
};
