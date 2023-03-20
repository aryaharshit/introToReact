import * as React from 'react';
import Alert from '@mui/material/Alert';

// export default function desktopAlert() {
//   return (
//     <Alert severity="success" color="info">
//         Thanks for selecting Desktops
//     </Alert>
//   );
// }

// export default function mobileAlert() {
//   return (
//     <Alert severity="success" color="info">
//         Thanks for selecting Mobiles
//     </Alert>
//   );
// }

// export default function tabletAlert() {
//   return (
//     <Alert severity="success" color="info">
//         Thanks for selecting Tablets
//     </Alert>
//   );
// }

const notifs = [
  (<Alert severity="success" color="info">
      Thanks for selecting Desktops     
  </Alert>), 

  (<Alert severity="success" color="info">
      Thanks for selecting Mobiles     
  </Alert>),

  (<Alert severity="success" color="info">
      Thanks for selecting Tablets    
  </Alert>),
]
 
export default notifs;