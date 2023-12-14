import Tab from '@/components/Tab'
import React from 'react'
import * as ReactDOM from 'react-dom/client'
import '../assets/styles/index.css'
import '../samples/node-api'
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Tab />
		<App />
	</React.StrictMode>
)

postMessage({ payload: 'removeLoading' }, '*')
