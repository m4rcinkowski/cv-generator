import { WorkExperienceSectionActionType, WorkExperienceSectionActionTypes } from './types';
import { CreatedWorkItem } from '../../components/work-experience/WorkItemCreateForm';

export const addWorkItem = (item: CreatedWorkItem): WorkExperienceSectionActionType => ({
  type: WorkExperienceSectionActionTypes.AddNewCompany,
  payload: item,
});

export const toggleNewWorkItemForm = (): WorkExperienceSectionActionType => ({
  type: WorkExperienceSectionActionTypes.ToggleNewCompanyForm,
});
