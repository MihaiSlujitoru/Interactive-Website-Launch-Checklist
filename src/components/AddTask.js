import React from "react";

class AddTask extends React.Component {
	newTask = React.createRef();

	createTask = e => {
		// 1. Prevent form from submiting
		e.preventDefault();
		// 2. Save the variable into a object
		const task = {
			text: this.newTask.current.value,
			completed: false
		};
		// 3. Send new task into state
		this.props.addTask(this.props.module, task);
		// 4. Reset form
		e.currentTarget.reset();
	};
	render() {
		return (
			<li className="item">
				<form onSubmit={this.createTask}>
					<input
						type="text"
						name="text"
						ref={this.newTask}
						placeholder="Add a new task..."
						required
					/>
					<button type="submit" className="addTask">
						New Task
					</button>
				</form>
			</li>
		);
	}
}

export default AddTask;
