import React from 'react'
import withStyles from 'react-jss'

import Card from '../../library/card'

const styles = theme => ({
	container: {
		borderBottom: '0.5px solid ' + theme.color.border,
		cursor: 'pointer',
		padding: '20px 40px',
		borderRight: props => props.selected ? '' : '0.5px solid ' + theme.color.border,
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
		fontSize: '16px',
		padding: '5px 0',
		'& h4': {
			display: 'inline-block',
			'&:hover span': {
				display: 'inline',
				opacity: 0.5,
				fontSize: '14px'
			},
		},
		'& span': {
			display: 'none'
		}
	},
	subject: {
		fontSize: '18px',
		padding: '5px 0',
	},
	contentPreview: {
		height: '2em',
		whiteSpace: 'nowrap',
		overflow: 'hidden',
		'& p': {
			fontSize: '14px',
			opacity: 0.7,
			paddingTop: 5,
			margin: 'auto 0'
		}
	}
})

class MessageCard extends React.Component {

	render() {
		const { classes, message, onClick, id, selected, ...props } = this.props

		return (
			<Card
				onClick={() => {onClick(id)}}
				elevation={selected ? 2 : 0}
				className={classes.container}
				{...props}>
				<div className={classes.timestamp}>
					<h6>{message.date.day}</h6>
					<p>{message.date.date}, {message.date.month} {message.date.year}</p>
				</div>
				<div className={classes.header}>
					<div className={classes.subject}>
						<h3>{message.subject}</h3>
					</div>
					<div className={classes.from}>
						<h4>{message.from.name} <span>({message.from.email})</span></h4>
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
