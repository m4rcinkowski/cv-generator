import { WorkExperienceSectionActionType, WorkExperienceSectionActionTypes } from './types';
import { CreatedWorkItem } from '../../components/work-experience/WorkItemCreateForm';

export const addWorkItem = (values: CreatedWorkItem): WorkExperienceSectionActionType => ({
  type: WorkExperienceSectionActionTypes.AddNewItem,
  payload: values,
});

export const toggleNewWorkItemForm = (): WorkExperienceSectionActionType => ({
  type: WorkExperienceSectionActionTypes.ToggleNewItemForm,
});
