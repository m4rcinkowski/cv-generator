import React, { Component } from 'react';

export type CreatedWorkItem = { name: string, dateFrom: string };

type CreateFormProps = {
  onSubmit: (item: CreatedWorkItem) => void,
};

class WorkItemCreateForm extends Component<CreateFormProps> {
  state = {
    name: '',
    dateFrom: '',
  };

  private onNewWorkItem = (event: any) => {
    event.preventDefault();

    this.props.onSubmit({
      name: this.state.name,
      dateFrom: this.state.dateFrom,
    });
    this.setState({
      name: '',
      dateFrom: '',
    });
  };

  public render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    return (
      <form onSubmit={this.onNewWorkItem}>
        <div>
          <label htmlFor="create-work-item-name">Name:</label>
          <input onChange={(e) => this.setState({name: e.target.value})} id="create-work-item-name" placeholder="Company name" value={this.state.name} />
        </div>
        <div>
          <label htmlFor="create-work-item-from">Since:</label>
          <input onChange={(e) => this.setState({dateFrom: e.target.value})} id="create-work-item-from" placeholder="Since when you work(ed) there" value={this.state.dateFrom} />
        </div>
        <div>
          <input type="submit" value="Add" />
        </div>
      </form>
    );
  }
}

export default WorkItemCreateForm;
