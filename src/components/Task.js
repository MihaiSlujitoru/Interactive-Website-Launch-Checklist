import React from "react";

class Task extends React.Component {
	handleCheck = () => {
		let check = false;
		if (this.props.task.completed === false && this.props.task.applicable) {
			check = true;
		}

		const updateTask = {
			...this.props.task,
			completed: check,
			applicable: true
		};

		this.props.completeTask(this.props.module, this.props.index, updateTask);
	};

	handleApplicable = () => {
		let check = true;
		if (this.props.task.applicable === true) {
			check = false;
		}

		const updateTask = {
			...this.props.task,
			applicable: check,
			complete: false
		};

		this.props.completeTask(this.props.module, this.props.index, updateTask);
	};

	render() {
		const { text, completed, applicable } = this.props.task;
		let item = "";
		const isCompleted = completed === true;
		const isApplicable = applicable === true;
		if (isCompleted && isApplicable) {
			item = "checked";
		} else if (!isApplicable) {
			item = "notapplicable";
		}
		return (
			<li className={`item ${item}`}>
				<span className="checkbox" onClick={this.handleCheck}>
					<i className="fa fa-check" />
				</span>
				<i className="fa fa-minus-circle na" onClick={this.handleApplicable} />
				<p>{text}</p>
			</li>
		);
	}
}

export default Task;
