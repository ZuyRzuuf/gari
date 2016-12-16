import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import { Link } from 'react-router'
import FontIcon from 'material-ui/FontIcon';
import routes from '../../data/routes'

const getMainTabs = () => (
    <Tabs>
        <Tab
            icon={<FontIcon className={routes.calendar.icon} />}
            label={routes.calendar.label}
            containerElement={<Link to={routes.calendar.path}/>}
        />
        <Tab
            icon={<FontIcon className={routes.youtube.icon} />}
            label={routes.youtube.label}
            containerElement={<Link to={routes.youtube.path}/>}
        />
        <Tab
            icon={<FontIcon className={routes.gmail.icon} />}
            label={routes.gmail.label}
            containerElement={<Link to={routes.gmail.path}/>}
        />
    </Tabs>
);

export default getMainTabs;