import React, { useEffect, useState } from 'react';
import { useAtomValue } from 'jotai/react';
import { tokenAtom } from '../atoms/globalStorage';
import QRCode from "react-qr-code";

type QrCodeProps = {
    ticketId: number
}

const QrCode: React.FC<QrCodeProps> = ({ ticketId }) => {
    const [qrcode, setQrcode] = useState<string | undefined>(undefined);

    const token = useAtomValue(tokenAtom);

    const svgNode = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgNode.classList.add('w-full', 'h-auto');

    useEffect(() => {
        if (!ticketId)
            return;

        setQrcode(JSON.stringify({
            token: token,
            ticketId: ticketId
        }));

    }, [ticketId]);

    
    return (
        <>
            { qrcode ?
                <div className='w-full'>
                    <QRCode
                        value={qrcode}
                        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                    />
                </div>
            : null }
        </>
    );
};

export default QrCode;
