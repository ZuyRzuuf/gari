import React, { Component } from 'react';
import MUIDMenuItem from 'material-ui/MenuItem';

class Menu extends Component {
    render () {
        const { className, menuItems } = this.props;

        function getMenuItems(menuItems) {
            var items = [];
            for (var i=0; i<2; i++) {
                items.push(<MUIDMenuItem className="menu__item" key={i}>{menuItems[i]}</MUIDMenuItem>);
            }

            return items;
        }

        return (
            <div className={className + " menu"}>
                {getMenuItems(menuItems)}
            </div>
        )
    }
}

export default Menu;