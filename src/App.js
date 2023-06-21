import { Route, Switch } from "react-router-dom";
import "./App.css";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/home";

function App() {
	return (
		<div className="App">
			<div className="content">
				<Switch>
					<Route path="/signIn" component={SignIn} />
					<Route path="/signUp" component={SignUp} />
					<Route path="/" component={Home} />
				</Switch>
			</div>
		</div>
	);
}

export default App;
