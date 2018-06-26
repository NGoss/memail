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
	},
})

class Messages extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			currentCard: 0,
			messages: [
				{
					id: 1,
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
					content: paragraph(20)
				},
				{
					id: 2,
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
					subject: 'Office Party',
					content: paragraph(20)
				},
				{
					id: 3,
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
					subject: 'RE: Memail is the best!',
					content: paragraph(20)
				}
			]
		}

		this.handleCardClick = this.handleCardClick.bind(this)
	}

	handleCardClick(id) {
		this.setState({
			currentCard: id
		})
		this.props.setCurrentMessage(this.state.messages.find(message => message.id === id))
	}

	render() {
		const { classes } = this.props

		return (
			<div className={classes.container}>
				{
					this.state.messages.map(message => <MessageCard key={message.id} selected={this.state.currentCard === message.id} id={message.id} onClick={this.handleCardClick} message={message}/>)
				}
			</div>
		)
	}
}

const StyledMessages = withStyles(styles)(Messages)

export default props => (
	<BaseContext.Consumer>
		{({drawerOpen, toggleDrawer, setCurrentMessage}) => <StyledMessages {...props} drawerOpen={drawerOpen} setCurrentMessage={setCurrentMessage} />}
	</BaseContext.Consumer>
)
