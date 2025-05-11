import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import AudienceBuilder from "./pages/AudienceBuilder";
import CampaignHistory from "./pages/CampaignHistory";
import AuthBar from "./components/AuthBar";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <div className="App">
        <h1>Xeno CRM</h1>
        <AuthBar />

        <Switch>
          <Route exact path="/">
            {user ? <AudienceBuilder /> : <Redirect to="/login" />}
          </Route>

          <Route path="/history">
            {user ? <CampaignHistory /> : <Redirect to="/login" />}
          </Route>

          <Route path="/login">
            <p>Please login to continue.</p>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
