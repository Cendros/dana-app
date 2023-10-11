import React, { useEffect, useState } from 'react';
import { IonContent, IonPage } from '@ionic/react';
import Header from '../components/Header';
import useCode128 from '../hooks/useCode128';
import JsBarcode from 'jsbarcode';
import BarcodePlacholder from '../components/BarcodePlacholder';

const Barcode: React.FC = () => {
    const code128 = useCode128();
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
                    <div dangerouslySetInnerHTML={{ __html: svg}} className='border-3 border-primary border-round-3xl p-2'></div>
                :
                    <div className='border-3 border-primary border-round-3xl p-4 w-full flex justify-content-center'>
                        <BarcodePlacholder />
                    </div>
                }
            </IonContent>
        </IonPage>
    );
};

export default Barcode;
