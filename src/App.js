import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from './components/Auth/Signin';
import Signup from './components/Auth/Signup';

import Dashboard from './components/Dashboard/dashboard';

const App = () => {
return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/signin"
            element={ <Signin />}
          />
          <Route
            path="/signup"
            element={ <Signup />}
          />
          <Route
            path="/dashboard"
            element={<Dashboard  />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;