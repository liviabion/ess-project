import { CSSProperties } from 'react';

export const pageContainer: CSSProperties = {
    backgroundColor: '#FCF6F6',
    minHeight: '100vh',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
};

export const sectionContainer: CSSProperties = {
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '10%',
};

export const blackBar: CSSProperties = {
    width: '318px',
    height: '27px',
    backgroundColor: 'black',
};

export const headerContainer: CSSProperties = {
    padding: '20px',
    display: 'flex',
    flexDirection: 'row',
};

export const headerText: CSSProperties = {
    color: '#9B1127',
    fontSize: '50px',
    marginRight: '20px',
    fontWeight: 'bold', 
};

export const ratingsContainer: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '20px',
};

export const addButton: CSSProperties = {
    backgroundColor: '#000000',
    fontSize: '30px',
    fontWeight: '600',
    padding: '5px 30px',
    borderRadius: '20px',
    color: 'white',
    marginBottom: '30px',
};

export const ratingSection: CSSProperties = {
    marginLeft: '5%',
};

export const noteTitle: CSSProperties = {
    fontSize: '40px',
    fontWeight: '600',
    color: '#000000',
    marginLeft: '2%',
};

export const noteContainer: CSSProperties = {
    width: '30%',
    minWidth: '400px',
    height: '113px',
    borderRadius: '20px',
    backgroundColor: '#FFFFFF',
    boxShadow: '0px 5px 3px 1px #00000080',
    marginBottom: '60px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

export const commentTitle: CSSProperties = noteTitle;

export const commentContainer: CSSProperties = {
    width: '70%',
    minWidth: '700px',
    height: '240px',
    borderRadius: '20px',
    backgroundColor: '#FFFFFF',
    boxShadow: '0px 5px 3px 1px #00000080',
};

export const textareaStyle: CSSProperties = {
    fontSize: '25px',
    marginLeft: '50px',
    paddingTop: '20px',
    width: '670px',
    height: '200px',
    outline: 'none',
};

export const okButtonContainer: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
};

export const okButton: CSSProperties = addButton; 
