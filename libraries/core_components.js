// libraries/core_components.js

export const CoreComponents = {
    GND: {
        width: 40, height: 40,
        svg: `
            <line x1="20" y1="0" x2="20" y2="20" stroke="#94a3b8" stroke-width="3"/>
            <line x1="5" y1="20" x2="35" y2="20" stroke="#94a3b8" stroke-width="3"/>
            <line x1="10" y1="28" x2="30" y2="28" stroke="#94a3b8" stroke-width="3"/>
            <line x1="15" y1="36" x2="25" y2="36" stroke="#94a3b8" stroke-width="3"/>
        `,
        pins: { "IN": { x: 20, y: 0 } }
    },
    VCC: {
        width: 40, height: 40,
        svg: `
            <line x1="20" y1="20" x2="20" y2="40" stroke="#ef4444" stroke-width="3"/>
            <path d="M 10 20 L 20 5 L 30 20 Z" fill="#ef4444"/>
            <text x="20" y="-5" text-anchor="middle" fill="#ef4444" font-family="monospace" font-size="14" font-weight="bold">VCC</text>
        `,
        pins: { "OUT": { x: 20, y: 40 } }
    },
    Capacitor: {
        width: 60, height: 40,
        svg: `
            <line x1="0" y1="20" x2="25" y2="20" stroke="#94a3b8" stroke-width="3"/>
            <line x1="35" y1="20" x2="60" y2="20" stroke="#94a3b8" stroke-width="3"/>
            <line x1="25" y1="5" x2="25" y2="35" stroke="#94a3b8" stroke-width="3"/>
            <line x1="35" y1="5" x2="35" y2="35" stroke="#94a3b8" stroke-width="3"/>
        `,
        pins: { "1": { x: 0, y: 20 }, "2": { x: 60, y: 20 } }
    },
    NPN_Transistor: {
        width: 80, height: 100,
        svg: `
            <line x1="0" y1="50" x2="30" y2="50" stroke="#94a3b8" stroke-width="3"/>
            <line x1="30" y1="20" x2="30" y2="80" stroke="#94a3b8" stroke-width="4"/>
            <line x1="30" y1="35" x2="80" y2="0" stroke="#94a3b8" stroke-width="3"/>
            <line x1="30" y1="65" x2="80" y2="100" stroke="#94a3b8" stroke-width="3"/>
            <polygon points="65,90 80,100 75,80" fill="#94a3b8"/> 
            <circle cx="45" cy="50" r="45" fill="none" stroke="#94a3b8" stroke-width="2"/>
            <text x="15" y="45" fill="#e2e8f0" font-family="monospace" font-size="12">B</text>
            <text x="80" y="20" fill="#e2e8f0" font-family="monospace" font-size="12">C</text>
            <text x="80" y="85" fill="#e2e8f0" font-family="monospace" font-size="12">E</text>
        `,
        pins: { "B": { x: 0, y: 50 }, "C": { x: 80, y: 0 }, "E": { x: 80, y: 100 } }
    },
    N_MOSFET: {
        width: 80, height: 100,
        svg: `
            <line x1="0" y1="50" x2="20" y2="50" stroke="#94a3b8" stroke-width="3"/>
            <line x1="20" y1="20" x2="20" y2="80" stroke="#94a3b8" stroke-width="4"/> 
            <line x1="30" y1="20" x2="30" y2="40" stroke="#94a3b8" stroke-width="4"/>
            <line x1="30" y1="45" x2="30" y2="55" stroke="#94a3b8" stroke-width="4"/>
            <line x1="30" y1="60" x2="30" y2="80" stroke="#94a3b8" stroke-width="4"/>
            <line x1="30" y1="30" x2="80" y2="30" stroke="#94a3b8" stroke-width="3"/>
            <line x1="80" y1="30" x2="80" y2="0" stroke="#94a3b8" stroke-width="3"/>
            <line x1="30" y1="70" x2="80" y2="70" stroke="#94a3b8" stroke-width="3"/>
            <line x1="80" y1="70" x2="80" y2="100" stroke="#94a3b8" stroke-width="3"/>
            <line x1="30" y1="50" x2="80" y2="50" stroke="#94a3b8" stroke-width="3"/>
            <polygon points="45,50 55,45 55,55" fill="#94a3b8"/> 
            <line x1="80" y1="50" x2="80" y2="70" stroke="#94a3b8" stroke-width="3"/>
        `,
        pins: { "G": { x: 0, y: 50 }, "D": { x: 80, y: 0 }, "S": { x: 80, y: 100 } }
    },
    Antenna: {
        width: 60, height: 60,
        svg: `
            <line x1="30" y1="60" x2="30" y2="20" stroke="#94a3b8" stroke-width="3"/>
            <line x1="30" y1="20" x2="0" y2="0" stroke="#94a3b8" stroke-width="3"/>
            <line x1="30" y1="20" x2="60" y2="0" stroke="#94a3b8" stroke-width="3"/>
            <line x1="0" y1="0" x2="60" y2="0" stroke="#94a3b8" stroke-width="3"/>
        `,
        pins: { "IN": { x: 30, y: 60 } }
    }
};