import React,{useState} from 'react';
import {Button, Card, Col, Container, ListGroup, Row} from 'react-bootstrap';
import DisplayCount from './DisplayCount';
import {connect} from 'react-redux';
import { deleteTodo } from '../redux/actions/todo';

const DisplayTodo=({todos,deleteTodo})=> {
    
  return (
    <Container>
       <h3>DisplayTodo Component</h3>
       <DisplayCount/>
       <Row>
        <Col>
        <Card className='mt-3 shadow-sm'>
            <h3>All to do is here</h3>
            <ListGroup>
            {
                todos.map((todo,index)=>(
                    <ListGroup.Item key={index}>
                        <h4>{todo.title}</h4>
                        <p>{todo.description}</p>
                        <Button color="danger" onClick={event=>deleteTodo(todo.id)}>Delete</Button>
                    </ListGroup.Item>
                ))

                }
            
            </ListGroup>

        </Card>
        </Col>
       </Row>
    </Container>
  );
}
const mapStateToProps=(state)=>{
    console.log(state)
    return {todos:state.todos}
}
const mapDispatchToProps=(dispatch)=>({
    deleteTodo:(id)=>(dispatch(deleteTodo(id)))
})

export default connect(mapStateToProps,mapDispatchToProps)(DisplayTodo);