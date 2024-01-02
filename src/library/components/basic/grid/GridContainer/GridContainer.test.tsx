import React from 'react';
import {render} from "@testing-library/react";
import GridContainer from "./GridContainer";

describe('GridContainer component', (): void => {
    it('should render component', () => {
        const {container} = render(
            <GridContainer>
                <div>First</div>
            </GridContainer>
        );

        const gridContainer = container.querySelector('.MuiGrid-container');
        expect(gridContainer).toBeInTheDocument();
    });

    it('should render children', () => {
        const { getByText } = render(
            <GridContainer>
                <div>First</div>
                <div>Second</div>
            </GridContainer>
        );

        expect(getByText('First')).toBeInTheDocument();
        expect(getByText('Second')).toBeInTheDocument();
    });

    it('should apply justifyContent prop', () => {
        const {container} = render(
            <GridContainer justifyContent={'flex-start'}>
                <div>First</div>
            </GridContainer>
        );

        const gridContainer = container.querySelector('.MuiGrid-container');
        if(gridContainer) {
            const componentStyle = getComputedStyle(gridContainer);
            expect(componentStyle.getPropertyValue('justify-content')).toBe('flex-start');
        }
    });

    it('should apply justifyContent to center when no justifyContent prop passed ', () => {
        const {container} = render(
            <GridContainer>
                <div>First</div>
            </GridContainer>
        );

        const gridContainer = container.querySelector('.MuiGrid-container');
        if(gridContainer) {
            const componentStyle = getComputedStyle(gridContainer);
            expect(componentStyle.getPropertyValue('justify-content')).toBe('center');
        }
    });

    it('should apply alignItems prop', () => {
        const {container} = render(
            <GridContainer alignItems={'flex-start'}>
                <div>First</div>
            </GridContainer>
        );

        const gridContainer = container.querySelector('.MuiGrid-container');
        if(gridContainer) {
            const componentStyle = getComputedStyle(gridContainer);
            expect(componentStyle.getPropertyValue('align-items')).toBe('flex-start');
        }
    });

    it('should apply alignItems to center when no alignItems prop passed', () => {
        const {container} = render(
            <GridContainer>
                <div>First</div>
            </GridContainer>
        );

        const gridContainer = container.querySelector('.MuiGrid-container');
        if(gridContainer) {
            const componentStyle = getComputedStyle(gridContainer);
            expect(componentStyle.getPropertyValue('align-items')).toBe('center');
        }
    });

    it('should set spacing default to 0 when no spacing prop passed', (): void => {
        const {container} = render(
            <GridContainer>
                <div>First</div>
            </GridContainer>
        );

        const gridContainer = container.querySelector('.MuiGrid-spacing');

        expect(gridContainer).not.toBeInTheDocument();
    })

    it('should set spacing when spacing prop passed', (): void => {
        const {container} = render(
            <GridContainer spacing={2}>
                <div>First</div>
            </GridContainer>
        );

        const gridContainer = container.querySelector('.MuiGrid-spacing-xs-2');

        expect(gridContainer).toBeInTheDocument();
    })
})