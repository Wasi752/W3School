import logo from './logo.svg';
import './App.css';
import Header from './Home/Header';
import Row1st from './Home/Row1st';
import Row2nd from './Home/Row2nd';
import Row3rd from './Home/Row3rd';
import Row4th from './Home/Row4th';
import Python from './Home/Python';
import SQL from './Home/SQL';
import Other from './Home/Other';

function App() {
  return (
    
      <div class="w-full h-full flex flex-col">
        <Header/>
        <Row1st/>
        <Row2nd/>
        <Row3rd/>
        <Row4th/>
        <Python/>
        <SQL/>
        <Other/>
      </div>
    
  );
}

export default App;