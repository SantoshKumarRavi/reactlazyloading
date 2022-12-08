import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Lazyload from "./Lazyload/Lazyload";
import Pagination from "./Pagination/Pagination"
import { DataProvider } from '../src/UseAuth/UseData'
function App() {
  return (
    // <DataProvider>

    <Router>
      <Routes>
          
          <Route
          path="/lazyload"
          element={
            <DataProvider>
            <Lazyload />
         </DataProvider>

          }
        />
           <Route
          path="/pagination"
          element={
            <DataProvider>
              <Pagination />
           </DataProvider>

          }
        />
  
      </Routes>
    </Router>

  );
}

export default App;
