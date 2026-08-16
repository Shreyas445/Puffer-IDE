// libraries/stm32_bluepill.js

export const STM32_Bluepill = {
    width: 200, 
    height: 480,
    svg: `
        <!-- Main Blue PCB -->
        <rect x="0" y="0" width="200" height="480" rx="8" fill="#025b96" stroke="#013c63" stroke-width="3"/>
        
        <!-- STM32 Microcontroller -->
        <rect x="60" y="200" width="80" height="80" rx="2" fill="#1a1a1a" transform="rotate(45 100 240)"/>
        <text x="100" y="244" fill="#6b7280" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle" transform="rotate(-45 100 240)">STM32</text>
        
        <!-- Micro USB Port (Bottom) -->
        <rect x="75" y="465" width="50" height="15" fill="#d1d5db" rx="2"/>
        <rect x="85" y="475" width="30" height="5" fill="#475569"/>
        
        <!-- Yellow Boot Jumpers -->
        <rect x="70" y="100" width="60" height="35" fill="#ca8a04" rx="2"/>
        <rect x="75" y="105" width="20" height="10" fill="#000"/>
        <rect x="75" y="120" width="20" height="10" fill="#000"/>
        <rect x="105" y="105" width="20" height="10" fill="#eab308"/>
        <rect x="105" y="120" width="20" height="10" fill="#eab308"/>
        
        <!-- Reset Button & Crystal -->
        <circle cx="100" cy="340" r="12" fill="#94a3b8"/>
        <circle cx="100" cy="340" r="6" fill="#1e293b"/>
        <rect x="85" y="150" width="30" height="15" rx="7" fill="#94a3b8"/>
        
        <!-- SWD Header (Top) -->
        <rect x="80" y="10" width="40" height="15" fill="#1a1a1a"/>
        <circle cx="85" cy="17" r="2" fill="#eab308"/>
        <circle cx="95" cy="17" r="2" fill="#eab308"/>
        <circle cx="105" cy="17" r="2" fill="#eab308"/>
        <circle cx="115" cy="17" r="2" fill="#eab308"/>
    `,
    pins: {
        // --- LEFT SIDE PINS (Top to Bottom) ---
        "VBAT":  { x: 10, y: 30, aliases: ["BAT"] },
        "PC13":  { x: 10, y: 52, aliases: ["LED"] },
        "PC14":  { x: 10, y: 74 },
        "PC15":  { x: 10, y: 96 },
        "PA0":   { x: 10, y: 118 },
        "PA1":   { x: 10, y: 140 },
        "PA2":   { x: 10, y: 162 },
        "PA3":   { x: 10, y: 184 },
        "PA4":   { x: 10, y: 206 },
        "PA5":   { x: 10, y: 228 },
        "PA6":   { x: 10, y: 250 },
        "PA7":   { x: 10, y: 272 },
        "PB0":   { x: 10, y: 294 },
        "PB1":   { x: 10, y: 316 },
        "PB10":  { x: 10, y: 338 },
        "PB11":  { x: 10, y: 360 },
        "RESET": { x: 10, y: 382, aliases: ["NRST"] },
        "3V3_1": { x: 10, y: 404, aliases: ["3V3"] },
        "GND_1": { x: 10, y: 426, aliases: ["GND"] },
        "GND_2": { x: 10, y: 448, aliases: ["GND"] },

        // --- RIGHT SIDE PINS (Top to Bottom) ---
        "3V3_2": { x: 190, y: 30, aliases: ["3V3"] },
        "GND_3": { x: 190, y: 52, aliases: ["GND"] },
        "5V":    { x: 190, y: 74, aliases: ["VIN"] },
        "PB9":   { x: 190, y: 96 },
        "PB8":   { x: 190, y: 118 },
        "PB7":   { x: 190, y: 140 },
        "PB6":   { x: 190, y: 162 },
        "PB5":   { x: 190, y: 184 },
        "PB4":   { x: 190, y: 206 },
        "PB3":   { x: 190, y: 228 },
        "PA15":  { x: 190, y: 250 },
        "PA12":  { x: 190, y: 272 },
        "PA11":  { x: 190, y: 294 },
        "PA10":  { x: 190, y: 316 },
        "PA9":   { x: 190, y: 338 },
        "PA8":   { x: 190, y: 360 },
        "PB15":  { x: 190, y: 382 },
        "PB14":  { x: 190, y: 404 },
        "PB13":  { x: 190, y: 426 },
        "PB12":  { x: 190, y: 448 }
    }
};