import React from 'react'
import ReactDOM from 'react-dom'
import './global.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { ThemeProvider } from 'react-jss'
import appTheme from './theme.jss.js'


ReactDOM.render(
	(<ThemeProvider theme={appTheme}>
			<App />
		</ThemeProvider>),
	document.getElementById('root'))
registerServiceWorker()
