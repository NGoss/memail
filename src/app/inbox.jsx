import React from 'react'
import withStyles from 'react-jss'

import BaseContext from './base-context'
import FoldersDrawer from './folders-drawer'
import Messages from './messages/'

const styles = theme => ({

})

class Inbox extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			drawerOpen: true,
			toggleDrawer: this.toggleDrawer.bind(this)
		}
	}
	toggleDrawer() {
		this.setState({drawerOpen: !this.state.drawerOpen})
	}
	render() {
		const { classes } = this.props
		return (
			<BaseContext.Provider value={this.state}>
				<FoldersDrawer />
				<Messages />
			</BaseContext.Provider>
		)
	}
}

export default withStyles(styles)(Inbox)
