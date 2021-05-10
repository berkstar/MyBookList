import React, { useState } from 'react';
import threads from "./dummy-threads.json";
import { Card, Container, Col, Row } from 'react-bootstrap';
import { TextField, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

function Threads(props) {
    const initial_state = threads;
    const [content, setContent] = useState(initial_state);

    function search(input) {
        if(input == '') {
            setContent(initial_state);
        }
        else {
            let threads_content = []
            for(var i = 0; i < initial_state.length; i++)
            {
                if(initial_state[i].title.toLowerCase().indexOf(input.toLowerCase()) != -1)
                {
                    threads_content.push(initial_state[i]);
                }
            }
            setContent(threads_content);
        }
    }

    return (
        <div >
            <Container fluid>
                <Row className="my-4 justify-content-center">
                    <TextField
                        className="w-50"
                        style={{ fontSize: '20px'}}
                        type="search"
                        variant="outlined"
                        placeholder="Search thread..."
                        onChange= {input => ( search(input.target.value) )}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <SearchIcon style={{ fontSize: '30px' ,color: '#000000' }}/>
                                </InputAdornment>
                            ),
                            }}
                        >
                    </TextField>
                </Row>
                <Row>
                    <Col xs={8}>
                        <Card bg="light" text="dark" className="mb-2" >
                            <Card.Header style={{fontSize: "25px"}}>THREADS</Card.Header>
                            <Card.Body>
                            {content.map(thread => (
                                <Card bg="secondary" text="white" className="my-2" key={thread.title}>
                                    <Card.Body style={{fontSize: "20px"}}>{'t/' + thread.title}</Card.Body>
                                    <a className="stretched-link" onClick={() => {props.handlePosts(thread.title)}}></a>
                                </Card>
                            ))}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={4}>
                        <Card bg="light" text="dark" className="mb-2" >
                            <Card.Header style={{fontSize: "22px"}}>POPULAR THREADS</Card.Header>
                            <Card.Body>
                            {content.map((thread, index) => (
                                <Card bg="secondary" text="white" className="my-2" key={thread.title}>
                                    <Card.Body style={{fontSize: "20px"}}>{(index + 1) + ' - ' + 't/' + thread.title}</Card.Body>
                                    <a className="stretched-link" href="/login"></a>
                                </Card>
                            ))}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}



export default Threads;