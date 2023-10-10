import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

window.addEventListener('DOMContentLoaded', async () => {
    const container = document.getElementById('root');
    if (!container) return;
    
    const root = createRoot(container);
    
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
    );
})