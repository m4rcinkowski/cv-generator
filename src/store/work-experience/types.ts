import { CreatedWorkItem } from '../../components/work-experience/WorkItemCreateForm';

export enum WorkExperienceSectionActionTypes {
  ToggleNewCompanyForm = 'WORK/TOGGLE_NEW_COMPANY_FORM',
  AddNewCompany = 'WORK/NEW_COMPANY_ADDED',
}

export type ShowNewWorkItemFormType = {
  type: typeof WorkExperienceSectionActionTypes.ToggleNewCompanyForm,
}

export type AddNewWorkItemType = {
  type: typeof WorkExperienceSectionActionTypes.AddNewCompany,
  payload: CreatedWorkItem,
}

export type WorkExperienceSectionActionType = ShowNewWorkItemFormType | AddNewWorkItemType;
