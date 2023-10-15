import React, { useEffect } from 'react'
import { CheckType } from '../../types/check'
import { IonImg } from '@ionic/react'
import { API_URL } from '../../consts/api'

type CheckProps = {
    check: CheckType
    noConnection: boolean
}

const Check: React.FC<CheckProps> = ({ check, noConnection }) => {
    return (
        <div className='bg-primary w-full my-2 border-round-3xl relative overflow-hidden'>
            { !noConnection ? <IonImg src={`${API_URL}${check.image}`} className={`absolute top-50 left-50 translate-50 img-cover w-full h-full low-brightness ${check.quantity === 0 ? 'filter-gray' : null}`} /> : null }
            <div className='flex flex-column justify-content-between align-items-start gap-5 z-1 p-3 relative'>
                <div className='flex flex-row justify-content-between gap-4 w-full'>
                    <h2 className='m-0 font-bold'>{check.structureName}</h2>
                    <h2 className='m-0 font-bold text-medium flex-shrink-0'>{check.value} €</h2>
                </div>
                <h2 className='m-0 font-bold text-4xl'>X {check.quantity}</h2>
            </div>
        </div>
    )
}

export default Check;