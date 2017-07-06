import React, { Component } from 'react';
import { View, Image,Text } from 'react-native';
import Todo from '../modele/Todo'
import TodoList from './TodoList'
import TodoForm  from './TodoForm'
import{ connect } from 'react-redux'

export class App extends Component {

    constructor(props){
        super(props)
       
        this.state = {
            todoList: []
        }

        this.changetab = this.changetab.bind(this);
    }

    changetab(Todo){
        let index=this.state.todoList.findIndex(x => x.id == Todo.id)
       
        Todo.isDone=!Todo.isDone
        this.state.todoList[index] = Todo
    }

    getList(){
        if(this.props.todoList.length==0){
            return (
                <Text> Vous n'avez aucun TODO ! </Text>
            );
        }
        else{
            return ( <TodoList todoList={this.props.todoList} changeTab={this.changetab} ></TodoList>
            );
        }
    }
    render() {
        const list = this.getList()
        return (
            <View>
                <Text> Il y a {this.props.todoList.length} élément(s) </Text>
                <TodoForm ></TodoForm>
                {list}
                
            </View>
        );
    }
}



function mapStateToProps(state) {
    return {
        todoList: state.todoReducer.todos
    }
}


export default connect(mapStateToProps, undefined)(App)
