import React from 'react'
import withStyles from 'react-jss'
import classnames from 'classnames'
import Button from './button'

// TODO: option to use heading tags (h1, h2, h3) instead of paragraph

const styles = theme => ({
	button: {
		color: (props) => {
			return theme.color.text.hasOwnProperty(props.color)
			? theme.color.text[props.color]
			: props.color
		},
		cursor: 'pointer',
		margin: '0',
		display: 'inline-block'
	}
})

class TextButton extends React.Component {
	render() {
		const { classes, children, className } = this.props
		const handleClick = this.props.onClick
		return (
			<p
				onClick={handleClick}
				className={classnames(classes.button, className)}>
				{children}
			</p>
		)
	}
}


export default withStyles(styles)(TextButton)
