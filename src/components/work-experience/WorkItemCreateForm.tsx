import React, { Component } from 'react';

export type CreatedWorkItem = { name: string, dateFrom: string };

type CreateFormProps = {
  onSubmit: (item: CreatedWorkItem) => void,
};

class WorkItemCreateForm extends Component<CreateFormProps> {
  private readonly formRef: React.RefObject<HTMLFormElement>;

  constructor(props: Readonly<CreateFormProps>) {
    super(props);

    this.formRef = React.createRef();
  }

  private onNewWorkItem: React.FormEventHandler = (event) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      name: { value: string },
      dateFrom: { value: string },
    };

    this.props.onSubmit({
      name: target.name.value,
      dateFrom: target.dateFrom.value,
    });
    this.formRef.current?.reset();
  };

  public render(): React.ReactNode {
    return (
      <form ref={this.formRef} onSubmit={this.onNewWorkItem} className="ui form" style={{ marginTop: '2em' }}>
        <div className="two fields">
          <div className="field required four wide">
            <label htmlFor="create-work-item-from">Since:</label>
            <input name="dateFrom" id="create-work-item-from"
                   placeholder="Since when you work(ed) there"/>
          </div>
          <div className="field required twelve wide">
            <label htmlFor="create-work-item-name">Name:</label>
            <input name={'name'} id="create-work-item-name"
                   placeholder="Company name"/>
          </div>
        </div>
        <div className="ui container center aligned">
          <input type="submit" value="Add" className="ui button primary"/>
        </div>
      </form>
    );
  }
}

export default WorkItemCreateForm;
