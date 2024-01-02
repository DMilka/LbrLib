import React from 'react';
import { Grid } from '@mui/material';
import {ComponentChildrenInterface} from "../../../interfaces/ComponentChildrenInterface";

interface GridContainerInterface extends ComponentChildrenInterface {
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space_between' | 'space-around' | 'space-evenly';
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
    spacing?: 0 | 0.5 |  1 | 2 | 3 | 4 | 8 | 12 | null;
}
const GridContainer: React.FC<GridContainerInterface> = (props) => {
    const {justifyContent,alignItems,children,spacing} = props;

    return (
        <Grid container justifyContent={justifyContent ?? 'center'} alignItems={alignItems ?? 'center'} spacing={spacing ?? 0}>
            {children}
        </Grid>
    );
};

export default GridContainer;
