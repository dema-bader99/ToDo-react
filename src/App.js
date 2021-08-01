import React from 'react'
import './App.css';
import Add from './Add'
class App extends React.Component {
	constructor(props) {
	  super(props);
	  this.handleSubmit =this.handleSubmit.bind(this);
	  this.handleDelSubmit = this.handleDelSubmit.bind(this);
	  this.input = React.createRef();
	  this.state = {
		id:0,
		tasks:[],
	};
	}
	handleSubmit(event){
		event.preventDefault();
		if(this.input.current.value === ''){
			return;
		}
		this.setState(
			{
				id : this.state.id+1,
				tasks:[...this.state.tasks, {count:this.state.id,name:this.input.current.value}],
			}
		);
		this.input.current.value = '';
	}

	handleDelSubmit(taskss) {
		let newState = this.state.tasks.filter(task => task !== taskss);
		this.setState({
			tasks: newState,
		});
	};

	checked(taskss , key) {
		let num = taskss.count;
		let nam = key;
		let checkBox = document.getElementById(num);
		let text = document.getElementById(nam);
		if (checkBox.checked === true){
			text.classList.add("on_check");
		} else {
			text.classList.remove("on_check");
		}
	}
	render() {
		return (
			<div className="maindiv">
				<form onSubmit={this.handleSubmit}>
					<label>
					<input className="inputtext" type="text"  ref={this.input} placeholder="What needs to be done ?" />
					<button className="inputsubmit" type="submit" value="add"><strong>add </strong> </button>
					</label>
				</form>
				<div className="supdiv">
				<h3>To Do List </h3>
				{this.state.id > 0 && this.state.tasks.map(
					task => {
						return(
						 <Add key={task.count} task={task} handleDelSubmit={this.handleDelSubmit} checked={this.checked} />
						)}
					)
				}
				</div>
			</div>
  		);
	};
}

export default App;