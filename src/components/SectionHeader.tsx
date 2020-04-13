import React from 'react';

type HeaderProps = {
  name: string,
  onAddClicked: () => void,
};

export const Header = (props: HeaderProps) => (
  <div className="ui header block clearing segment">
    <div className="ui right floated sub header" onClick={props.onAddClicked} style={{ cursor: 'pointer' }}>
      <i className="add tiny icon"/>
    </div>
    <div className="ui left floated header">
      {props.name}
    </div>
  </div>
);
