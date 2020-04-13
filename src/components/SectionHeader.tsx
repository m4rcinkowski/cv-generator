import React from 'react';

export const Header = (props: { name: string }) => (
  <div className="ui header block clearing segment">
    <div className="ui right floated sub header">
      <i className="add tiny icon"/>
    </div>
    <div className="ui left floated header">
      {props.name}
    </div>
  </div>
);
