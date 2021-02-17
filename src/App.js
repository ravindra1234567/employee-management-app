import './App.css';
// import SignUp from './components/SignUp'
import DataTable from './components/DataTable'
import Navbar from './components/Navbar'
import DataGrid from './components/DataGrid'
import SignUp from "./components/SignUp"
import Home from "./components/Home"
function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <DataGrid /> */}
      {/* <DataTable /> */}
      <Home />
      {/* <SignUp/> */}
    </div>
  );
}

export default App;
