import React, { useState } from "react";
import TodoTasks from "./todoTasks.jsx";

const Home = () => {
	let initialState = "";

	const [tasks, setTasks] = useState([]);
	const [newTask, setNewTask] = useState(initialState);

	const handleAddTask = () => {
		if (newTask.trim() != "") {
			setTasks([...tasks, newTask]);
			setNewTask(initialState);
		} else alert("You need to add a Task");
	};

	const handleChange = (e) => {
		setNewTask(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	const handleDelete = (id) => {
		let newList = tasks.filter((item, index) => index != id);

		setTasks(newList);
	};

	return (
		<>
			<header>
				<h1>Task List 2022 (You have {tasks.length} tasks pending)</h1>
				<form id="new-task-form" onSubmit={handleSubmit}>
					<input
						type="text"
						name="newTask"
						id="new-task-input"
						placeholder="Add a New Task"
						onChange={handleChange}
						value={newTask}
					/>
					<button
						type="button"
						id="new-task-submit"
						onClick={handleAddTask}>
						Add Task
					</button>
				</form>
			</header>
			<main>
				<TodoTasks tasks={tasks} handleDelete={handleDelete} />
			</main>
		</>
	);
};

export default Home;
