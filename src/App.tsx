import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import Index from './components/container/pages/Index';
import Post from './components/container/pages/Post';

function App(): JSX.Element {

  return (
    <Router>
      <Route
        render={({ location }) => (
          <AnimatePresence exitBeforeEnter initial={false}>
            <Switch location={location} key={location.pathname}>
              <Route exact path="/" component={Index} />
              <Route exact path="/post/:id" component={Post} />
            </Switch>
          </AnimatePresence>
        )}
      />
    </Router>
  );
}

export default App;
