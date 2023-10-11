import { IonSkeletonText } from '@ionic/react';
import React, { useMemo } from 'react'

const BarcodePlacholder: React.FC = () => {
    return useMemo(() => (
        <div className='flex flex-column align-items-center gap-2'>
            <div className='flex flex-row'>
                <IonSkeletonText animated={true} style={{ width: '2vw', height: '30vw' }} className='border-noround' />
                { Array.from(Array(30)).map((_, index) => (
                    <>
                        { Math.random() >= .5 ?
                            <IonSkeletonText key={index} animated={true} style={{ width: '2vw', height: '30vw' }} className='border-noround' />
                        :
                            <div key={index} style={{ width: '2vw', height: '30vw' }} />
                        }
                    </>
                ))}
                <IonSkeletonText animated={true} style={{ width: '2vw', height: '30vw' }} className='border-noround' />
            </div>
            <IonSkeletonText animated={true} style={{ width: '30vw', height: '7vw' }} className='border-round-xl' />
        </div>
    ), []);
}

export default BarcodePlacholder;