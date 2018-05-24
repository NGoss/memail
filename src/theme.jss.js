const color = {
	primary: '#2d3de7',
	secondary: '#ffffff',
	background: '#ffffff',
	border: '#929bda',
	text: {
		primary: '#e6e7ff',
		primaryHighlight: '#ffffff',
		secondary: '#656eba'
	}
}

const shadow = {
	0: 'none',
	1: '0 1px 1px 0.5px rgba(0,0,0,0.5)',
	2: '0 1px 5px 1px rgba(0,0,0,0.5), 0 1px 15px 2px rgba(0,0,0,0.125)',
	3: '0 1px 5px 1px rgba(0,0,0,0.5), 0 1px 15px 2px rgba(0,0,0,0.25)',
}

const animation = {
	raise: {
		transition: 'box-shadow 150ms ease-in-out'
	},
	slide(prop) {
		return {
			transition: prop + ' 250ms ease-in-out'
		}
	}
}

const theme = {
	color,
	shadow,
	animation,
	spacing: '5px',
	button: {
		cursor: 'pointer',
		padding: '10px 20px',
		textTransform: 'uppercase',
		fontWeight: 'bold',
		outline: 'none',
		borderRadius: '25px'
	}
}

export default theme
