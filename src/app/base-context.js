import React from 'react'

const BaseContext = React.createContext({
	drawerOpen: true,
	message: null,
	toggleDrawer: () => {},
	setCurrentMessage: () => {}
})

export default BaseContext
