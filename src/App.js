import Navbar from './StaticComponents/Navbar';
import Home from './DynamicComponents/Home';
import Blog from './DynamicComponents/Blog';
import NcertSolutions from './DynamicComponents/NcertSolutions';
import RequestQuestion from './DynamicComponents/RequestQuestion';
import InterviewShorts from './DynamicComponents/InterviewShorts';
import InspiringStories from './DynamicComponents/InspiringStories';
import About from './DynamicComponents/About';
import Contact from './DynamicComponents/Contact';
import Footer from './StaticComponents/Footer';
import Neet from './NeetSolutions/Neet';
import Class11 from './NeetSolutions/Class11';
import Class12 from './NeetSolutions/Class12';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route exact path="/ncert-solutions">
              <NcertSolutions />
            </Route>
            <Route path="/request-question">
              <RequestQuestion />
            </Route>
            <Route path="/interview-shorts">
              <InterviewShorts />
            </Route>
            <Route path="/inspiring-stories">
              <InspiringStories />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/ncert-solutions/neet">
              <Neet />
            </Route>
            <Route path="/ncert-solutions/class12">
              <Class12 />
            </Route>
            <Route path="/ncert-solutions/class11">
              <Class11 />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
