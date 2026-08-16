// libraries/micro_sd.js
export const Micro_SD = {
    width: 160, height: 120,
    svg: `
        <!-- Blue PCB Backing -->
        <rect x="0" y="0" width="160" height="120" rx="5" fill="#1d4ed8" stroke="#1e3a8a" stroke-width="3"/>
        
        <!-- Silver SD Card Slot Housing -->
        <rect x="10" y="20" width="75" height="80" rx="2" fill="#d1d5db" stroke="#9ca3af" stroke-width="2"/>
        <rect x="15" y="25" width="65" height="70" rx="1" fill="#e5e7eb"/>
        <path d="M 85 30 L 85 90 L 70 90 Z" fill="#9ca3af" opacity="0.3"/> <!-- SD Slot Detailing -->
        
        <!-- LVC125A Level Shifter IC -->
        <rect x="100" y="25" width="20" height="25" fill="#1a1a1a" rx="1"/>
        <text x="110" y="38" fill="#4b5563" font-family="sans-serif" font-size="6" font-weight="bold" text-anchor="middle" transform="rotate(-90 110 38)">LVC125A</text>
        
        <!-- AMS1117 3.3V Regulator -->
        <rect x="100" y="75" width="18" height="18" fill="#1a1a1a" rx="1"/>
        <rect x="104" y="70" width="10" height="5" fill="#9ca3af"/> <!-- Tab -->
        <text x="109" y="86" fill="#4b5563" font-family="sans-serif" font-size="6" font-weight="bold" text-anchor="middle">3.3V</text>
    `,
    pins: {
        // Right Side Data Pins - Spaced by 16px
        "CS":   { x: 160, y: 20 },
        "SCK":  { x: 160, y: 36, aliases: ["CLK"] },
        "MOSI": { x: 160, y: 52 },
        "MISO": { x: 160, y: 68 },
        "VCC":  { x: 160, y: 84, aliases: ["5V"] },
        "GND":  { x: 160, y: 100 }
    }
};