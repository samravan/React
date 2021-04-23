import { useContext } from 'react';
import Search from './components/Search'
import Box from './components/Box'
import { AppContext } from './components/AppContext'
import './App.css';

function App() {
  const { datas } = useContext(AppContext);

  return (
    <>
      <h1 className='heading'>Weather</h1>
      <Search />
      <div>
        {datas.map((data, index) =>
          <Box
            key={index}
            data={data}
          />
        )}
      </div>
    </>
  )
}

export default App;