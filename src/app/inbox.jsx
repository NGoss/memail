import React from 'react'
import withStyles from 'react-jss'

import BaseContext from './base-context'
import FoldersDrawer from './folders-drawer'
import Messages from './messages/'
import Content from './content'

const styles = theme => ({

})

class Inbox extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			drawerOpen: true,
			message: null,
			toggleDrawer: this.toggleDrawer.bind(this),
			setCurrentMessage: this.setCurrentMessage.bind(this)
		}
	}
	toggleDrawer() {
		this.setState({drawerOpen: !this.state.drawerOpen})
	}
	setCurrentMessage(message) {
		this.setState({message})
	}
	render() {
		const { classes } = this.props
		return (
			<BaseContext.Provider value={this.state}>
				<FoldersDrawer />
				<Messages />
				<Content />
			</BaseContext.Provider>
		)
	}
}

export default withStyles(styles)(Inbox)
