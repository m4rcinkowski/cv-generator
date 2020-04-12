import React from 'react';
import WorkExperienceSection from './WorkExperienceSection';

const App = () => {
  return (
    <div>
      <WorkExperienceSection workItems={[
        // {id: 1, name: 'Supersam', dateFrom: new Date('2014'), dateTo: new Date('2015')},
        // {id: 2, name: 'RST Software Masters', dateFrom: new Date('2015')},
        // {id: 3, name: 'Something next', dateFrom: new Date('2020')},
      ]} />
    </div>
  );
};

export default App;
