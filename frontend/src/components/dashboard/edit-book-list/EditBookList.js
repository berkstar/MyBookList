import React, { useState } from 'react';
import Grid from "@material-ui/core/Grid";
import { Button, TextField } from '@material-ui/core';
import Typography from "@material-ui/core/Typography";
import EditIcon from '@material-ui/icons/Edit';
import { Dropdown } from 'semantic-ui-react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Api from 'api/Api';
import { useHistory } from 'react-router';



export default function EditBookList() {
    var books = [];
    const [list, setList] = useState([]);
    const [bookIds, setBookIds] = useState([]);
    const [menuItems, setMenuItems] = useState([]);
    const [listName, setListName] = useState("");
    const history = useHistory();

    const columns = [
        { id: 'name', label: 'Name', minWidth: 170 },
        { id: 'author_name', label: 'Author', minWidth: 100 },
        {
          id: 'pagenumber',
          label: 'Page Number',
          minWidth: 170,
          align: 'right',
        },
    ];
    
    const parseBooks = async (input="") => {
        let response = await Api.searchBook(input);
        if( response.status !== 200 ) {
            history.push("/login");
        } 
        else {
            books = response.data;
            constructMenuItems();
        }
    }

    function constructMenuItems() {
        let new_list = [];
        books.map((book,index)=>{
            let list_element = {
                key: book.title,
                text: book.title,
                value: book
            }
            new_list.push(list_element);
        });
        setMenuItems(new_list);
    }

    useState(parseBooks);

    function addBook(event, data) {
        let book = data.value;
        let temp = [...list];
        let newRow = { name: book.title, author_name: book.author_name, pagenumber: book.pages};
        let temp2 = [...bookIds];
        temp2.push(book.book_id);
        temp.push(newRow);
        setBookIds(temp2);
        setList(temp);
    }

    async function postBookList() {
        let response = await Api.postBookList(listName, bookIds);
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
                            Create New Book List
                        </Typography>
                        <br/>
                        <h3>List Name <EditIcon/></h3> 
                        <TextField
                            variant="filled"
                            label="Name"
                            onChange={(e)=>{setListName(e.target.value)}}
                            >
                        </TextField> 
                        <br/>
                        <h3>Search for books</h3> 
                        <Dropdown
                            placeholder='Select Book'
                            fluid
                            search
                            selection
                            onChange ={addBook}
                            options={menuItems}         
                        />
                    </Grid>
                    <TableContainer>
                        <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                key={column.id}
                                align={column.align}
                                style={{ minWidth: column.minWidth }}
                                >
                                {column.label}
                                </TableCell>
                            ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {list.map((row) => {
                                return (
                                    <TableRow>
                                    {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                        <TableCell key={column.id} align={column.align}>
                                            {column.format && typeof value === 'number' ? column.format(value) : value}
                                        </TableCell>
                                        );
                                    })}
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
            <Button 
                style={{ marginLeft:50, marginTop:30 }}
                variant="contained"
                color="primary"
                size="medium"
                onClick={postBookList}
                >
                    <b>Publish</b>
            </Button>
        </div>
    );
}