import React, { Component, ReactNode } from 'react';
import { SectionHeader } from '..';
import WorkItemCreateForm, { CreatedWorkItem } from './WorkItemCreateForm';
import SectionItem from './SectionItem';
import { connect, ConnectedProps } from 'react-redux';
import { StoreState } from '../../store/reducers';
import { addWorkItem } from '../../store/work-experience';

export type WorkSubsection = {
  type: 'note' | 'project',
  content: string,
  params: { [k: string]: string },
};

export type WorkItemId = string | number;

export type WorkItem = {
  id?: WorkItemId,
  name: string,
  dateFrom: Date,
  dateTo?: Date,
  description?: string,
  subsections?: WorkSubsection[],
};

const mapState = (state: StoreState) => {
  return {
    showCreationForm: state.workExperience.showNewItemForm,
    workItems: state.workExperience.workItems,
  };
};

const connector = connect(mapState, { addWorkItem });

type WorkExperienceProps = ConnectedProps<typeof connector>;

class WorkExperienceSection extends Component<WorkExperienceProps> {
  public static sortItems(workItems: WorkItem[]): WorkItem[] {
    return workItems.sort((a, b) => b.dateFrom.getTime() - a.dateFrom.getTime());
  }

  public render(): ReactNode {
    return (
      <div className="column">
        {this.renderSection()}
      </div>
    );
  }

  private onNewItem = (item: {}) => {
    this.props.addWorkItem({
      name: (item as CreatedWorkItem).name,
      dateFrom: (item as CreatedWorkItem).dateFrom,
    });
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
      <SectionHeader name="Work experience" stateKey="workExperience"/>
      {content}
      {this.props.showCreationForm && <WorkItemCreateForm onSubmit={this.onNewItem}/>}
    </>;
  }
}

export default connector(WorkExperienceSection);
