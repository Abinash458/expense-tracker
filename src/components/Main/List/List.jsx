import React, { useContext } from 'react';
import { List as MUIList, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core';
import { Delete, MoneyOff } from '@material-ui/icons';

import { ExpenseTrackerContext } from '../../../context/context';
import useStyles from './styles';

const List = () => {

    const classes = useStyles();
    const { deleteTransaction, transactions } = useContext(ExpenseTrackerContext);

    return (
        <MUIList dense={false} className={classes.list}>
            {transactions.map((transcation) => (
                <Slide direction="down" in mountOnEnter unmountOnExit key={transcation.id}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className={transcation.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                                <MoneyOff />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={transcation.category} secondary={`$${transcation.amount} - ${transcation.date}`} />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete" onClick={() => deleteTransaction(transcation.id)}>
                                <Delete />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </Slide>
            ))}
        </MUIList>
    )
}

export default List
