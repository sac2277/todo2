import React ,{useState} from 'react';
import {Card, Container,Row, Col,Form,Button} from 'react-bootstrap';
import DisplayCount from './DisplayCount';
import {addTodo} from '../redux/actions/todo';
import {connect} from 'react-redux';
import {v4} from 'uuid';



function AddTodo({addTodo}) {
   const [todo,setTodo] =useState({
    title:'',
    description:'',
    id:''
   });
   const handleSubmit=(event)=>{
    event.preventDefault();
    //add todo in store
    
    addTodo({...todo,id:v4()});
    console.log(todo); 
    
    setTodo({
        title:'',
        description:''
    })
   }
  return (
    <Container>
        <DisplayCount/>
       <Row>
        <Col md={12}>
            <Card className='shadow-sm'>
             <Card.Body>
                <h3>Add ToDo Here  ....!!!</h3>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>ToDo Title</Form.Label>
                        <Form.Control type='text' placeholder="Enter here"
                        value={todo.title}
                        onChange={event=>setTodo({...todo,title:event.target.value})}/>
                    </Form.Group>
                    <Form.Group className="mt-3">
                        <Form.Label>ToDo Description</Form.Label>
                        <Form.Control as={'textarea'} placeholder="Enter here Discription"
                         value={todo.description}
                         onChange={event=>setTodo({...todo,description:event.target.value})}/>
                    </Form.Group>
                    <Container className='text-center mt-3'>
                        <Button variant='primary' type="submit">
                            Add Todo
                        </Button>
                    </Container>
                </Form>
             </Card.Body>
            </Card>
        </Col>
        </Row>
    </Container>
  );
};

const mapStateToProps=(state)=>({})
const mapDispatchToProps=(dispatch)=>({
    addTodo:(todo)=>(dispatch(addTodo(todo)))
})
export default connect(mapStateToProps,mapDispatchToProps) (AddTodo);