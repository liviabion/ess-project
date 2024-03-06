'use client'
export const EditDeliveryPersonStyles = {
        container: {
          backgroundColor: '#FCF6F6',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column' as const, // Definindo como constante para evitar a incompatibilidade de tipo
        },
        navBar: {
 
            backgroundColor: 'black',
            height: '27px',
            width: '318px',
          },
          titleContainer: {
            padding: '20px',
          },
          title: {
            color: '#9B1127',
            fontSize: '40px',
            fontFamily: 'Red Hat Display, sans-serif',
          },
      
    inputContainer: {
      backgroundColor: '#FFFFFF',
      width: '400px',
      height: '60px',
      borderRadius: '8px',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 20px',
      marginBottom: '20px'
    },
    inputStyle: {
      width: '100%',
      padding: '8px',
      outline: 'none'
    },
 
    
    confirmPopup: {

      top: '0',
      left: '0',
      width: '100%',
      height: '100%',

      display: 'flex',
    textAlign: 'center' as const,
      justifyContent: 'center'
    },
    confirmPopupInner: {
        position: 'fixed' as const,
    top: '50%', /* Mantém o pop-up no meio verticalmente */
    left: '50%', /* Mantém o pop-up no meio horizontalmente */
    transform: 'translate(-50%, -50%)', /* Centraliza o pop-up na tela */
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '5px',
      boxShadow: '0px 0px 10px rgba(0,0,0,0.5)',
      textAlign: 'center' as const
    },
    confirmButtonPopUp: {
      backgroundColor: 'black',
      color: 'white',
      padding: '5px 10px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      marginRight: '10px'
    },
    confirmButton: {
      backgroundColor: 'black',
      position: 'fixed' as const,
      color: 'white',
      padding: '5px 10px',
      borderRadius: '5px',
      cursor: 'pointer',
      marginLeft: '1620px',
      marginTop: '900px',
      width:'10%'
    },
    deliveryPersonCreated: {
      position: 'fixed' as const,
      bottom: '20px',
      right: '20px',
      backgroundColor: '#9B1127',
      color: 'white',
      padding: '10px',
      borderRadius: '8px',
    },
  };