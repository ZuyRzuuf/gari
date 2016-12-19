import Home from '../components/pages/Home';
import Calendar from '../components/pages/Calendar';
import YouTube from '../components/pages/YouTube';
import Gmail from '../components/pages/Gmail';
import NotFound from '../components/pages/NotFound';

const routes = {
    'home': {
        path: '',
        class: 'notLogged',
        component: Home,
        icon: 'fa fa-home',
        label: 'Home'
    },
    'calendar' : {
        path: 'calendar',
        class: 'calendar',
        component: Calendar,
        icon: 'fa fa-calendar',
        label: 'Calendar'
    },
    'youtube' : {
        path: 'youtube',
        class: 'youtube',
        component: YouTube,
        icon: 'fa fa-youtube',
        label: 'YouTube'
    },
    'gmail' : {
        path: 'gmail',
        class: 'gmail',
        component: Gmail,
        icon: 'fa fa-envelope-o',
        label: 'Gmail'
    },
    'notFound' : {
        path: '*',
        class: 'notFound',
        component: NotFound,
        icon: '',
        label: ''
    }
};

export default routes;