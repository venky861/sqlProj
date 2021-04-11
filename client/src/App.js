import './App.css';
import Homepage from './components/Homepage'
import Title from './components/Title'
import Search from './components/Search'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

const App = () => {
  return (
	<Router>
		<Switch>
		<Route>
   			<div className="ml-3 mr-3">
			<Title />
			<Route path='/' exact component={Homepage} />
			<Route path='/fetchTable/:name?' exact component={Homepage} />
			</div>
		</Route>
		</Switch>
	</Router>
  );
}

export default App;
