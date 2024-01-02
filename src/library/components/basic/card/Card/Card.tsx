import React from 'react';
import {ComponentChildrenInterface} from "../../../interfaces/ComponentChildrenInterface";
import {Card as CardMUI} from '@mui/material'
interface CardPropsInterface extends ComponentChildrenInterface {

}
const Card: React.FC<CardPropsInterface> = (props) => {
    const {children} = props;
    return (
        <CardMUI sx={{borderRadius: 1,padding: 2}}>
            {children}
        </CardMUI>
    );
};

export default Card;
