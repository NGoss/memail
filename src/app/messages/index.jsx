import React from 'react'
import withStyles from 'react-jss'

import BaseContext from '../base-context'

import MessageCard from './message-card'

import { paragraph } from './test'

const styles = theme => ({
	container: {
		height: '100vh',
		width: '40vw',
		position: 'absolute',
		top: 0,
		left: props => props.drawerOpen ? '20vw' : '5vw',
		backgroundColor: theme.color.text.primary,
		...theme.animation.slide('left'),
		borderRight: '0.5px solid ' + theme.color.border
	},
})

class Messages extends React.Component {
	constructor(props) {
		super(props)

		this.state = {messages: [
			{
				from: {
					name: 'Nate G',
					email: 'nate@mail.foinse.io'
				},
				date: {
					day: 'Thur',
					date: '17',
					month: 'May',
					year: '2018'
				},
				subject: 'Memail',
				content: paragraph(5)
			},
			{
				from: {
					name: 'Nate G',
					email: 'nate@mail.foinse.io'
				},
				date: {
					day: 'Thur',
					date: '17',
					month: 'May',
					year: '2018'
				},
				subject: 'Memail',
				content: paragraph(5)
			},
			{
				from: {
					name: 'Nate G',
					email: 'nate@mail.foinse.io'
				},
				date: {
					day: 'Thur',
					date: '17',
					month: 'May',
					year: '2018'
				},
				subject: 'Memail',
				content: paragraph(5)
			}
		]}
	}
	render() {
		const { classes } = this.props

		return (
			<div className={classes.container}>
				{
					this.state.messages.map(message => <MessageCard message={message}/>)
				}
			</div>
		)
	}
}

const StyledMessages = withStyles(styles)(Messages)

withStyles(styles)()

export default props => (
	<BaseContext.Consumer>
		{({drawerOpen, toggleDrawer}) => <StyledMessages {...props} drawerOpen={drawerOpen} />}
	</BaseContext.Consumer>
)
