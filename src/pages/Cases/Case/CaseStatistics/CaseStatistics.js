import React from 'react';

//styles
import './styles.scss';

const CaseStatistics = ({getCurrentCase}) => {

  let statistics = getCurrentCase.map(item => item.statistics)
  let items;
  if(statistics.length > 0) {
    items = statistics[0].map(item => {
      return (
        <li key={item.number}>
          <p>{item.number}</p>
          <p> {item.title}</p>
        </li>
      )
    })
  }
  return (
    <section className="pb-150">
      <div className="wrapper">
          <ul className="case-statistics">
            { items }
          </ul>
      </div>
    </section>
  );
};

export default CaseStatistics;