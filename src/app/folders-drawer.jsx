import React from 'react'
import withStyles from 'react-jss'

import BaseContext from './base-context'
import Drawer from '../library/nav-drawer'
import ChevronRotate from '../library/chevron-rotate'

const styles = theme => ({
	drawerContainer: {
		backgroundColor: theme.color.primary,
		height: '100vh',
		position: 'absolute',
		left: 0,
		top: 0
	},
	collapseBar: {
		color: theme.color.text.primary,
		fontSize: '32px',
		borderBottom: `0.5px solid ${theme.color.text.primary}`,
		textAlign: 'right'
	}
})

class FoldersDrawer extends React.Component {
	render() {
		const { classes } = this.props

		return (
			<BaseContext.Consumer>
				{({drawerOpen, toggleDrawer}) => (
					<Drawer className={classes.drawerContainer} open={drawerOpen}>
						<div className={classes.collapseBar}>
							<ChevronRotate onClick={toggleDrawer}
								color="primary" size={25}/>
						</div>
					</Drawer>
				)}
			</BaseContext.Consumer>
		)
	}
}

export default withStyles(styles)(FoldersDrawer)
