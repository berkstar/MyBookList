import React, { useState } from 'react';
import Grid from "@material-ui/core/Grid";
import { Button, TextField } from '@material-ui/core';
import Typography from "@material-ui/core/Typography";
import EditIcon from '@material-ui/icons/Edit';
import { Dropdown } from 'semantic-ui-react'
import Api from 'api/Api';
import { useHistory } from 'react-router';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import moment from 'moment';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

export default function CreateChallenge() {
    let bookLists = [];
    const [menuItems, setMenuItems] = useState([]);
    const [selectedBL, setSelectedBL] = useState();
    const [challengeName, setChallengeName] = useState("");
    const history = useHistory();

    const [selectedDate, setSelectedDate] = React.useState(new Date('2021-08-18T21:11:54'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

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
        setSelectedBL(data.value);
    }

    async function postChallenge() {

        let due_date = moment(selectedDate).format('YYYY-MM-DD');
        let bookList_id = selectedBL.bl_id;
        let response = await Api.createChallenge(bookList_id,challengeName,due_date);
        if( response.status !== 200 ) {
            history.push("/login");
        }
        else {
            window.helloComponent.handleBrowse();
            alert("Challenge has been created successfully!");
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
                        <h3>Challenge Name <EditIcon/></h3>

                        <TextField
                            variant="filled"
                            label="Enter challenge name..."
                            onChange={(e)=>{setChallengeName(e.target.value)}}
                        >
                        </TextField>
                        <br/>
                        <br/>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    disableToolbar
                                    variant="inline"
                                    format="MM/dd/yyyy"
                                    margin="normal"
                                    id="date-picker-inline"
                                    label="Challenge due date"
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                        </MuiPickersUtilsProvider>
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
                onClick={() => {postChallenge()}}
            >
                <b>Create</b>
            </Button>
        </div>
    );
}