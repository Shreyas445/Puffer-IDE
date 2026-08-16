// libraries/sim800l.js
export const SIM800L = {
    width: 140, height: 160,
    svg: `
        <!-- Red PCB Backing -->
        <rect x="0" y="0" width="140" height="160" rx="4" fill="#dc2626" stroke="#991b1b" stroke-width="3"/>
        
        <!-- Silver EMI Shield -->
        <rect x="35" y="50" width="80" height="90" rx="3" fill="#004e6f" stroke="#9cb2dd" stroke-width="2"/>
        <!-- Shield Text / Barcode -->
        <text x="75" y="75" fill="#745f00" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle">SIM800L</text>
        <rect x="60" y="90" width="30" height="30" fill="#a95604"/>
        
        <!-- Antenna Connector -->
        <circle cx="20" cy="20" r="8" fill="#fbbf24"/>
        <circle cx="20" cy="20" r="4" fill="#000"/>
        
        <!-- Large Yellow Tantalum Capacitor -->
        <rect x="50" y="15" width="40" height="20" fill="#d97706" rx="2"/>
        <rect x="50" y="15" width="8" height="20" fill="#a16207"/>
    `,
    pins: {
        // Left Side - Spaced by 20px
        "NET": { x: 0, y: 30 },
        "VCC": { x: 0, y: 50 },
        "RST": { x: 0, y: 70, aliases: ["RESET"] },
        "RXD": { x: 0, y: 90, aliases: ["RX"] },
        "TXD": { x: 0, y: 110, aliases: ["TX"] },
        "GND": { x: 0, y: 130 },
        
        // Right Side - Spaced by 20px
        "RING":     { x: 140, y: 30 },
        "DTR":      { x: 140, y: 50 },
        "MIC_PLUS": { x: 140, y: 70, aliases: ["MIC+"] },
        "MIC_MINUS":{ x: 140, y: 90, aliases: ["MIC-"] },
        "SPK_PLUS": { x: 140, y: 110, aliases: ["SPK+"] },
        "SPK_MINUS":{ x: 140, y: 130, aliases: ["SPK-"] }
    }
};