import { CreatedWorkItem } from '../../components/work-experience/WorkItemCreateForm';

export enum WorkExperienceSectionActionTypes {
  ToggleNewItemForm,
  AddNewItem,
}

export type ShowNewWorkItemFormType = {
  type: typeof WorkExperienceSectionActionTypes.ToggleNewItemForm,
}

export type AddNewWorkItemType = {
  type: typeof WorkExperienceSectionActionTypes.AddNewItem,
  payload: CreatedWorkItem,
}

export type WorkExperienceSectionActionType = ShowNewWorkItemFormType | AddNewWorkItemType;
