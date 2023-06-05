// import './App.css';
// import Home from './components/Home';
// import React from 'react';

// import { Routes, Route} from 'react-router-dom';
// import Login from './components/Login';
// import Signup from './components/Signup';
// import Seller from './components/Seller';

// function App() {
//   return (
//     <>
//       <Home />
//     <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login  /> }/>
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/seller">
//             <Route path="" element={<Seller />} />
//         </Route>     
//         <Route path="*" element={<h3>Page Not Found</h3>} />
//       </Routes>
      
//     </>
//   );
// }

// export default App;
import './App.css';
import React from 'react';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Seller from './components/Seller';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/seller" element={<Seller />} />
        <Route path="*" element={<h3>Page Not Found</h3>} />
      </Routes>
    </div>
  );
}

export default App;
