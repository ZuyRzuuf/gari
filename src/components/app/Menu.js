import React, { Component } from 'react';
import MUIDMenuItem from 'material-ui/MenuItem';

class Menu extends Component {
    render () {
        return (
            <div>
                <h2>Menu Component</h2>
                <MUIDMenuItem>Menu Item</MUIDMenuItem>
                <MUIDMenuItem>Menu Item 2</MUIDMenuItem>
            </div>
        )
    }
}

export default Menu;