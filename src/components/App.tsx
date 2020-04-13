import React from 'react';
import WorkExperienceSection from './work-experience/WorkExperienceSection';

const App = () => {
  return (
    <div className="ui middle aligned grid container" style={{ height: '100vh' }}>
      <WorkExperienceSection workItems={[
        {id: 1, name: 'Nasza Klasa', dateFrom: new Date('2009'), dateTo: new Date('2014')},
        {id: 2, name: 'Supersam', dateFrom: new Date('2014'), dateTo: new Date('2015')},
        {id: 3, name: 'RST Software Masters', dateFrom: new Date('2015')},
        {id: 4, name: 'Something next', dateFrom: new Date('2020')},
      ]}/>
    </div>
  );
};

export default App;
