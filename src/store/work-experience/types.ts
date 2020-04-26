import { CreatedWorkItem } from '../../components/work-experience/WorkItemForm';
import { WorkItem } from '../../components/work-experience/WorkExperienceSection';

export enum WorkExperienceSectionActionTypes {
  ToggleNewCompanyForm = 'WORK/TOGGLE_NEW_COMPANY_FORM',
  OpenNewCompanyForm = 'WORK/OPEN_NEW_COMPANY_FORM',
  AddNewCompany = 'WORK/NEW_COMPANY_ADDED',
  EditCompany = 'WORK/EDIT_COMPANY',
}

export type ShowNewWorkItemFormType = {
  type: typeof WorkExperienceSectionActionTypes.ToggleNewCompanyForm | typeof WorkExperienceSectionActionTypes.OpenNewCompanyForm,
}

export type AddNewWorkItemType = {
  type: typeof WorkExperienceSectionActionTypes.AddNewCompany,
  payload: CreatedWorkItem,
}

export type EditWorkItemType = {
  type: typeof WorkExperienceSectionActionTypes.EditCompany,
  payload: WorkItem,
}

export type WorkExperienceSectionActionType =
  ShowNewWorkItemFormType
  | AddNewWorkItemType
  | EditWorkItemType;
