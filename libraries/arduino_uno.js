// libraries/arduino_uno.js
export const Arduino_Uno = {
    width: 240, height: 340,
    svg: `
        <rect x="0" y="0" width="240" height="340" rx="10" fill="#006468" stroke="#004347" stroke-width="3"/>
        <path d="M 0 0 L 20 0 L 20 10 L 0 10 Z" fill="#006468"/> <!-- Small notch filler -->
        <!-- USB Port -->
        <rect x="20" y="0" width="40" height="30" fill="#d1d5db" rx="2" stroke="#9ca3af" stroke-width="2"/>
        <!-- DC Jack -->
        <rect x="180" y="0" width="40" height="45" fill="#111827" rx="2"/>
        <rect x="185" y="0" width="30" height="10" fill="#000"/>
        <!-- Microcontroller ATMega328p -->
        <rect x="100" y="100" width="40" height="180" fill="#1f2937" rx="2"/>
        <text x="120" y="190" fill="#4b5563" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle" transform="rotate(-90 120 190)">ATMEGA328P</text>
        <!-- Arduino Logo -->
        <circle cx="120" cy="50" r="15" fill="none" stroke="#fff" stroke-width="3"/>
        <text x="120" y="55" fill="#fff" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle">- +</text>
        <text x="120" y="80" fill="#fff" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle">UNO</text>
    `,
    pins: {
        // --- RIGHT SIDE (Digital & PWM) ---
        "SCL":  { x: 240, y: 30 },
        "SDA":  { x: 240, y: 45 },
        "AREF": { x: 240, y: 60 },
        "GND_1":{ x: 240, y: 75, aliases: ["GND"] },
        "D13":  { x: 240, y: 90 },
        "D12":  { x: 240, y: 105 },
        "D11":  { x: 240, y: 120 },
        "D10":  { x: 240, y: 135 },
        "D9":   { x: 240, y: 150 },
        "D8":   { x: 240, y: 165 },
        // Gap
        "D7":   { x: 240, y: 195 },
        "D6":   { x: 240, y: 210 },
        "D5":   { x: 240, y: 225 },
        "D4":   { x: 240, y: 240 },
        "D3":   { x: 240, y: 255 },
        "D2":   { x: 240, y: 270 },
        "TX":   { x: 240, y: 285, aliases: ["D1", "TXD"] },
        "RX":   { x: 240, y: 300, aliases: ["D0", "RXD"] },

        // --- LEFT SIDE (Power & Analog) ---
        "NC":   { x: 0, y: 60 },
        "IOREF":{ x: 0, y: 75 },
        "RESET":{ x: 0, y: 90 },
        "3V3":  { x: 0, y: 105 },
        "5V":   { x: 0, y: 120 },
        "GND_2":{ x: 0, y: 135, aliases: ["GND"] },
        "GND_3":{ x: 0, y: 150, aliases: ["GND"] },
        "VIN":  { x: 0, y: 165 },
        // Gap
        "A0":   { x: 0, y: 195 },
        "A1":   { x: 0, y: 210 },
        "A2":   { x: 0, y: 225 },
        "A3":   { x: 0, y: 240 },
        "A4":   { x: 0, y: 255 },
        "A5":   { x: 0, y: 270 }
    }
};