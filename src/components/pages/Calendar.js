import React, { Component, PropTypes } from 'react';
import Template from './Template';

class Calendar extends Component {
    render () {
        return (
            <div>
                <Template
                    componentName="Calendar"
                    menuItems={["menuItem1", "menuItem2"]}
                />
            </div>
        )
    }
}

export default Calendar;