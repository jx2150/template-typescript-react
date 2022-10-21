import React from 'react';
import logo from './logo.svg';
import './App.css';
import LaunchList from './components/LaunchList';
import LaunchProfile from './components/LaunchProfile';

const App = () => {
  const [id, setId] = React.useState(42);
  const [sort, setSort] = React.useState('launch_year');
  const [order, setOrder] = React.useState('asc');
  const handleIdChange = React.useCallback(newId => {
    setId(newId);
  }, []);
  const handleSortChange = React.useCallback(sort => {
    setSort(sort);
  }, []);

  return (
    <div className="App">
      <LaunchList
        activeId={id}
        activeSort={sort}
        handleIdChange={handleIdChange}
        activeOrder={order}
      />
      <LaunchProfile id={id} />
    </div>
  );
};

export default App;
