import { CSSProperties } from 'react';

export const CardPaymentStyles = {
  container: {
    backgroundColor: '#FCF6F6',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  } as CSSProperties, // Adicionando a tipagem explicitamente
  navBar: {
    width: '318px',
    height: '27px',
    backgroundColor: 'black',
  }, inputStyle: {
    width: '100%',
    padding: '8px',
    outline: 'none'
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
    display: 'flex',
    alignItems: 'center',
    margin: '20px',
  },
  inputWrapper: {
    backgroundColor: '#FFFFFF',
    width: '200px',
    height: '60px',
    borderRadius: '8px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 40px',
  },
  inputLabel: {
    fontSize: '32px',
  },
  searchIcon: {
    cursor: 'pointer',
  },
  searchDiv: {
    backgroundColor: '#FFFFFF',
    width: '400px',
    height: '60px',
    borderRadius: '8px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 40px',
    marginLeft: '20px',
  },
  input: {
    width: '100%',
    padding: '8px',
    outline: 'none',
  },
  addButtonContainer: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '1700px',
    marginTop: '50px',
    position: 'fixed' as const,
  },
  addButton: {
    backgroundColor: '#9B1127',
    width: '100px',
  
    height: '50px',
    borderRadius: '8px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: '40px',
    marginBottom: '5px',
  },
  EditButtonContainer: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '1620px',
    marginTop: '900px',
    position: 'fixed' as const,
  },
  EditButton: {
    backgroundColor: '#9B1127',
    width: '200px',

    height: '50px',
    borderRadius: '8px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  EditButtonText: {
    color: 'white',
    fontSize: '24px',
   
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

confirmButton: {
  backgroundColor: 'black',
  color: 'white',
  padding: '5px 10px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  marginRight: '10px'
},
};