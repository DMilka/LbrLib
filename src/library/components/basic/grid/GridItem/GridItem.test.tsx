import React from 'react';
import {render} from "@testing-library/react";
import GridItem from "./GridItem";

describe('GridItem component', (): void => {
    it('should render component', () => {
        const {container} = render(<GridItem>Test</GridItem>);

        const gridItem = container.querySelector('.MuiGrid-item');

        expect(gridItem).toBeInTheDocument();
    });

    it('should render children', () => {
        const {getByText} = render(<GridItem><div>Test</div></GridItem>);

        expect(getByText('Test')).toBeInTheDocument();
    });

    it('should apply auto width value prop when xs prop not passed-', () => {
        const {container} = render(<GridItem>Test</GridItem>);

        const gridItem = container.querySelector('.MuiGrid-item');
        if(gridItem) {
            expect(gridItem).toHaveClass('MuiGrid-grid-xs-true');
        }
    });

    it('should apply "xs" prop', () => {
        const {container} = render(<GridItem xs={6}>Test</GridItem>);

        const gridItem = container.querySelector('.MuiGrid-item');
        if(gridItem) {
            expect(gridItem).toHaveClass('MuiGrid-grid-xs-6');
        }
    });
})