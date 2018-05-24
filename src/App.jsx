import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Demo from './demo/'
import Inbox from './app/inbox'

class App extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<Route exact path="/" component={Demo}/>
					<Route path="/inbox" component={Inbox}/>
				</div>
			</Router>
		)
	}
}

export default App
