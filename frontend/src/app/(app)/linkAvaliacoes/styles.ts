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

export const completionMessageContainer: CSSProperties = {
    padding: '20px',
};

export const completionMessageText: CSSProperties = {
    color: '#9B1127',
    fontSize: '40px',
    fontFamily: 'Red Hat Display, sans-serif',
    fontWeight: 'bold',
};

export const linkContainer: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '30px',
};
