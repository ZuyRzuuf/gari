import React, { Component, PropTypes } from 'react';
import Menu from '../app/Menu.js'

class Template extends Component {
    render () {
        return (
            <div className="container-fluid template">
                <Menu
                    className="col-sm-3 template__menu"
                    menuItems={this.props.menuItems}
                />
                <div className="col-sm-9 template__content">content</div>
            </div>
        )
    }
}

Template.propTypes = {
    componentName:  PropTypes.string.isRequired
};

Template.defaultProps = {
};

export default Template;