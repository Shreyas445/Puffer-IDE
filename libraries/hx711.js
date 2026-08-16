// libraries/hx711.js
export const HX711 = {
    width: 140, height: 120,
    svg: `
        <!-- Green PCB Backing -->
        <rect x="0" y="0" width="140" height="120" rx="4" fill="#15803d" stroke="#166534" stroke-width="3"/>
        
        <!-- HX711 IC -->
        <rect x="55" y="30" width="30" height="60" fill="#1a1a1a" rx="2"/>
        <text x="70" y="60" fill="#4b5563" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle" transform="rotate(-90 70 60)">HX711</text>
        
        <!-- SMD Resistors and Capacitors -->
        <rect x="35" y="30" width="10" height="6" fill="#333" rx="1"/>
        <rect x="35" y="80" width="10" height="6" fill="#333" rx="1"/>
        <rect x="95" y="40" width="10" height="6" fill="#a16207" rx="1"/>
        <rect x="95" y="70" width="10" height="6" fill="#a16207" rx="1"/>
        
        <!-- PCB Traces Decoration -->
        <path d="M 20 20 L 40 40 M 120 100 L 100 80" stroke="#166534" stroke-width="2" fill="none"/>
    `,
    pins: {
        // Left Side (Load Cell Inputs) - Spaced by 18px
        "E_PLUS":  { x: 0, y: 15, aliases: ["E+"] },
        "E_MINUS": { x: 0, y: 33, aliases: ["E-"] },
        "A_MINUS": { x: 0, y: 51, aliases: ["A-"] },
        "A_PLUS":  { x: 0, y: 69, aliases: ["A+"] },
        "B_MINUS": { x: 0, y: 87, aliases: ["B-"] },
        "B_PLUS":  { x: 0, y: 105, aliases: ["B+"] },
        
        // Right Side (Arduino Data)
        "GND":     { x: 140, y: 33 },
        "DT":      { x: 140, y: 51, aliases: ["DAT"] },
        "SCK":     { x: 140, y: 69, aliases: ["CLK"] },
        "VCC":     { x: 140, y: 87 }
    }
};