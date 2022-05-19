import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Header from './header/Header'
import Body from './body/Body'

const useStyles = makeStyles({
	main: {
		height: '100%',
		width: '100%',
		display: 'flex',
		justifyContent: 'center'
	},
	content: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		width: '900px',
		padding: '0 4%',
		['@media (max-width: 1024px)']: {
			width: '100%',
			padding: '0'
		}
	}
})
const Main = () => {
	const classes = useStyles()
	return (
		<section className={classes.main}>
			<section className={classes.content}>	
				<Header />
				<Body />
			</section>
		</section>
	)
}

export default Main