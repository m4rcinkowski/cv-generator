import { WorkExperienceSectionActionType, WorkExperienceSectionActionTypes } from './types';
import { CreatedWorkItem } from '../../components/work-experience/WorkItemCreateForm';
import { WorkItem } from '../../components/work-experience/WorkExperienceSection';

export const addWorkItem = (item: CreatedWorkItem): WorkExperienceSectionActionType => ({
  type: WorkExperienceSectionActionTypes.AddNewCompany,
  payload: item,
});

export const editWorkItem = (item: WorkItem): WorkExperienceSectionActionType => ({
  type: WorkExperienceSectionActionTypes.EditCompany,
  payload: item,
});

export const toggleNewWorkItemForm = (): WorkExperienceSectionActionType => ({
  type: WorkExperienceSectionActionTypes.ToggleNewCompanyForm,
});

export const openNewWorkItemForm = (): WorkExperienceSectionActionType => ({
  type: WorkExperienceSectionActionTypes.OpenNewCompanyForm,
});
