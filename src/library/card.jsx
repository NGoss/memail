import React from 'react'
import withStyles from 'react-jss'
import classnames from 'classnames'

const styles = theme => ({
	card: {
		minHeight: '50px',
		padding: '20px 40px',
		boxShadow: props => theme.shadow[props.elevation],
		cursor: 'pointer',
		backgroundColor: theme.color.background
	}
})

class Card extends React.Component {
	render() {
		const { classes, children, className } = this.props

		return (
			<div
				className={classnames(classes.card, className)}>
				{children}
			</div>
		)
	}
}

export default withStyles(styles)(Card)
