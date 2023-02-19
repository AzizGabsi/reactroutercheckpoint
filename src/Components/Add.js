import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import { useState } from 'react';


const Add = ({show,handleClose,addMovie}) => {
    const [newMovie, setnewMovie] = useState({
        posterURL:"",
        title:"",
        description:"",
        rating:"",
        
    });

    const handleChange=(e) => {
        setnewMovie({...newMovie,[e.target.name]:e.target.value})
    }
    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add a New Movie Here:</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Poster URL:</Form.Label>
                        <Form.Control type="email" placeholder="Enter Poster URL" onChange={handleChange} name="posterURL"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Title:</Form.Label>
                        <Form.Control type="email" placeholder="Enter Title" onChange={handleChange} name="title"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Description:</Form.Label>
                        <Form.Control type="email" placeholder="Enter Description" onChange={handleChange} name="description"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Rating:</Form.Label>
                        <Form.Control type="email" placeholder="Enter Rating in Decimals (exp: 8.5)" onChange={handleChange} name="rating"/>
                    </Form.Group>

                    
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={()=>{addMovie(newMovie);handleClose()}}>
                        Add Movie
                    </Button>
                </Modal.Footer>
            </Modal></div>
    )
}

export default Add