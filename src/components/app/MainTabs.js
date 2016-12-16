import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';

const getMainTabs = () => (
    <Tabs>
        <Tab
            icon={<FontIcon className="fa fa-calendar" />}
            label="Calendar"
        />
        <Tab
            icon={<FontIcon className="fa fa-youtube" />}
            label="YouTube"
        />
        <Tab
            icon={<FontIcon className="fa fa-envelope-o" />}
            label="GMail"
        />
    </Tabs>
);

export default getMainTabs;