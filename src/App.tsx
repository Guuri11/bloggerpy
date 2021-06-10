import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import Index from './components/container/pages/Index';
import Login from './components/container/pages/Login';
import { useEffect, useState } from 'react';
import { UserContext } from './utils/hooks/UserContext';
import { UserInterface } from './utils/interfaces/user';

function App(): JSX.Element {

  const [user, setUser] = useState<UserInterface | null>(null)

  // Get loggued user
  useEffect(() => {
    if (localStorage.getItem('user')) {
      try {
        // Parsing localStorage value to object, as it needs a string, if localstorage.user is null, return empty string,
        // eatherway, as we can only pass a UserInterfacer | null, if the parse is empty, return null
        setUser(JSON.parse(localStorage.getItem('user') ?? "") ?? null);
      } catch (error) {
        setUser(null);
      }
    }
  }, [])

  return (
    <Router>
      <Route
        render={({ location }) => (
          <AnimatePresence exitBeforeEnter initial={false}>
            <Switch location={location} key={location.pathname}>
              <UserContext.Provider value={{ user, setUser }} >
                <Route exact path="/" component={Index} />
                <Route exact path="/login" component={Login} />
              </UserContext.Provider>
            </Switch>
          </AnimatePresence>
        )}
      />
    </Router>
  );
}

export default App;
