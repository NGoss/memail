import React from 'react'
import withStyles from 'react-jss'

import Card from '../../library/card'

const styles = theme => ({
	container: {
		borderBottom: '0.5px solid ' + theme.color.border
	},
	timestamp: {
		width: '10%',
		height: '100%',
		display: 'inline-block',
		float: 'right',
		'& h6': {
			fontSize: '12px',
			opacity: 0.7,
			marginBottom: '10px'
		},
		'& p': {
			fontSize: '10px',
			opacity: 0.5
		}
	},
	from: {
		fontSize: '18px',
		'&:hover span': {
			display: 'inline-block',
			opacity: 0.5,
			fontSize: '16px'
		},
		'& span': {
			display: 'none'
		}
	},
	contentPreview: {
		height: '2em',
		whiteSpace: 'nowrap',
		overflow: 'hidden',
		marginTop: 0,
		'& p': {
			fontSize: '14px',
			opacity: 0.7,
			margin: 'auto 0'
		}
	}
})

class MessageCard extends React.Component {
	render() {
		const { classes, message } = this.props

		return (
			<Card className={classes.container}>
				<div className={classes.timestamp}>
					<h6>{message.date.day}</h6>
					<p>{message.date.date}, {message.date.month} {message.date.year}</p>
				</div>
				<div className={classes.header}>
					<div className={classes.from}>
						<h3>{message.from.name} <span>({message.from.email})</span></h3>
					</div>
					<div className={classes.subject}>
						<h4>{message.subject}</h4>
					</div>
				</div>
				<div className={classes.contentPreview}>
					<p>{message.content}</p>
				</div>
			</Card>
		)
	}
}

export default withStyles(styles)(MessageCard)
