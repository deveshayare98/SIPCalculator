import logo from './logo.svg';
import './App.css';
import Layout from './Layout/Layout';
import SipCalculatorPage from './Pages/SipCalculatorPage';

function App(props) {
  return (
    <div className="App">
      <Layout {...props}>
       <SipCalculatorPage/>
      </Layout>
    </div>
  );
}

export default App;
