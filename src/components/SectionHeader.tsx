import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { toggleNewWorkItemForm } from '../store/work-experience';

const mapDispatch = { toggleNewWorkItemForm };
const connector = connect(null, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

type HeaderProps = PropsFromRedux & {
  name: string,
};

const SectionHeader = (props: HeaderProps) => (
  <div className="ui header block clearing segment">
    <div className="ui right floated sub header" onClick={props.toggleNewWorkItemForm} style={{ cursor: 'pointer' }}>
      <i className="remove tiny icon"/>
    </div>
    <div className="ui left floated header">
      {props.name}
    </div>
  </div>
);

export default connector(SectionHeader);
