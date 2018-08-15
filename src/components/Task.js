import React from "react";

class Task extends React.Component {
	handleCheck = () => {
		let check = false;
		if (this.props.task.completed === false) {
			check = true;
		}

		const updateTask = {
			...this.props.task,
			completed: check
		};

		this.props.completeTask(this.props.module, this.props.index, updateTask);
	};

	render() {
		const { text, completed } = this.props.task;
		let item = "";
		const isCompleted = completed === true;
		if (isCompleted) {
			item = "checked";
		}
		return (
			<li className={`item ${item}`}>
				<span className="checkbox" onClick={this.handleCheck}>
					<i className="fa fa-check" />
				</span>
				<i
					className="fa fa-minus-circle na"
					onClick={() =>
						this.props.deleteTask(this.props.module, this.props.index)
					}
				/>
				<p>{text}</p>
			</li>
		);
	}
}

export default Task;
