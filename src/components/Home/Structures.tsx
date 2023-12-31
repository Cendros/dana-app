import React from 'react';
import Loading from '../Loading';
import useStructures from '../../hooks/useStructures';
import Structure from '../Check/Structure/Structure';
import { StructureType } from '../../types/structure';

const Structures: React.FC = () => {
    const structures = useStructures();
    
    return (
        <>
            { structures ?
                <>
                    <h2 className='align-self-start font-bold'>Les structures</h2>
                    { structures.length ?
                        <div className='grid'>
                            { structures.map((structure: StructureType, i) => (
                                <div key={i} className='col-6'>
                                    <Structure structure={structure} />
                                </div>
                            )) }
                        </div>
                    :
                        <>
                            <h2>Votre société ne propose aucune offre pour le moment.</h2>
                        </>
                    }
                </>
            : <Loading text='Chargement des structures' /> }
        </>
    )
}

export default Structures;