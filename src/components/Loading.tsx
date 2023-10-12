import { IonSpinner } from '@ionic/react';
import React from 'react'

type LoadingProps = {
    text: string
}

const Loading: React.FC<LoadingProps> = ({ text }) => {
    return (
        <div className='flex flex-column align-items-center my-auto'>
            <IonSpinner name='bubbles' color='primary' className='w-4rem h-4rem' />
            <h2>{text}</h2>
        </div>
    )
}

export default Loading;