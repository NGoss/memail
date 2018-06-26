import React from 'react'
import withStyles from 'react-jss'
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
import Card from '../library/card'

const styles = theme => ({
	cardContainer: {
		backgroundColor: '#cdcdcd',
		display: 'inline-block',
		padding: '10px'
	},
	card: {
		cursor: 'pointer',
		margin: '5px auto',
		padding: '10px',
		borderRadius: '5px',
		backgroundColor: theme.color.background
	},
	activeCard: {
		boxShadow: theme.shadow[3]
	}
})

class Cards extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			cards: [1, 2, 3]
		}
	}
	onSortEnd = ({oldIndex, newIndex}) => {
		this.setState({cards: arrayMove(this.state.cards, oldIndex, newIndex)})
	}
	render() {
		const SortableItem = SortableElement(({value}) =>
				<Card className={classes.card} elevation={1}>
					<h2>Here's a card with some content!</h2>
				</Card>);

		const SortableList = SortableContainer(({items}) => {
			return (
				<div className={classes.cardContainer}>
					{items.map((value, index) => (
						<SortableItem key={`item-${index}`} index={index} value={value} />
					))}
				</div>
			);
		});
		const { classes } = this.props
		return (
			<SortableList
				lockAxis="y"
				helperClass={classes.activeCard}
				items={this.state.cards}
				getHelperDimensions={({node}) => ({
					width: node.offsetWidth + 1,
					height: node.offsetHeight + 1,
				})}
				lockToContainerEdges={true}
				onSortEnd={this.onSortEnd} />
		)
	}
}

export default withStyles(styles)(Cards)
