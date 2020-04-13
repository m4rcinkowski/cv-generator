import React from 'react';
import { WorkItem } from './WorkExperienceSection';

const SectionItem = (props: { item: WorkItem }) => {
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
        <i className="edit icon"/>
        <i className="delete icon"/>
      </div>
    </div>
  );
};

export default SectionItem;
