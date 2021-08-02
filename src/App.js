import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Music from './components/Music';
import Menu from './Header/Menu';
import Track from './util/Track';

function App() {
  return (
     <BrowserRouter>
              <Menu/>
      
              <Switch>
                  <Route exact path="/" component={Music} />
                  <Route exact path="/music" component={Music} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/contact" component={Contact} />
                  <Route exact path="/track/:id" component={Track} />
              </Switch>
     </BrowserRouter>
  );
}

export default App;
