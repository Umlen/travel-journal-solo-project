import Header from './components/Header';
import Place from './components/Place';
import placesData from './data';

const places = placesData.map( (place, key) => <Place key={key} place={place} /> );

function App() {
  return (
    <div className="container">
      <Header />
      <main className='main-content'>
        {places}
      </main>
    </div>
  );
}

export default App;
