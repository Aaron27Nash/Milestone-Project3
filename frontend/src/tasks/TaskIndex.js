import { useEffect, useState } from "react";
import { useHistory } from "react-router";

function TaskIndex(data) {

	const history = useHistory()
	
	const [tasks, setTasks] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`http://localhost:5000/tasks`)
			const resData = await response.json()
			setTasks(resData)
		}
		fetchData()
	}, [])

	let tasksFormatted = tasks.map((task) => {
		return (
			<div className="col-sm-6" key={place.placeId}>
				<h2>
					<a href="#" onClick={() => history.push(`/tasks/${task.taskId}`)} >
						{task.description}
					</a>
				</h2>
				<p className="text-center">
					{place.difficulty}
				</p>
				<img style={{ maxWidth: 200 }} src={place.pic} alt={place.name} />
				<p className="text-center">
					Deadline: {task.deadline}
				</p>
			</div>
		)
	})
	return (
		<main>
			<h1>Your Todo List!</h1>
			<div className="row">
				{tasksFormatted}
			</div>
		</main>
	)
}

export default TaskIndex;