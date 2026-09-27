// libraries/l7805cv.js

export const L7805CV = {
    category: 'Power',
    description: '5V 1.5A Voltage Regulator / Power Transistor (TO-220)',
    width: 70, 
    height: 110,
    svg: `
        <!-- TO-220 Silver Heatsink Tab -->
        <rect x="12" y="0" width="46" height="34" rx="3" fill="#cbd5e1" stroke="#94a3b8" stroke-width="1.5"/>
        <circle cx="35" cy="16" r="7" fill="#090d16" stroke="#64748b" stroke-width="1.5"/>
        
        <!-- Molded Black Body -->
        <rect x="10" y="30" width="50" height="45" rx="2" fill="#18181b" stroke="#27272a" stroke-width="1.5"/>
        <!-- Notch / Bevel -->
        <polygon points="10,30 16,36 16,68 10,75" fill="#27272a"/>
        <polygon points="60,30 54,36 54,68 60,75" fill="#0f172a"/>
        
        <!-- Laser Etched Markings -->
        <circle cx="20" cy="42" r="3.5" fill="#475569"/>
        <text x="20" y="44" fill="#cbd5e1" font-family="sans-serif" font-size="5" font-weight="900" text-anchor="middle">ST</text>
        <text x="37" y="47" fill="#f8fafc" font-family="'Segoe UI', sans-serif" font-size="7.5" font-weight="bold" text-anchor="middle">L7805CV</text>
        <text x="35" y="60" fill="#38bdf8" font-family="monospace" font-size="6" font-weight="bold" text-anchor="middle">5V 1.5A</text>
        
        <!-- 3 Solder Leads (Lead 1=IN, Lead 2=GND, Lead 3=OUT) -->
        <line x1="20" y1="75" x2="20" y2="110" stroke="#94a3b8" stroke-width="4" stroke-linecap="round"/>
        <line x1="35" y1="75" x2="35" y2="110" stroke="#94a3b8" stroke-width="4" stroke-linecap="round"/>
        <line x1="50" y1="75" x2="50" y2="110" stroke="#94a3b8" stroke-width="4" stroke-linecap="round"/>
        
        <!-- Pin Labels on Body -->
        <text x="20" y="72" fill="#94a3b8" font-family="monospace" font-size="6" text-anchor="middle">IN</text>
        <text x="35" y="72" fill="#94a3b8" font-family="monospace" font-size="6" text-anchor="middle">GND</text>
        <text x="50" y="72" fill="#94a3b8" font-family="monospace" font-size="6" text-anchor="middle">OUT</text>
    `,
    pins: {
        "IN":  { x: 20, y: 110, aliases: ["VIN", "VCC", "Gate", "G", "INPUT", "1"] },
        "GND": { x: 35, y: 110, aliases: ["GROUND", "Drain", "D", "0V", "COM", "2"] },
        "OUT": { x: 50, y: 110, aliases: ["VOUT", "5V", "Source", "S", "OUTPUT", "3"] }
    }
};
