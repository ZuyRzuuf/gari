import React, { Component } from 'react';
import MUIDrawer from 'material-ui/Drawer';
import Menu from '../app/Menu.js'

class Template extends Component {
    render () {
        return (
            <div>
                <Menu/>
                <div>content</div>
            </div>
        )
    }
}

export default Template;