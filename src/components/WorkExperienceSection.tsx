import React from 'react';
import { Header } from './SectionHeader';
import WorkItemCreateForm, { CreatedWorkItem } from './WorkItemCreateForm';

type WorkSubsection = {
  type: 'note' | 'project',
  content: string,
  params: { [k: string]: string },
};

type WorkItem = {
  id: string | number,
  name: string,
  dateFrom: Date,
  dateTo?: Date,
  description?: string,
  subsections?: WorkSubsection[],
};

type WorkExperienceProps = typeof WorkExperienceSection.defaultProps & {};

type WorkExperienceState = {
  workItems: WorkItem[],
};

class WorkExperienceSection extends React.Component<WorkExperienceProps, WorkExperienceState> {
  static defaultProps = {
    workItems: [] as WorkItem[],
  };

  state = {
    workItems: [] as WorkItem[],
  };

  public render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    return (
      <div className="column">
        {this.renderSection()}
      </div>
    );
  }

  private onNewItem = (item: CreatedWorkItem) => {
    const workItems = [...this.state.workItems, {
      id: (Math.random() * 100).toFixed(0),
      name: item.name,
      dateFrom: new Date(item.dateFrom),
    }];

    workItems.sort((a, b) => b.dateFrom.getTime() - a.dateFrom.getTime());

    this.setState({ workItems });
  };

  private renderSection() {
    const renderItem = (item: WorkItem) => (
      <li key={`work-item-${item.id}`}>
        ({item.dateFrom.getFullYear()}{item.dateTo ? `-${item.dateTo.getFullYear()}` : ''})&nbsp;
        {item.name}
      </li>
    );

    let content = <ul>
      {this.state.workItems.map((item) => renderItem(item))}
    </ul>;

    if (!this.state.workItems.length) {
      content = <div className="ui center aligned padded text container" style={{ height: '4em' }}>
        Section is empty. You may add a new item now!
      </div>;
    }

    return <>
      <Header name="Work experience"/>
      {content}
      <WorkItemCreateForm onSubmit={this.onNewItem}/>
    </>;
  }
}

export default WorkExperienceSection;
