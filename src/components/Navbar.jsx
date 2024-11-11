import React from 'react';
import Logo from './Logo';
import CartWidget from './CartWidget';



function NavBar() {
    return (
        <nav style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1rem 2rem',
            backgroundColor: '#eee',
            width: '100%',
            position: 'fixed', // Fija la barra en la parte superior
            top: 0,
            left: 0,
            zIndex: 1000 // Asegura que la barra esté siempre al frente
        }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Logo />
                <h3 style={{ marginLeft: '10px' }}>NEW STORE</h3>
            </div>
            
            <CartWidget />
        </nav>
    );
}

export default NavBar;
