import React, { useEffect, useState } from 'react';
import { IonContent, IonIcon, IonPage, IonText } from '@ionic/react';
import Header from '../components/Header';
import useCode128 from '../hooks/useCode128';
import JsBarcode from 'jsbarcode';
import BarcodePlacholder from '../components/BarcodePlacholder';
import { warning } from 'ionicons/icons';

const Barcode: React.FC = () => {
    const { code128, isStored } = useCode128();
    const [svg, setSvg] = useState<string | undefined>();

    const svgNode = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgNode.classList.add('w-full', 'h-auto');

    useEffect(() => {
        if (!code128)
            return;

        JsBarcode(svgNode, code128, {
            xmlDocument: document,
            background: '#00000000',
            height: 75
        });

        const xmlSerializer = new XMLSerializer();
        setSvg(xmlSerializer.serializeToString(svgNode));
    }, [code128]);

    
    return (
        <IonPage>
            <Header />
            <IonContent fullscreen className='bg-light ion-padding'>
                <div className='flex flex-column align-items-center gap-3 mb-5'>
                    <h1 className='text-4xl'>Scan code-barres</h1>
                    <span className='text-center'>Présentez ce code-barres en caisse pour utiliser vos chèques Apollo</span>
                </div>
                { svg ?
                    <div dangerouslySetInnerHTML={{ __html: svg}} className='border-3 border-primary border-round-3xl p-2 mb-5'></div>
                :
                    <div className='border-3 border-primary border-round-3xl p-4 w-full flex justify-content-center'>
                        <BarcodePlacholder />
                    </div>
                }
                { isStored ?
                    <div className='border-2 border-warning border-round-xl flex align-items-center gap-2 p-3'>
                        <IonIcon icon={warning} color='warning' size='large' className='w-4' />
                        <IonText color='warning'>Vous semblez être hors ligne, ce code-barres est possiblement invalide.</IonText>
                    </div>
                : null }
            </IonContent>
        </IonPage>
    );
};

export default Barcode;
