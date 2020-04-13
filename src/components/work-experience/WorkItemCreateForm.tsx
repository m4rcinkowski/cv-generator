import React, { Component, Dispatch } from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

export type CreatedWorkItem = { name: string, dateFrom: string };

type CreateFormProps = {
  // onSubmit: (item: CreatedWorkItem) => void,
};

export interface IDispatchProps {
  onSubmit: (data: CreatedWorkItem, dispatch: Dispatch<any>, props: CreateFormProps) => void;
}

type WorkItemCreateFormProps = CreateFormProps & IDispatchProps & InjectedFormProps;

class WorkItemCreateForm extends Component<WorkItemCreateFormProps> {
  private onSubmit = (data: {}) => {
    console.log(data);
    // this.props.onSubmit({
    //   name: (data as CreatedWorkItem).name,
    //   dateFrom: (data as CreatedWorkItem).dateFrom,
    // });
  };

  public render(): React.ReactNode {
    // @ts-ignore
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form" style={{ marginTop: '2em' }}>
        <div className="two fields">
          <div className="field required four wide">
            <label htmlFor="create-work-item-from">Since:</label>
            <input name="dateFrom" id="create-work-item-from"
                   placeholder="Since when you work(ed) there"/>
          </div>
          <div className="field required twelve wide">
            <Field name={"name"} component={() => (
              <input name={'name'} id="create-work-item-name"
                     placeholder="Company name"/>
            )} label={"Name"} />

          </div>
        </div>
        <div className="ui container center aligned">
          <input type="submit" value="Add" className="ui button primary"/>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: 'WorkExperienceItem',
})(WorkItemCreateForm as any);
