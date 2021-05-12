import React, { useState } from 'react';
import Api from "api/Api"
import { Card, Container, Col, Row } from 'react-bootstrap';
import { TextField, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useHistory } from "react-router-dom";

function Threads(props) {
    const [allThreads, setAllThreads] = useState([]);
    const [threads, setThreads] = useState([]);
    const history = useHistory();

    const parseThreads = async () => {
        let response = await Api.getAllThreads();
        if( response.status !== 200 ) {
            history.push("/login");
        } 
        else {
            setAllThreads(response.data);
            setThreads(response.data);
        }
    }

    useState(parseThreads);

    function search(input) {
        if(input === '') {
            setThreads(allThreads);
        }
        else {
            let threads_content = []
            for(var i = 0; i < allThreads.length; i++)
            {
                if(allThreads[i].name.toLowerCase().indexOf(input.toLowerCase()) !== -1)
                {
                    threads_content.push(allThreads[i]);
                }
            }
            setThreads(threads_content);
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
                            {threads.map(thread => (
                                <Card bg="secondary" text="white" className="my-2" key={thread.name}>
                                    <Card.Body style={{fontSize: "20px"}}>{'t/' + thread.name}</Card.Body>
                                    <a className="stretched-link" onClick={() => {props.handlePosts(thread)}}></a>
                                </Card>
                            ))}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={4}>
                        <Card bg="light" text="dark" className="mb-2" >
                            <Card.Header style={{fontSize: "22px"}}>POPULAR THREADS</Card.Header>
                            <Card.Body>
                            {threads.map((thread, index) => (
                                <Card bg="secondary" text="white" className="my-2" key={thread.name}>
                                    <Card.Body style={{fontSize: "20px"}}>{(index + 1) + ' - ' + 't/' + thread.name}</Card.Body>
                                    <a className="stretched-link" onClick={() => {props.handlePosts(thread)}}></a>
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