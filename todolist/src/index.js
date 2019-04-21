import React from 'react';
import ReactDOM from 'react-dom';

// const TodoList = (props) => {
//     const onListItemClick = (event) => {
//         console.log('I got clicked');
//     };

//     return (
//         <ul>
//             <li onClick={onListItemClick}>{props.todos[0]}</li>
//             <li>{props.todos[1]}</li>
//             <li>{props.todos[2]}</li>
//         </ul>
//     );


// };

const TodoList = (props) => (
    <ul>
        {props.todos.map(todo =>
            <TodoListItem todo = {todo} />
        )}
    </ul>
);

class TodoListItem extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            done : false
        }
    }

    onListItemClick() {
        this.setState({
            done : !this.state.done
        });
    }

    render(){
        const style = {
            textDecoration : this.state.done ? 'line-through' : 'none'
        }

        return(
            <li style={style} onClick = {this.onListItemClick.bind(this)}>
            {this.props.todo}</li>
        );
    }
}

const App = () => (
    <div>
        <h2>My Todo List</h2>
        <TodoList
            todos = {[
                'Learn React',
                'Crush Recast.ly',
                'Maybe sleep'
            ]}
        />
    </div>
);