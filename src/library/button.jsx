import React from 'react'
import withStyles from 'react-jss'
import classnames from 'classnames'

const styles = theme => ({
	button: {
		backgroundColor: (props) => {
			return theme.color.hasOwnProperty(props.color)
			? theme.color[props.color]
			: props.backgroundColor
		},
		color: (props) => {
			return theme.color.text.hasOwnProperty(props.color)
			? theme.color.text[props.color]
			: props.color
		},
		border: props => props.color === 'secondary' ?
			`1px solid ${theme.color.text.secondary}` :
			'none',
		boxShadow: (props) => {
			return theme.shadow[props.elevation]
		},
		...theme.animation.raise,
		...theme.button
	}
})

class Button extends React.Component {
	render() {
		const { classes, children, className } = this.props
		const handleClick = this.props.onClick
		return (
			<button
				onClick={handleClick}
				className={classnames(classes.button, className)}>
				{children}
			</button>
		)
	}
}

export default withStyles(styles)(Button)
