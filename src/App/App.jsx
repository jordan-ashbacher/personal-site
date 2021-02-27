import logo from '../logo.svg';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom'
import Home from '../Home/Home'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Work from '../Work/Work'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({

})


function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
    <div className="App">
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
      <Route exact path="/work">
        <Work />
      </Route>
    </div>
    </Router>
    </ThemeProvider>
  );
}

export default App;
