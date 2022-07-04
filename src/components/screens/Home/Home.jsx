import React from 'react'
import TodoItem from './item/TodoItem'

const todos = [
	{
		id: 1,
		title: 'There will be some kind of title here, but I haven\'t thought of it yet',
		isCompleted: false,
	},
	{
		id: 2,
		title: 'the second title which I haven\'t come up with yet',
		isCompleted: false,
	},
	{
		id: 3,
		title: 'and this is still the same heading, but only the third',
		isCompleted: true,
	},
]

const Home = () => {
	return (
		<div className='text-white w-4/5 mx-auto'>
			<h1 className='text-2xl font-bold text-center mb-8'>ToDo</h1>
			{todos.map(todo => (
				<TodoItem key={todo.id} todo={todo}/>
			))}
		</div>
	)
}

export default Home
