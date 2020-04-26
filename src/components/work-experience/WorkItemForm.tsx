import React, { Component } from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { WorkItem } from './WorkExperienceSection';
import { connect, ConnectedProps } from 'react-redux';
import { StoreState } from '../../store/reducers';

export type CreatedWorkItem = Omit<WorkItem, 'id'>

type CreateFormProps = {
  onNew: (item: CreatedWorkItem) => void,
  onEdited: (item: WorkItem) => void,
};

type StateProps = {
  formType: string | null,
};

const connector = connect<StateProps, {}, CreateFormProps, StoreState>((state: StoreState) => (
  {
    formType: state.workExperience.workItemForm,
  }
));

type WorkItemCreateFormProps = CreateFormProps & InjectedFormProps<CreatedWorkItem> & ConnectedProps<typeof connector>;

class WorkItemForm extends Component<WorkItemCreateFormProps> {
  public render(): React.ReactNode {
    const submitterValue = this.props.formType === 'new' ? 'Add' : 'Save';

    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form" style={{ marginTop: '2em' }}>
        <div className="two fields">
          <div className="field required four wide">
            <label htmlFor="work-item-new-dateFrom">Since:</label>
            <Field name="dateFrom" id="work-item-new-dateFrom" component="input" type="text" placeholder="Since when"/>
          </div>
          <div className="field required twelve wide">
            <label htmlFor="work-item-new-name">Name:</label>
            <Field name="name" id="work-item-new-name" component="input" type="text" label="Name"
                   placeholder="Company name"/>
          </div>
        </div>
        <div className="ui container center aligned">
          <input type="submit" value={submitterValue} className="ui button primary"/>
        </div>
      </form>
    );
  }

  private onSubmit = (data: WorkItem | CreatedWorkItem) => {
    if (this.props.formType === 'edit') {
      this.props.onEdited(data);
    } else {
      this.props.onNew({
        name: data.name,
        dateFrom: data.dateFrom,
      });
    }
    this.props.reset();
  };
}

export default connector(reduxForm({
  form: 'WorkExperienceItem',
})(WorkItemForm as any));
