import React from 'react';
import { Header } from '../SectionHeader';
import WorkItemCreateForm, { CreatedWorkItem } from './WorkItemCreateForm';
import SectionItem from './SectionItem';

export type WorkSubsection = {
  type: 'note' | 'project',
  content: string,
  params: { [k: string]: string },
};

export type WorkItem = {
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


  constructor(props: Readonly<WorkExperienceProps>) {
    super(props);
    this.state = { workItems: WorkExperienceSection.sortItems(props.workItems) };
  }

  public render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    return (
      <div className="column">
        {this.renderSection()}
      </div>
    );
  }

  private onNewItem = (item: CreatedWorkItem) => {
    let workItems = [...this.state.workItems, {
      id: (Math.random() * 100).toFixed(0),
      name: item.name,
      dateFrom: new Date(item.dateFrom),
    }];

    workItems = WorkExperienceSection.sortItems(workItems);

    this.setState({ workItems });
  };

  private static sortItems(workItems: WorkItem[]): WorkItem[] {
    return workItems.sort((a, b) => b.dateFrom.getTime() - a.dateFrom.getTime());
  }

  private renderSection() {
    let content;

    if (!this.state.workItems.length) {
      content = <div className="ui center aligned padded text container" style={{ height: '4em' }}>
        Section is empty. You may add a new item now!
      </div>;
    } else {
      content = <div className="ui padded grid">
        {this.state.workItems.map((item) => <SectionItem key={item.id} item={item}/>)}
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
