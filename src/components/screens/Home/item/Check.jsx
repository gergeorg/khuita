import React from 'react'
import { BsCheck2 } from 'react-icons/bs'

const Check = ({ isCompleted }) => {
	return (
		<div className="border-2 rounded-lg border-pink-500 w-5 h-5 mr-3">
			{isCompleted && <BsCheck2 size={24} className="text-gray-900"/>}

		</div>
	)
}

export default Check
