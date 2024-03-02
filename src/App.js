import React from 'react'; //import React Component
import './index.css'
// import { Routes, Route, Navigate, Link } from 'react-router-dom';

/*
function App(props) {
    return (
        <div>
        <header>
            <div>
            <h1></h1>
            </div>
        </header>
        
        <main>
            <div>
            </div>
        </main>

        <footer>
        </footer>
        </div>
    );
}
export default App;

*/

import SavedJobs from './savedJobs';
import Login from './login';

function App() {
    return (
      <div>
        <Login/>
        <SavedJobs />
      </div>
    );
  }
  
  export default App;