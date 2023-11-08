import React from 'react';
import { Grid } from '@mui/material';
import {ComponentChildrenInterface} from "../../../interfaces/ComponentChildrenInterface";

interface GridContainerInterface extends ComponentChildrenInterface {
    xs?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | number |null;
}
const GridItem: React.FC<GridContainerInterface> = (props) => {
    const {children,xs} = props;

    return (
        <Grid item xs={xs ?? true}>
            {children}
        </Grid>
    );
};

export default GridItem;
