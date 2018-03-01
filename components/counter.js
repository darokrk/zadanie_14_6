var Counter = React.createClass({
	getDeafultProps: function() {
		console.log('Set default props value which have not been transferred to Component');
	},
	getInitialState: function() {
		console.log('Set initial props value');
		return {
			counter: 0,
			counterTwo: 2,
			counterThree: 10
		};
	},
	increment: function() {
		this.setState({
			counter: this.state.counter + 1,
			counterTwo: this.state.counterTwo + 5,
			counterThree: this.state.counterThree * 2
		});
	},
	decrement: function() {
		this.setState({
			counter: this.state.counter - 1,
			counterTwo: this.state.counterTwo - 5,
			counterThree: this.state.counterThree /2
		});
	},
	componentWillMount: function() {
		console.log('Method called before rendering. Can be used for change configuration or update state');
		this.setState({
			counter: this.state.counter + 2,
			counterTwo: this.state.counterTwo + 10,
			counterThree: this.state.counterThree
		});
	},
	render: function() {
		return React.createElement('div', {},
			React.createElement('button', {className: 'button',onClick: this.increment}, 'Increment'),
			React.createElement('button', {className: 'button', onClick: this.decrement}, 'Decrement'),
			React.createElement('ul', {},
				React.createElement('li', {className: 'licznik'}, 'Licznik pierwszy: ' + this.state.counter),
				React.createElement('li', {className: 'licznik'}, 'Licznik drugi: ' + this.state.counterTwo),
				React.createElement('li', {className: 'licznik'}, 'Licznik trzeci: ' + this.state.counterThree)
			)
		);
	},
	componentDidMount: function() {
		console.log('Component mounted');
		this.setState({
			counter: this.state.counter + 3,
			counterTwo: this.state.counterTwo + 3,
			counterThree: this.state.counterThree
		});
	}
});