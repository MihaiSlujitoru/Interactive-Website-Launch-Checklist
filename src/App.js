import React from "react";
import Tasks from "./components/Tasks";
import content from "./content";

class App extends React.Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = { tasksToDo: content };
	// }

	state = {
		tasksToDo: content
	};

	componentDidMount() {
		const localStorageRef = localStorage.getItem(window.location.href);

		if (localStorageRef) {
			this.setState({ tasksToDo: JSON.parse(localStorageRef) });
		}
	}

	addToStorage() {
		localStorage.setItem(
			window.location.href,
			JSON.stringify(this.state.tasksToDo)
		);
	}

	addTask = (module, task) => {
		// 1. Take a copy of the existing state
		const moduleItem = { ...this.state.tasksToDo };
		// 2. Add our new fish to that fishes
		moduleItem[module].tasks[`task${Date.now()}`] = task;
		// 3. Set the new fishes object to state
		this.setState({
			tasksToDo: moduleItem
		});

		this.addToStorage();
	};

	completeTask = (module, key, updateTask) => {
		// 1. Take a copy of the existing state
		const moduleItem = { ...this.state.tasksToDo };

		// 2. Update our task
		moduleItem[module].tasks[key] = updateTask;
		// 3. Set the new state
		this.setState({
			tasksToDo: moduleItem
		});
		this.addToStorage();
	};

	resetTasks = () => {
		localStorage.removeItem(window.location.href);
		this.setState({ tasksToDo: content });
	};

	render() {
		return (
			<div className="checklist">
				<ul>
					<p>
						To reset your current session, click{" "}
						<span className="reset" onClick={this.resetTasks}>
							<b>Reset</b>
						</span>.
					</p>
				</ul>

				{Object.keys(this.state.tasksToDo).map(key => (
					<Tasks
						key={key}
						index={key}
						tasksToDo={this.state.tasksToDo[key]}
						completeTask={this.completeTask}
						addTask={this.addTask}
					/>
				))}
			</div>
		);
	}
}

export default App;
