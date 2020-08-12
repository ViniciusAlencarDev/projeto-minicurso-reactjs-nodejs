import React, { useState, useEffect } from 'react';
import './styles.css';

import styled, { css } from 'styled-components';

const SpanEdited = styled.span`
    border: 1px solid gray;
    border-radius: 10px;
    padding: 0 10px;
    box-sizing: border-box;
    color: white;
    background-color: #bdbd35;
    cursor: pointer;
    ${props => 
        props.color == "Finalizado" && css`
            background: green;
            
        `
    }
`

export default function Task() {

    const [nameTask, setNameTask] = useState('');
    const [listTasks, setListTasks] = useState([]);

    useEffect(() => {

        listar();
        
    }, [])

    function listar() {
        fetch('http://localhost:3333/task/list')
            .then(res => res.json())
            .then(data => {
                setListTasks(data.data)
            })
    }

    function handlerAddTask(e) {
        e.preventDefault();

        // setListTasks([...listTasks, {
        //     id: (listTasks.length ? listTasks[listTasks.length - 1].id + 1 : 0),
        //     title: nameTask,
        //     status: "Finalizado"
        // }])
        setNameTask('');

        fetch('http://localhost:3333/task/create', {
            method: "POST",
            headers: {
                'Aceppt': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                lista_id: 0,
                title: nameTask
            })
        })
            .then(res => res.json())
            .then(data => {
                listar();
            })
    }

    function handlerDelete (id) {
        if(window.confirm('Deseja excluir esta tarefa?')) {
            fetch('http://localhost:3333/task/delete', {
            method: "POST",
            headers: {
                'Aceppt': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id,
            })
        })
            .then(res => res.json())
            .then(data => {
                listar();
            })
        }
    }

    function handlerStatus (item) {
        fetch('http://localhost:3333/task/update', {
            method: "POST",
            headers: {
                'Aceppt': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: item.id,
                title: item.title,
                status: (item.status === "Em andamento" ? "Finalizado": "Em andamento")
            })
        })
            .then(res => res.json())
            .then(data => {
                listar();
            })
    }

    return (
        <div id="task-container">

            <header>TodoList Uninassau</header>
            <form onSubmit={handlerAddTask}>
                <input type="text" value={nameTask} onChange={input => setNameTask(input.target.value)} placeholder="Insira nome da tarefa" />
                <input type="submit" value="Inserir" />
            </form>

            <section>
                {
                    listTasks.map(item => (
                        <div className="item" key={item.id}>
                            <SpanEdited className="status" color={item.status} onClick={() => handlerStatus(item)}>{item.status}</SpanEdited>
                            <span className="title">{item.title}</span>
                            <span className="icon-close" onClick={() => handlerDelete(item.id)}>X</span>
                        </div>
                    ))
                }
            </section>

        </div>
    );

}