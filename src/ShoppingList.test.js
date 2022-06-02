import React from 'react';
import {render , fireEvent} from '@testing-library/react';
import ShoppingList from './ShoppingList';
import { EXPECTED_COLOR } from 'jest-matcher-utils';

it("renders withut crashing", function(){
    render(<ShoppingList />);
});


it("matches snapshot" , function(){
    const { asFragment } = render(<ShoppingList />);
    expect(asFragment()).toMatchSnapshot();
})

it("should add new item", function(){
    const {queryByText} = render(<ShoppingList />);
    const input = queryByLabelText("Product")
    const btn = queryByText("add Item")
    expect(queryByText("Product name : Chocolate Milk")).not.toBeInTheDocument();
    fireEvent.change(input ,{traget: {value : 'Chocolate Milk'}});
    fireEvent.click(btn);
    expect(queryByText("Product name : Chocolate Milk")).toBeInTheDocument();
})



