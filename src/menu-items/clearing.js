// assets
import { IconClearAll } from '@tabler/icons';


// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const event = {
    id: 'clearing',
    type: 'group',
    children: [
        {
            id: 'clearing',
            title: 'Clearing',
            type: 'item',
            url: '/clearing',
            icon: IconClearAll,
            breadcrumbs: false
        }
    ]
};

export default event;
