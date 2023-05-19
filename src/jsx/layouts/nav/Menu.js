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
                title: 'Help & Support',
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
                title: 'Partner',
                //to: './',
                hasMenu : true,
                content: [
                    {
                        title: 'Users',
                        to: 'ecom-customers',
                    },
                    {
                        title: 'Posts',
                        to: 'ecom-product-list',
                    },
                    {
                        title: 'Post Details',
                        to: 'ecom-product-detail',
                    },
                    {
                        title: 'Requests',
                        to: 'ecom-product-order',
                    }
                ],
            },
        ],
    }
]