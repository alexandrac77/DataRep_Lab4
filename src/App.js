import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { Header } from './components/header'; //import header
import { Footer } from './components/footer';
import { Content } from './components/content';
import 'bootstrap/dist/css/bootstrap.min.css'; //import bootstrap library
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Create } from './components/create';
import { Read } from './components/read';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          {/* navigation bar*/}
          <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">read</Nav.Link>
              <Nav.Link href="/create">create</Nav.Link>
            </Nav>
          </Navbar>

          <br />
          <Switch>
            <Route path='/' component={Content} exact />
            <Route path='/create' component={Create} exact />
            <Route path='/read' component={Read} exact />
          </Switch>

      {/* insert header component
      <Header></Header>

      <Content></Content>

      insert footer component
      <Footer></Footer> 
      */}

        </div>
      </Router>
    );
  }//render
}

export default App;
