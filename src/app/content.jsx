import React from 'react'
import withStyles from 'react-jss'
import classnames from 'classnames'

import Card from '../library/card'

import BaseContext from './base-context'

const styles = theme => ({
	container: {
		height: '100vh',
		width: props => props.drawerOpen ? 'Calc(40vw + 0.5px - 10px)' : 'Calc(55vw + 0.5px - 10px)',
		position: 'absolute',
		top: 0,
		left: props => props.drawerOpen ? '60vw' : '45vw',
		backgroundColor: theme.color.background,
		padding: 5,
		...theme.animation.slide('left'),
	},
	contents: {
		height: '100%',
		width: '100%',
		position: 'relative',
	}
})

class Content extends React.Component {
	render() {
		const { classes, className, message, ...props } = this.props

		return message && (
			<Card elevation={2} className={classnames(classes.container, className)}>
				<div className={classes.contents}>
					<h2>{message.subject}</h2>
					<hr />
					<h3>{message.from.name} ({message.from.email})</h3>
					<hr />
					<p>{message.content}</p>
				</div>
			</Card>
		)
	}
}

const StyledContent = withStyles(styles)(Content)

export default props => (
	<BaseContext.Consumer>
		{({drawerOpen, toggleDrawer, message}) => <StyledContent {...props} drawerOpen={drawerOpen} message={message} />}
	</BaseContext.Consumer>
)
