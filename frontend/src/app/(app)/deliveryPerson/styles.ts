'use client'
import { CSSProperties } from 'react';

export const DeliveryPersonStyles = {
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
    marginBottom: '10px',
  },
};
