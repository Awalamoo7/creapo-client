import "./App.css";
import SignIn from "./pages/SignIn";
import { Route, Switch } from "react-router-dom";
import SignUp from "./pages/SignUp";

function App() {
	return (
		<div className="App">
			<SignIn />
			<Switch>
				<Route path="/signup" component={SignUp} />
			</Switch>
		</div>
	);
}

export default App;
