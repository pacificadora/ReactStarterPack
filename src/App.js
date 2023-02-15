// import logo from './logo.svg';
import './App.css';
import { Greet } from './Components/Greet';
import { Welcome } from './Components/Welcome';
import { Hello } from './Components/Hello';
import { Message } from './Components/Message';

function App() {
  return (
    <div className="App">

      {/* function based Component */}
      {/* <Greet name="Tom Hiddleton">
        <p>This is the children</p>
      </Greet>
      <Greet name="Tom Holand"></Greet>
      <Greet name="Tom Hardy"></Greet>
      <Greet name="Tom Cruise"></Greet> */}

      {/* class Component */}
      {/* <Welcome name="Tom Hiddleton"></Welcome>
      <Welcome name="Tom Holand"></Welcome>
      <Welcome name="Tom Hardy"></Welcome>
      <Welcome name="Tom Cruise"></Welcome> */}

      {/* simple const variable */}
      {/* <Hello></Hello> */}

      {/* state based(not props) */}
      <Message> 
      </Message>
    </div>
  );
}

export default App;
