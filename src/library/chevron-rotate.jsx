import React from 'react'
import withStyles from 'react-jss'
import classnames from 'classnames'
import ChevronIcon from '../images/chevron-left.svg'

const styles = theme => ({
	button: {
		height: props => props.size * 1.5,
		width: props => props.size * 1.5,
		cursor: 'pointer',
		display: 'inline-block',
		textAlign: 'center'
	},
	initial: {
		height: props => props.size,
		width: props => props.size * 0.5,
	},
	left: {
		height: props => props.size,
		width: props => props.size * 0.5,
		animation: 'rotate-back 150ms'
	},
	right: {
		height: props => props.size,
		width: props => props.size * 0.5,
		transform: 'rotate(180deg)',
		animation: 'rotate 150ms'
	},
	'@keyframes rotate': {
		from: {
			transform: 'rotate(360deg)'
		},
		to: {
			transform: 'rotate(180deg)'
		}
	},
	'@keyframes rotate-back': {
		from: {
			transform: 'rotate(180deg)'
		},
		to: {
			transform: 'rotate(360deg)'
		}
	}
})

class ChevronRotate extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			class: props.initialState || 'initial'
		}
	}
	render() {
		const { classes, className, onClick } = this.props

		return (
			<div onClick={() => {
				onClick()
				if (this.state.class === 'initial') {
					this.setState({class: 'right'})
				} else if (this.state.class === 'right') {
					this.setState({class: 'left'})
				} else {
					this.setState({class: 'right'})
				}
			}}
				className={classnames(className, classes.button)}>
				<img src={ChevronIcon}
					className={classes[this.state.class]}/>
			</div>
		)
	}
}

export default withStyles(styles)(ChevronRotate)
