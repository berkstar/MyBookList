import React, { useState } from 'react';
import Grid from "@material-ui/core/Grid";
import { Button, TextField } from '@material-ui/core';
import Typography from "@material-ui/core/Typography";
import EditIcon from '@material-ui/icons/Edit';
import { Dropdown } from 'semantic-ui-react'
import Api from 'api/Api';
import { useHistory } from 'react-router';


export default function CreateChallenge() {
    let bookLists = [];
    const [menuItems, setMenuItems] = useState([]);
    const history = useHistory();
    const bookListIds = [];
    let challengeName = "";

    const parseBookLists = async () => {
        let response = await Api.getMyBookLists();
        if( response.status !== 200 ) {
            history.push("/login");
        }
        else {
            bookLists = response.data;
            constructMenuItems();
        }
    }

    function constructMenuItems() {
        let new_list = [];
        bookLists.map((bookList,index)=>{
            let list_element = {
                key: bookList.bl_id,
                text: bookList.name,
                value: bookList
            }
            new_list.push(list_element);
        });
        setMenuItems(new_list);
    }

    useState(parseBookLists);

    function selectBookList(event, data) {
        let book = data.value;
    }

    async function postChallenge() {
        let response = await Api.postBookList(challengeName, bookListIds);
        if( response.status !== 200 ) {
            history.push("/login");
        }
        else {
            window.helloComponent.handleBrowse();
        }
    }

    return (
        <div id='about' >
            <Grid style={{ marginLeft: 50, marginTop: 50}}>
                <Grid container>
                    <Grid>
                        <Typography component="h4" variant="h4" xs={10}>
                            Create New Challenge
                        </Typography>
                        <br/>
                        <h3>Challenge Name <EditIcon/></h3>
                        <TextField
                            variant="filled"
                            label="Name"
                            onChange={(e)=>{challengeName = e.target.value}}
                        >
                        </TextField>
                        <br/>
                        <h3>Assign booklist</h3>
                        <Dropdown
                            placeholder='Select Booklist'
                            fluid
                            search
                            selection
                            onChange ={selectBookList}
                            options={menuItems}
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Button
                style={{ marginLeft:50, marginTop:30 }}
                variant="contained"
                color="primary"
                size="medium"
                onClick={postChallenge}
            >
                <b>Create</b>
            </Button>
        </div>
    );
}