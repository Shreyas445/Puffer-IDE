// libraries/lora_sx1278.js

export const LoRa_SX1278 = {
    width: 150, 
    height: 170,
    svg: `
        <!-- Dark Blue / Black PCB Base -->
        <rect x="0" y="0" width="150" height="170" rx="5" fill="#091b34" stroke="#1d4ed8" stroke-width="2.5"/>
        
        <!-- Metal RF Shield Can -->
        <rect x="25" y="25" width="100" height="100" rx="3" fill="#cbd5e1" stroke="#94a3b8" stroke-width="1.5"/>
        <rect x="28" y="28" width="94" height="94" rx="2" fill="#e2e8f0"/>
        
        <!-- Shield Engraving -->
        <text x="75" y="48" fill="#1e293b" font-family="'Segoe UI', sans-serif" font-size="10" font-weight="900" text-anchor="middle">Ai-Thinker</text>
        <text x="75" y="62" fill="#0369a1" font-family="monospace" font-size="11" font-weight="bold" text-anchor="middle">Ra-02</text>
        <text x="75" y="74" fill="#64748b" font-family="sans-serif" font-size="7" font-weight="bold" text-anchor="middle">SX1278 • 433MHz</text>
        
        <!-- LoRa Wave Spectrum Icon -->
        <path d="M 60 90 A 15 15 0 0 1 90 90" fill="none" stroke="#2563eb" stroke-width="2" stroke-linecap="round"/>
        <path d="M 65 95 A 10 10 0 0 1 85 95" fill="none" stroke="#2563eb" stroke-width="2" stroke-linecap="round"/>
        <circle cx="75" cy="100" r="2.5" fill="#2563eb"/>
        
        <!-- IPEX / U.FL Gold Antenna Connector -->
        <circle cx="75" cy="142" r="7" fill="#fbbf24" stroke="#d97706" stroke-width="1.5"/>
        <circle cx="75" cy="142" r="3.5" fill="#1e293b"/>
        <circle cx="75" cy="142" r="1.5" fill="#fbbf24"/>
        <text x="75" y="160" fill="#94a3b8" font-family="sans-serif" font-size="6" font-weight="bold" text-anchor="middle">IPEX ANT</text>
        
        <!-- Pin Header Strips -->
        <rect x="0" y="16" width="10" height="138" fill="#0f172a" rx="1"/>
        <rect x="140" y="16" width="10" height="138" fill="#0f172a" rx="1"/>
    `,
    pins: {
        // Left Side Header Pins
        "GND_1": { x: 0, y: 25, aliases: ["GND"] },
        "3V3":   { x: 0, y: 45, aliases: ["VCC"] },
        "RST":   { x: 0, y: 65, aliases: ["RESET"] },
        "DIO0":  { x: 0, y: 85, aliases: ["INT", "IRQ"] },
        "DIO1":  { x: 0, y: 105 },
        "DIO2":  { x: 0, y: 125 },
        "DIO3":  { x: 0, y: 145 },
        
        // Right Side Header Pins
        "DIO4":  { x: 150, y: 25 },
        "DIO5":  { x: 150, y: 45 },
        "SCK":   { x: 150, y: 65, aliases: ["CLK"] },
        "MISO":  { x: 150, y: 85 },
        "MOSI":  { x: 150, y: 105 },
        "NSS":   { x: 150, y: 125, aliases: ["CS", "CSN", "SS"] },
        "ANT":   { x: 150, y: 145, aliases: ["ANTENNA"] }
    }
};
