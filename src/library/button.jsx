import React from 'react'
import withStyles from 'react-jss'

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
		border: props => `1px solid ${
			theme.color.text.hasOwnProperty(props.color)
			? theme.color.text[props.color]
			: props.color
		}`,
		...theme.button
	}
})

class Button extends React.Component {
	render() {
		const { classes, children } = this.props
		const handleClick = this.props.onClick
		return (
			<button
				onClick={handleClick}
				className={classes.button}>
				{children}
			</button>
		)
	}
}

export default withStyles(styles)(Button)
