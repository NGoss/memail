import React from 'react'
import withStyles from 'react-jss'
import classnames from 'classnames'

const styles = theme => ({
	card: {
		minHeight: '50px',
		position: 'relative',
		backgroundColor: theme.color.background,
		boxShadow: props => theme.shadow[props.elevation],
		zIndex: props => props.elevation,
		...theme.animation.raise
	}
})

class Card extends React.Component {
	render() {
		const { classes, children, className, ...props } = this.props

		return (
			<div className={classnames(classes.card, className)}
				{...props}>
				{children}
			</div>
		)
	}
}

export default withStyles(styles)(Card)
