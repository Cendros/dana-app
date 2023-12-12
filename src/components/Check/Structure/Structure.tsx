import React from 'react'
import { IonImg, useIonModal } from '@ionic/react'
import useStructure from '../../../hooks/useStructure'
import Details from './Details'
import { StructureType } from '../../../types/structure'

type StructureProps = {
    structure: StructureType
}

const Structure: React.FC<StructureProps> = ({ structure }) => {
    const { setStructure } = useStructure();

    const DetailsModal = ({ onDismiss }: { onDismiss: () => void }) => (
        <Details dismiss={onDismiss} />
    )

    const [presentModal, dismissModal] = useIonModal(DetailsModal, {
        onDismiss: () => dismissModal()
    })

    const onClick = () => {
        setStructure(structure.id);
        presentModal();
    }

    return (
        <div className='w-full p-2 relative overflow-hidden' onClick={onClick}>
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