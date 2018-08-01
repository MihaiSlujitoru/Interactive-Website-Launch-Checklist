import React from "react";
import Task from "./Task";
import AddTask from "./AddTask";

class Tasks extends React.Component {
	render() {
		const { title, icon } = this.props.tasksToDo;
		return (
			<ul>
				<li className="header">
					<i className={`fa ${icon}`} aria-hidden="true" /> {title}
					{/* <span className="total">
						<span className="num">0</span>%
					</span> */}
				</li>

				{Object.keys(this.props.tasksToDo.tasks).map(key => (
					<Task
						key={key}
						module={this.props.index}
						index={key}
						task={this.props.tasksToDo.tasks[key]}
						completeTask={this.props.completeTask}
					/>
				))}

				<AddTask module={this.props.index} addTask={this.props.addTask} />
				<li className="footer" />
			</ul>
		);
	}
}

export default Tasks;
