import React from 'react';
import { connect } from 'react-redux';
import { getData } from './actions';

let styles;

const App = (props) => {
	const { container, text, button, buttonText } = styles;

	return (
		<div style={container}>
			<div style={text}>Redux Saga</div>
			<div style={button} onClick={() => props.getData()}>
				<div style={buttonText}>
					{
						props.appData.isFetching ? <div>Loading...</div> : <div>Load data</div>
					}
					{
						props.appData.data.length ? (
							props.appData.data.map((person, i) => {
								return <div key={i} >
									<div>Name: {person.name}</div>
									<div>Age: {person.age}</div>
								</div>
							})
						) : null
					}
				</div>
			</div>
		</div>
	)
}

styles = {
	container: {
		marginTop: 100
	},
	text: {
		textAlign: 'center'
	},
	button: {
		display: 'flex',
		minHeight: 60,
		margin: 10,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#0b7eff',
		cursor: 'pointer'
	},
	buttonText: {
		color: 'white'
	}
}

function mapStateToProps(state) {
	return {
		appData: state.appData
	}
}

function mapDispatchToProps(dispatch) {
	return {
		getData: () => dispatch(getData())
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);