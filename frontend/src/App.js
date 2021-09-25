import './App.css';

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";


import Header from './Components/Header';
import NoteListPage from './Pages/NoteListPage';
import NotePage from './Pages/NotePage';

function App() {
  return (
    <Router>

      <div className="container dark">
        <div className="app">
          <Header />
          <Route path="/" exact component={NoteListPage}/>
          <Route path="/notes/:id" component={NotePage} />
        </div>

      </div>

    </Router>
  );
}

export default App;
