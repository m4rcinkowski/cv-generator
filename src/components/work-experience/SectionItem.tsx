import React from 'react';
import { WorkItem } from './WorkExperienceSection';
import { connect, ConnectedProps } from 'react-redux';
import { initialize } from 'redux-form';
import { openNewWorkItemForm } from '../../store/work-experience';

type Props = { item: WorkItem };

const connector = connect(null, { fillForm: initialize, openNewWorkItemForm });

const SectionItem = (props: Props & ConnectedProps<typeof connector>) => {
  const item = props.item;
  return (
    <div className="row">
      <div className="right aligned three wide column">
        <div className={`ui statistic ${item.dateTo ? 'tiny' : 'medium'}`}>
          <div className="value">
            {item.dateFrom.getFullYear()}{item.dateTo ? `-${item.dateTo.getFullYear()}` : ''}
          </div>
          <div className="label"/>
        </div>
      </div>
      <div className="eleven wide column">
        <h3>{item.name}</h3>
      </div>
      <div className="right aligned two wide column">
        <i className="edit icon" onClick={() => {
          props.fillForm('WorkExperienceItem', item);
          props.openNewWorkItemForm();
        }}/>
        <i className="delete icon"/>
      </div>
    </div>
  );
};

export default connector(SectionItem);
