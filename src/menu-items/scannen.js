// assets
import { IconBarcode } from '@tabler/icons';


// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const event = {
    id: 'sample-docs-roadmap',
    type: 'group',
    children: [
        {
            id: 'scannen',
            title: 'Scannen',
            type: 'item',
            url: '/scannen',
            icon: IconBarcode,
            breadcrumbs: false
        }
    ]
};

export default event;
