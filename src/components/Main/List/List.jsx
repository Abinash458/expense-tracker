import React from 'react';
import { List as MUIList, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core';
import { Delete, MoneyOff } from '@material-ui/icons';

import useStyles from './styles';

const List = () => {

    const classes = useStyles();

    const transcations = [
        {
            id: 1,
            type: "Income",
            category: "Salary",
            amount: 50,
            date: "Wed DEC 16"
        },
        {
            id: 2,
            type: "Expense",
            category: "Business",
            amount: 100,
            date: "Wed DEC 20"
        },
        {
            id: 3,
            type: "Expense",
            category: "Salary",
            amount: 10,
            date: "Wed DEC 21"
        },
        {
            id: 4,
            type: "Income",
            category: "Business",
            amount: 250,
            date: "Wed DEC 21"
        }
    ]

    return (
        <MUIList dense={false} className={classes.list}>
            {
                transcations.map((transcation) => (
                    <Slide direction="down" in mountOnEnter unmountOnExit key={transcation.id}>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar className={transcation.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                                    <MoneyOff />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={transcation.category} secondary={`$${transcation.amount} - ${transcation.date}`} />
                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="delete" onClick="">
                                    <Delete />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    </Slide>
                ))
            }
        </MUIList>
    )
}

export default List
