import React from 'react'
import withStyles from 'react-jss'
import Button from '../library/button'
import TextButton from '../library/text-button'
import Drawer from '../library/nav-drawer'
import ChevronRotate from '../library/chevron-rotate'
import Cards from './cards'
import DrawerContents from './drawer-contents'

const styles = theme => ({
	buttonContainer: {
		display: 'block',
		margin: '20px auto'
	},
	button: {
		margin: 'auto 10px'
	},
	cardContainer: {
		backgroundColor: '#cdcdcd',
		display: 'inline-block',
		padding: '10px'
	},
	card: {
		margin: '5px auto',
		backgroundColor: theme.color.background
	},
	drawer: {
		backgroundColor: theme.color.primary
	},
	drawerList: {
		margin: '0 auto',
		listStyle: 'none',
		color: theme.color.text.primary
	},
	collapseBar: {
		color: theme.color.text.primary,
		fontSize: '32px',
		borderBottom: `0.5px solid ${theme.color.text.primary}`,
		textAlign: 'right'
	}
})

class Demo extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			minElevation: 0,
			drawerOpen: true
		}
	}
	raiseButtons() {
		(this.state.minElevation === 0) ?
		this.setState({minElevation: 3}) :
		this.setState({minElevation: 0})
	}
	toggleDrawer() {
		this.setState({drawerOpen: !this.state.drawerOpen})
	}
	render() {
		const { classes } = this.props
		return (
			<div className="App">
				<Drawer className={classes.drawer} open={this.state.drawerOpen}>
					<div className={classes.collapseBar}>
						<ChevronRotate onClick={this.toggleDrawer.bind(this)} color="primary" size={25}/>
					</div>
					<DrawerContents/>
				</Drawer>
				Hello world!
				<Button color="primary" onClick={this.raiseButtons.bind(this)}
					className={classes.buttonContainer}>Raise Buttons</Button>
				<div className={classes.buttonContainer}>
					<Button className={classes.button}
						elevation={0 > this.state.minElevation ? 0 : this.state.minElevation}
						color="primary">Primary</Button>
					<Button className={classes.button}
						elevation={0 > this.state.minElevation ? 0 : this.state.minElevation}
						color="secondary">Secondary</Button>
				</div>
				<div className={classes.buttonContainer}>
					<Button className={classes.button}
						elevation={1 > this.state.minElevation ? 1 : this.state.minElevation}
						color="primary">Primary</Button>
					<Button className={classes.button}
						elevation={1 > this.state.minElevation ? 1 : this.state.minElevation}
						color="secondary">Secondary</Button>
				</div>
				<div className={classes.buttonContainer}>
					<Button className={classes.button}
						elevation={2 > this.state.minElevation ? 2 : this.state.minElevation}
						color="primary">Primary</Button>
					<Button className={classes.button}
						elevation={2 > this.state.minElevation ? 2 : this.state.minElevation}
						color="secondary">Secondary</Button>
				</div>
				<div className={classes.buttonContainer}>
					<Button className={classes.button}
						elevation={3 > this.state.minElevation ? 3 : this.state.minElevation}
						color="primary">Primary</Button>
					<Button className={classes.button}
						elevation={3 > this.state.minElevation ? 3 : this.state.minElevation}
						color="secondary">Secondary</Button>
				</div>
				<Cards />
			</div>
		)
	}
}

export default withStyles(styles)(Demo)
