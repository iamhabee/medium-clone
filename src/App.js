import Topbar from "./components/Topbar";
import Mainbar  from './components/Mainbar'
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div >
      <Topbar />
      <div className="container-fluid d-flex">
        <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white" style={{width: "30%"}}>
          <Sidebar />
        </div>
        <Mainbar />
      </div>
    </div>
  );
}

export default App;
