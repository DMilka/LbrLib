import React from 'react';
import {render} from "@testing-library/react";
import Card from "./Card";
describe('Card component', (): void => {
    it('Should render component with no children passed', (): void => {
        const {container} = render(<Card/>);

        const card = container.querySelector('.MuiPaper-root');
        expect(card).toBeInTheDocument();
    })

    it('Should render component with children passed', (): void => {
        const txt = 'test';
        const {getByText} = render(<Card>{txt}</Card>);

        const card = getByText(txt);

        expect(card).toBeInTheDocument();
    })
})