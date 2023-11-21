import React from 'react'
import { IonImg } from '@ionic/react'
import { StructureMinType } from '../../../types/structure'

type StructureProps = {
    structure: StructureMinType['structure']
}

const Structure: React.FC<StructureProps> = ({ structure }) => {
    return (
        <div className='w-full p-2 my-2 relative overflow-hidden'>
            <div className='flex align-items-center justify-content-center relative border-round-2xl overflow-hidden aspect-1'>
                <IonImg src={structure.image} className='w-full h-full img-cover' />
            </div>
            <div className='flex flex-column align-items-start gap-1 mt-1 text-sm'>
                <span className='font-bold'>{structure.name}</span>
            </div>
        </div>
    )
}

export default Structure;