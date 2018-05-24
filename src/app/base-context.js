import React from 'react'

const BaseContext = React.createContext({
	drawerOpen: true,
	toggleDrawer: () => {}
})

export default BaseContext
