import React from 'react';
import { Grid } from '@mui/material';
import {ComponentChildrenInterface} from "../../../interfaces/ComponentChildrenInterface";

interface GridContainerInterface extends ComponentChildrenInterface {
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space_between' | 'space-around' | 'space-evenly';
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
}
const GridContainer: React.FC<GridContainerInterface> = (props) => {
    const {justifyContent,alignItems,children} = props;

    return (
        <Grid container justifyContent={justifyContent ?? 'center'} alignItems={alignItems ?? 'center'}>
            {children}
        </Grid>
    );
};

export default GridContainer;
