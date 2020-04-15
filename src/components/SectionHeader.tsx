import React from 'react';
import { connect, ConnectedProps, useSelector } from 'react-redux';
import { toggleNewWorkItemForm } from '../store/work-experience';
import { StoreState } from '../store/reducers';

const mapDispatch = { toggleNewWorkItemForm };
const connector = connect(null, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

type HeaderProps = PropsFromRedux & {
  name: string,
  stateKey: string,
};

const SectionHeader = (props: HeaderProps) => {
  const isCurrentlyShown = useSelector((state: StoreState) => state[props.stateKey].showNewItemForm);

  return <div className="ui header block clearing segment">
    <div className="ui right floated sub header" onClick={props.toggleNewWorkItemForm} style={{ cursor: 'pointer' }}>
      <i className={`${isCurrentlyShown ? 'minus' : 'plus'} tiny icon`}/>
    </div>
    <div className="ui left floated header">
      {props.name}
    </div>
  </div>;
};

export default connector(SectionHeader);
