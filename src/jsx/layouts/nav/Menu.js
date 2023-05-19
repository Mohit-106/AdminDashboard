export const MenuList = [
    //Dashboard
    {
        title: 'Dashboard',	
        classsChange: 'mm-collapse',		
        iconStyle: <i className="fas fa-home"/>,
        content: [
            {
                title: 'Dashboard Light',
                to: 'dashboard',					
            },
            {
                title: 'Dashboard Dark',
                to: 'dashboard-dark',                
            },
            {
                title: 'Customer  List',
                to: 'guest-list',                
            },
            {
                title: 'Customer Details',
                to: 'guest-details',                
            },
            {
                title: 'Concierge List',
                to: 'concierge-list',                
            },
            {
                title: 'Room List',
                to: 'room-list',                
            },
            {
                title: 'Room Details',
                to: 'guest-details',                
            },
            {
                title: 'Maintenance',
                to: 'task',                
            },	
            {
                title: 'Reviews',
                to: 'reviews',                
            }		
        ],
    },
    
    //Apps
    {
        title: 'Apps',	
        classsChange: 'mm-collapse',
        iconStyle: <i className="fas fa-info-circle"></i>,
        content: [
            {
                title: 'Profile',
                to: 'app-profile'
            },
            // {
            //     title: 'Edit Profile',
            //     to: 'edit-profile'
            // },
            {
                title: 'Post Details',
                to: 'post-details'
            },
            {
                title: 'Email',
                //to: './',
                hasMenu : true,
                content: [
                    {
                        title: 'Compose',
                        to: 'email-compose',
                    },
                    {
                        title: 'Index',
                        to: 'email-inbox',
                    },
                    {
                        title: 'Read',
                        to: 'email-read',
                    }
                ],
            },
            {
                title:'Calendar',
                to: 'app-calender'
            },
            {
                title: 'Shop',
                //to: './',
                hasMenu : true,
                content: [
                    {
                        title: 'Product Grid',
                        to: 'ecom-product-grid',
                    },
                    {
                        title: 'Product List',
                        to: 'ecom-product-list',
                    },
                    {
                        title: 'Product Details',
                        to: 'ecom-product-detail',
                    },
                    {
                        title: 'Order',
                        to: 'ecom-product-order',
                    },
                    {
                        title: 'Checkout',
                        to: 'ecom-checkout',
                    },
                    {
                        title: 'Invoice',
                        to: 'ecom-invoice',
                    },
                    {
                        title: 'Customers',
                        to: 'ecom-customers',
                    },
                ],
            },
        ],
    }
]