import './App.css';
import { HobbyList } from './extremeHobbies';
import { Guarantee } from './perfectCustomerService';
import * as url from './assets/exercises/chat.png';
import { Counter } from './itsHigherThan10';

function App() {
  return (
    <div className="App">
      <HobbyList />
      <hr />
      <Guarantee src={url.default} title='Online Support' description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita iusto inventore, ea tenetur quo rerum ab minus in excepturi minima, tempora dolorem nemo nihil maiores sapiente distinctio suscipit. Distinctio, ipsum!' />
      <Guarantee src={url.default} title='Free Shipping' description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum sequi minima fugit dolor, omnis, dolorem in corrupti voluptatibus est nihil reprehenderit veritatis? Quibusdam rem mollitia quae tempore impedit, vel facere!' />
      <Guarantee src={url.default} title='100% Money Back' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolores blanditiis eaque hic impedit rem, illo consequuntur repellendus corporis fugit modi enim maiores veritatis, harum voluptatem ut a, recusandae non!' />
      <hr />
      <Counter />
    </div>
  );
}

export default App;


