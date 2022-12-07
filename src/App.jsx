import "./App.css";
import Header from "./SnapShot/Component/Header";
import Item from "./SnapShot/Component/Item";
import { Routes, Route } from 'react-router-dom' 
import ItemSearch from "./SnapShot/Component/ItemSearch";

function App() {
  
  return <div className="container mx-auto max-w-5xl">

      <Header/>
      <Routes> 
        <Route 
        path="/mountain"
        element={<Item searchTerm='mountain'/>}
        />
        <Route 
        path="/beach"
        element={<Item searchTerm='beach'/>}
        />
        <Route 
        path="/bird"
        element={<Item searchTerm='bird'/>}
        />
        <Route 
        path="/food"
        element={<Item searchTerm='food'/>}
        />
        <Route 
          path="/search/:key"
          element={<ItemSearch searchTerm=''/>}
        />
      </Routes>
      
      
  </div>;
}

export default App;
