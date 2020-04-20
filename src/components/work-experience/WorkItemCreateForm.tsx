import React, { Component } from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

export type CreatedWorkItem = { name: string, dateFrom: string };

type CreateFormProps = {
  onSubmit: (item: CreatedWorkItem) => void,
};

type WorkItemCreateFormProps = CreateFormProps & InjectedFormProps;

class WorkItemCreateForm extends Component<WorkItemCreateFormProps> {
  public render(): React.ReactNode {
    console.log(this.props.initialValues);

    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form" style={{ marginTop: '2em' }}>
        <div className="two fields">
          <div className="field required four wide">
            <label htmlFor="work-item-new-dateFrom">Since:</label>
            <Field name="dateFrom" id="work-item-new-dateFrom" component="input" type="text" placeholder="Since when"/>
          </div>
          <div className="field required twelve wide">
            <label htmlFor="work-item-new-name">Name:</label>
            <Field name="name" id="work-item-new-name" component="input" type="text" label="Name" placeholder="Company name"/>
          </div>
        </div>
        <div className="ui container center aligned">
          <input type="submit" value={"Add"} className="ui button primary"/>
        </div>
      </form>
    );
  }

  private onSubmit = (data: any) => {
    this.props.onSubmit({
      name: (data as CreatedWorkItem).name,
      dateFrom: (data as CreatedWorkItem).dateFrom,
    });
    this.props.reset();
  };
}

export default reduxForm({
  form: 'WorkExperienceItem',
})(WorkItemCreateForm as any);
