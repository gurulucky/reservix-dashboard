// assets
import { IconClearAll } from '@tabler/icons';


// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const event = {
    id: 'sample-docs-roadmap',
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
