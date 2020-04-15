import React, { ReactNode } from 'react';
import { SectionHeader } from '..';
import WorkItemCreateForm, { CreatedWorkItem } from './WorkItemCreateForm';
import SectionItem from './SectionItem';
import { connect } from 'react-redux';
import { StoreState } from '../../store/reducers';

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

const mapState = (state: StoreState) => {
  return {
    showCreationForm: state.workExperience.showNewItemForm,
  };
};

class WorkExperienceSection extends React.Component<WorkExperienceProps> {
  static defaultProps = {
    workItems: [] as WorkItem[],
    showCreationForm: false,
  };

  constructor(props: Readonly<WorkExperienceProps>) {
    super(props);
    console.log(`section constructor props`, props);
  }

  private static sortItems(workItems: WorkItem[]): WorkItem[] {
    return workItems.sort((a, b) => b.dateFrom.getTime() - a.dateFrom.getTime());
  }

  public render(): React.ReactNode {
    return (
      <div className="column">
        {this.renderSection()}
      </div>
    );
  }

  private onNewItem = (item: {}) => {
    let workItems = [...this.props.workItems, {
      id: (Math.random() * 100).toFixed(0),
      name: (item as CreatedWorkItem).name,
      dateFrom: new Date((item as CreatedWorkItem).dateFrom),
    }];

    workItems = WorkExperienceSection.sortItems(workItems);

    this.setState({ workItems });
  };

  private renderSection() {
    let content: ReactNode;

    if (!this.props.workItems.length) {
      content = <div className="ui center aligned padded text container" style={{ height: '4em' }}>
        Section is empty. You may add a new item now!
      </div>;
    } else {
      content = <div className="ui padded grid">
        {this.props.workItems.map((item) => <SectionItem key={item.id} item={item}/>)}
      </div>;
    }

    return <>
      <SectionHeader name="Work experience"/>
      {content}
      {this.props.showCreationForm && <WorkItemCreateForm onSubmit={this.onNewItem}/>}
    </>;
  }
}

export default connect(mapState)(WorkExperienceSection);
