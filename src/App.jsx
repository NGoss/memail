import React from 'react'
import './App.css'
import withStyles from 'react-jss'
import Button from './library/button'

const styles = theme => ({
	buttonContainer: {
		display: 'block',
		margin: '20px auto'
	},
	button: {
		display: 'inline-block',
		backgroundColor: theme.color.primary,
		color: theme.color.text.primary,
		border: '1px solid ' + theme.color.text.primary,
		...theme.button
	},
	secondaryButton: {
		display: 'inline-block',
		margin: '20px',
		backgroundColor: theme.color.secondary,
		color: theme.color.text.secondary,
		border: '1px solid ' + theme.color.text.secondary,
		...theme.button
	}
})

class App extends React.Component {
	render() {
		const { classes } = this.props
		return (
			<div className="App">
				Hello world!
				<div className={classes.buttonContainer}>
					<Button color="primary">Click me</Button>
					<Button color="secondary">Actually nevermind...</Button>
				</div>
			</div>
		)
	}
}

export default withStyles(styles)(App)
