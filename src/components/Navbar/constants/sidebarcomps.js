import HomeIcon from '@mui/icons-material/Home';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import PeopleIcon from '@mui/icons-material/People';
import HelpIcon from '@mui/icons-material/Help';

export const navItems = [
    {
        id: 0,
        icon: <PeopleIcon style={{color: 'white'}}/>,
        label: 'Validation',
        route: ''
    },
    {
        id: 1,
        icon: <HomeIcon style={{color: 'white'}}/>,
        label: 'GO-TO',
        route: 'go-to'
    },
    {
        id: 2,
        icon: <CurrencyRupeeIcon style={{color: 'white'}}/>,
        label: 'Sell Products',
        route: 'sell-products'
    },
    
    {
        id: 3,
        icon: <HelpIcon style={{color: 'white'}}/>,
        label: 'Help',
        route: 'help'
    },
    
]