import React from 'react'
import withStyles from 'react-jss'
import classnames from 'classnames'

const styles = theme => ({
	drawer: {
		position: 'absolute',
		left: 0,
		height: props => props.height || '100vh',
		...theme.animation.slide('width'),
	},
	open: {
		width: props => props.width || '20vw',
	},
	closed: {
		width: props => props.closedWidth || '5vw'
	}
})

class NavDrawer extends React.Component {
	render() {
		const { classes, children, className, open } = this.props
		return (
			<div
				className={classnames(classes.drawer, className,
					open ? classes.open : classes.closed)}>
				{children}
			</div>
		)
	}
}

export default withStyles(styles)(NavDrawer)
