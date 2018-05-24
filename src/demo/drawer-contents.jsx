import React from 'react'
import withStyles from 'react-jss'
import Button from '../library/button'
import TextButton from '../library/text-button'
import VerticalExpander from '../library/vertical-expander'
import sizeMe from 'react-sizeme'

const styles = theme => ({
	drawerList: {
		textAlign: 'left',
		listStyle: 'none',
		color: theme.color.text.primary,
	},
	listItem: {
		fontSize: 24,
		padding: '10px 0',
		display: 'block',
		'&:hover': {
			color: theme.color.text.primaryHighlight
		}
	}
})

class DrawerContents extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			openDrawer: 0
		}
	}
	render() {
		const { classes, size } = this.props
		const expandedContents = () => {
			return (
				<div>
					<VerticalExpander
						title="Option 1"
						className={classes.drawerList}
						expanded={this.state.openDrawer === 1}
						onClick={() => {this.setState({openDrawer: 1})}}>
						<TextButton className={classes.listItem}>Option 1.1</TextButton>
						<TextButton className={classes.listItem}>Option 1.2</TextButton>
						<TextButton className={classes.listItem}>Option 1.3</TextButton>
						<TextButton className={classes.listItem}>Option 1.4</TextButton>
						<TextButton className={classes.listItem}>Option 1.5</TextButton>
					</VerticalExpander>
					<VerticalExpander
						title="Option 2"
						className={classes.drawerList}
						expanded={this.state.openDrawer === 2}
						onClick={() => {this.setState({openDrawer: 2})}}>
						<TextButton className={classes.listItem}>Option 2.1</TextButton>
						<TextButton className={classes.listItem}>Option 2.2</TextButton>
						<TextButton className={classes.listItem}>Option 2.3</TextButton>
						<TextButton className={classes.listItem}>Option 2.4</TextButton>
						<TextButton className={classes.listItem}>Option 2.5</TextButton>
					</VerticalExpander>
					<VerticalExpander
						title="Option 3"
						className={classes.drawerList}
						expanded={this.state.openDrawer === 3}
						onClick={() => {this.setState({openDrawer: 3})}}>
						<TextButton className={classes.listItem}>Option 3.1</TextButton>
						<TextButton className={classes.listItem}>Option 3.2</TextButton>
						<TextButton className={classes.listItem}>Option 3.3</TextButton>
						<TextButton className={classes.listItem}>Option 3.4</TextButton>
						<TextButton className={classes.listItem}>Option 3.5</TextButton>
					</VerticalExpander>
				</div>
			)
		}
		const collapseContents = () => {
			return (
				<div className={classes.drawerList}>
					<TextButton className={classes.listItem}>1</TextButton>
					<TextButton className={classes.listItem}>1.1</TextButton>
					<TextButton className={classes.listItem}>2</TextButton>
				</div>
			)
		}
		if (this.props.size.width > 100) {
			return expandedContents()
		} else {
			return collapseContents()
		}
	}
}

export default withStyles(styles)(sizeMe()(DrawerContents))
