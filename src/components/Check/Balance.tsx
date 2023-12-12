import React from 'react'
import useBalance from '../../hooks/useBalance';

const Balance: React.FC = () => {
    const balance = useBalance();

    return (
        <>
            { balance ? 
                <div className='bg-primary flex flex-row justify-content-between align-items-center w-9 p-3 border-round-xl relative overflow-hidden'>
                    <h2 className='m-0 font-bold'>Solde</h2>
                    <h2 className='m-0 font-bold'>{balance} €</h2>
                    <div className='bg-secondary border-circle p-5 absolute top-0 left-50 translate-50'></div>
                </div>
            : null }
        </>
    )
}

export default Balance;