import Pill from './Pill/Pill';
import Palette from './palette/palette';

function App() {
  const arr = [
    { backgroundColor: '#E1F5FE', text: '50' },
    { backgroundColor: '#B3E5FC', text: '100' },
    { backgroundColor: '#81D4FA', text: '150' },
    { backgroundColor: '#4FC3F7', text: '200' },
    { backgroundColor: '#29B6F6', text: '250' },
    { backgroundColor: '#03A9F4', text: '300' },
    { backgroundColor: 'blue', text: '350' },
  ];

  return (
    <div className="App">
      {/* pill */}
      {/*
      <Pill backgroundColor="#F44336" text="XML" />
      <Pill backgroundColor="#FF9800" text="Javascript" />
      <Pill backgroundColor="#2196F3" text="UI" />
      */}
      {/*palette*/}
      {/*
      <Palette backgroundColor="white" text="light blue" />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {arr.map((v) => (
          <Palette {...v} />
        ))}
      </div>
      */}
      {/*Musinsa*/}
      
    </div>
  );
}

export default App;
