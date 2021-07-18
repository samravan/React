import logo from './logo.svg';
import './App.css';
// import HobbyList from './HobbyList';
// import Guarantee from './Guarantee';
// import image1 from './exercises/chat.png';
// import image2 from './exercises/coin.png';
// import image3 from './exercises/f-delivery.png'
import Counter from './Counter'


function App() {
  return (
    <div className="App">
      <header className="App-header">
          {/* <Guarantee  src={image1}  title="Free shipping" description="Here we are trying to answer your questions" />
          <Guarantee src={image2} title="100% Money back" description="Refund is guaranteed!" />
          <Guarantee  src={image3} title="Online support 24/7" description="We are there for you anytime you want." /> */}
          <Counter />
      </header>

    </div>
  );
}

export default App;
