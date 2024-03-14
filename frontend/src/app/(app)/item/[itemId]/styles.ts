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
    backgroundColor: 'black'
}

export const rowContainer: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '20px',
};

export const columnContainer: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
};

export const itemImage: CSSProperties = {
    width: '410px',
    height: '538.5px',
    borderRadius: '20px',
};

export const itemPrice: CSSProperties = {
    fontSize: '40px',
    fontFamily: 'Red Hat Display, sans-serif',
    marginRight: '10px'
};

export const itemNameContainer: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
};

export const itemName: CSSProperties = {
    color: '#9B1127',
    fontSize: '50px',
    fontFamily: 'Red Hat Display, sans-serif',
    marginLeft: '-70px',
};

export const itemAttribute: CSSProperties = {
    marginTop: '10px',
    marginLeft: '-70px',
    fontSize: '30px',
    fontFamily: 'Red Hat Display, sans-serif',
};

export const colorSizeRow: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '30px',
    marginLeft: '-30px',
    justifyContent: 'space-around',
};

export const addToCartButton: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '-200px',
    paddingTop: '10px',
    paddingBottom: '10px',
    backgroundColor: '#000000',
    marginTop: '50px',
    borderRadius: '20px',
};

export const addToCartButtonText: CSSProperties = {
    color: '#FFFFFF',
    fontSize: '40px',
    fontFamily: 'Red Hat Display, sans-serif',
};

export const descriptionSection: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '30px',
};

export const ratingsRow: CSSProperties = {
    marginTop: '50px',
    display: 'flex',
    flexDirection: 'row',
};

export const viewMoreRow: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '-30px',
    marginLeft: '30px',
    marginBottom: '50px',
};

export const viewMoreLink: CSSProperties = {
    fontSize: '25px',
    fontFamily: 'Red Hat Display, sans-serif',
    textDecoration: 'underline',
};

export const goToCartButton: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '10px',
    paddingBottom: '10px',
    paddingRight: '20px',
    paddingLeft: '20px',
    backgroundColor: '#000000',
    borderRadius: '20px',
};

export const goToCartButtonText: CSSProperties = {
    color: '#FFFFFF',
    fontSize: '30px',
    fontFamily: 'Red Hat Display, sans-serif',
};
