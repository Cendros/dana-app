import React from 'react'
import { CheckType } from '../../types/check'

type CheckProps = {
    check: CheckType
}

const Check = ({ check }: CheckProps) => {
    return (
        <div className='bg-primary flex flex-column justify-content-between align-items-start gap-5 w-full p-3 my-2 border-round-3xl'>
            <div className='flex flex-row justify-content-between gap-4 w-full'>
                <h2 className='m-0 font-bold'>{check.structureName}</h2>
                <h2 className='m-0 font-bold text-medium flex-shrink-0'>{check.value} €</h2>
            </div>
            <h2 className='m-0 font-bold text-4xl'>X {check.quantity}</h2>
        </div>
    )
}

export default Check;