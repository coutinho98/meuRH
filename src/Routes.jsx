import { Switch, Route } from "react-router-dom";

import Password from "./pages/Password";
import Home from "./pages/Home";
import Admin from "./pages/Admin";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/password" component={Password} />
      <Route path="/admin" component={Admin} />
    </Switch>
  );
}
