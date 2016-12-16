import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import { Link } from 'react-router'
import FontIcon from 'material-ui/FontIcon';

const getMainTabs = () => (
    <Tabs>
        <Tab
            icon={<FontIcon className="fa fa-calendar" />}
            label="Calendar"
            containerElement={<Link to='calendar'/>}
        />
        <Tab
            icon={<FontIcon className="fa fa-youtube" />}
            label="YouTube"
            containerElement={<Link to='youtube'/>}
        />
        <Tab
            icon={<FontIcon className="fa fa-envelope-o" />}
            label="GMail"
            containerElement={<Link to='gmail'/>}
        />
    </Tabs>
);

export default getMainTabs;