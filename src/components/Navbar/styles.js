

export const navStyle = {
    drawer: {
        '& .MuiDrawer-paper': {
            width: 220,
            boxSizing: 'border-box',
            backgroundColor: '#101F33',
            // height: 'calc(100% - 70px)',
            // top: 70
          }
    },

    text:{
        color: 'white',
        fontFamily: 'Arial'
    },
    button: {
        '&:hover': {
          backgroundColor: '#4074ea',
          boxShadow: 'none',
        },
        '&:active': {
          boxShadow: 'none',
          backgroundColor: '#3c52b2',
        },
      },
}

export const buttonStyle = {
  Customerbutton: {
    fontSize: 20,
    color: 'white',
    backgroundColor: '#4074ea',
    '&:hover': {
      backgroundColor: '#101F33',
      boxShadow: 'none',
    },
    '&:disabled': {
      backgroundColor: 'Grey',
      boxShadow: 'none',
    }
  },
};


export const menuStyle = {
  menubar:{
    backgroundColor: '#101F33',
  },

  button: {
    my: 2, 
    color: 'white', 
    display: 'block',
    '&:hover': {
      backgroundColor: '#4074ea',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#3c52b2',
    },
  },
}
  
