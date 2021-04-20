import React, { Component } from 'react'
import Task  from './Task.js'
import AddTaskComponent from './AddTaskComponent.js'

import './Tasks.css'
export class TaskLayout extends Component {

    render() {
        const tasks = [
            {
                "id": 1,
                "title": "Apples",
                "description": "Buy Apples Today", 
            },
            {
                "id": 1,
                "title": "Apples",
                "description": "Buy Apples Today", 
            },
            {
                "id": 1,
                "title": "Apples",
                "description": "Buy Apples Today", 
            }
        ]


        return (
            <div className="TaskContainer">
                <div className="TaskLayout">
                    {
                        tasks.map(task => {
                            <Task prop={task}></Task>
                        })
                    }
                </div>
                <div className="AddTask">
                    <AddTaskComponent/>
                </div>
            </div>
        )
    }
}

export default TaskLayout
