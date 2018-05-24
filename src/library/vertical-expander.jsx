import React from 'react'
import withStyles from 'react-jss'

import TextButton from './text-button'

const defaults = {
	height: '30px',
	xContentHeight: '300px'
}

const styles = theme => ({
	container: {
		width: '100%',
		margin: 'auto 0',
		borderBottom: '0.5px solid ' + theme.color.text.primary,
		padding: theme.spacing,
	},
	titleCard: {
		fontSize: 24,
		display: 'block',
		'&:hover': {
			color: theme.color.text.primaryHighlight
		}
	},
	cTitleCard: {
		height: props => props.height || defaults.height
	},
	xTitleCard: {
		height: 24
	},
	xContents: {
		height: props => `Calc(${props.expandedHeight || defaults.xContentHeight} - 1em)`,
		width: '90%',
		paddingTop: '5%',
		overflowY: 'auto',
		...theme.animation.slide('height')
	},
	cContents: {
		height: 0,
		width: '90%',
		overflowY: 'hidden',
		...theme.animation.slide('height')
	}
})

class VerticalExpander extends React.Component {
	render() {
		const { className, classes, children, height,
			expandedHeight, title, expanded, onClick} = this.props

		return (
			<div className={`${className} ${classes.container}`}>
				<div className={`${classes.titleCard} ${expanded ? classes.xTitleCard : classes.cTitleCard}`}>
					<TextButton onClick={onClick}>{title}</TextButton>
				</div>
				<div className={expanded ? classes.xContents : classes.cContents}>
					{children}
				</div>
			</div>
		)
	}
}

export default withStyles(styles)(VerticalExpander)
