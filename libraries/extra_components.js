// libraries/extra_components.js

export const ExtraComponents = {
    IRFZ44N: {
        width: 60, height: 100,
        svg: `
            <!-- Silver Tab -->
            <rect x="10" y="0" width="40" height="30" fill="#d1d5db" rx="2" stroke="#9ca3af" stroke-width="1"/>
            <circle cx="30" cy="15" r="6" fill="#0d1117"/>
            <!-- Black Body -->
            <rect x="10" y="30" width="40" height="40" fill="#1f2937" rx="2"/>
            <text x="30" y="55" fill="#f3f4f6" font-family="sans-serif" font-size="8" font-weight="bold" text-anchor="middle">IRFZ44N</text>
            <!-- 3 Pins -->
            <line x1="20" y1="70" x2="20" y2="100" stroke="#9ca3af" stroke-width="4"/>
            <line x1="30" y1="70" x2="30" y2="100" stroke="#9ca3af" stroke-width="4"/>
            <line x1="40" y1="70" x2="40" y2="100" stroke="#9ca3af" stroke-width="4"/>
        `,
        pins: { "Gate": {x: 20, y: 100, aliases: ["G"]}, "Drain": {x: 30, y: 100, aliases: ["D"]}, "Source": {x: 40, y: 100, aliases: ["S"]} }
    },
    L7805: {
        width: 60, height: 100,
        svg: `
            <!-- Silver Tab -->
            <rect x="10" y="0" width="40" height="30" fill="#d1d5db" rx="2" stroke="#9ca3af" stroke-width="1"/>
            <circle cx="30" cy="15" r="6" fill="#0d1117"/>
            <!-- Black Body -->
            <rect x="10" y="30" width="40" height="40" fill="#1f2937" rx="2"/>
            <text x="30" y="55" fill="#f3f4f6" font-family="sans-serif" font-size="9" font-weight="bold" text-anchor="middle">L7805</text>
            <!-- 3 Pins -->
            <line x1="20" y1="70" x2="20" y2="100" stroke="#9ca3af" stroke-width="4"/>
            <line x1="30" y1="70" x2="30" y2="100" stroke="#9ca3af" stroke-width="4"/>
            <line x1="40" y1="70" x2="40" y2="100" stroke="#9ca3af" stroke-width="4"/>
        `,
        pins: { "IN": {x: 20, y: 100}, "GND": {x: 30, y: 100}, "OUT": {x: 40, y: 100} }
    },
    Photo_Diode: {
        width: 60, height: 40,
        svg: `
            <line x1="0" y1="20" x2="15" y2="20" stroke="#94a3b8" stroke-width="2.5"/>
            <line x1="35" y1="20" x2="60" y2="20" stroke="#94a3b8" stroke-width="2.5"/>
            <path d="M 15 10 L 15 30 L 35 20 Z" fill="#030712" stroke="#1f2937" stroke-width="2"/>
            <line x1="35" y1="10" x2="35" y2="30" stroke="#1f2937" stroke-width="3"/>
            <!-- Light Incoming Arrows -->
            <path d="M 20 0 L 25 8 M 25 8 L 22 8 M 25 8 L 25 5" fill="none" stroke="#fbbf24" stroke-width="2"/>
            <path d="M 28 5 L 33 13 M 33 13 L 30 13 M 33 13 L 33 10" fill="none" stroke="#fbbf24" stroke-width="2"/>
            <text x="5" y="38" class="value-label" font-size="16">+</text>
            <text x="45" y="38" class="value-label" font-size="16">-</text>
        `,
        pins: { "+": {x: 0, y: 20, aliases: ["Anode"]}, "-": {x: 60, y: 20, aliases: ["Cathode"]} }
    },
    NRF24L01: {
        width: 140, height: 90,
        svg: `
            <!-- Black PCB -->
            <rect x="0" y="0" width="140" height="90" fill="#111827" rx="2" stroke="#374151" stroke-width="2"/>
            <!-- Header Block -->
            <rect x="10" y="10" width="20" height="70" fill="#1f2937" rx="2"/>
            <!-- Crystal & IC -->
            <rect x="50" y="60" width="30" height="15" fill="#d1d5db" rx="6"/>
            <rect x="60" y="30" width="20" height="20" fill="#000" rx="1"/>
            <text x="70" y="43" fill="#6b7280" font-family="sans-serif" font-size="5" text-anchor="middle">NRF</text>
            <!-- Zigzag Antenna -->
            <path d="M 110 10 L 130 10 L 130 25 L 110 25 L 110 40 L 130 40 L 130 55 L 110 55 L 110 70 L 130 70 L 130 80 L 110 80" fill="none" stroke="#d97706" stroke-width="3"/>
        `,
        pins: {
            "GND": {x: 0, y: 10}, "VCC": {x: 0, y: 20}, "CE": {x: 0, y: 30}, "CSN": {x: 0, y: 40},
            "SCK": {x: 0, y: 50}, "MOSI": {x: 0, y: 60}, "MISO": {x: 0, y: 70}, "IRQ": {x: 0, y: 80}
        }
    },
    Buzzer: {
        width: 80, height: 60,
        svg: `
            <!-- PCB -->
            <rect x="0" y="0" width="80" height="60" fill="#111827" rx="2"/>
            <!-- Cylinder Buzzer -->
            <circle cx="45" cy="30" r="24" fill="#1f2937" stroke="#030712" stroke-width="2"/>
            <circle cx="45" cy="30" r="6" fill="#030712"/>
            <text x="55" y="35" fill="#374151" font-family="monospace" font-size="16" font-weight="bold">+</text>
            <!-- Pin Labels on PCB -->
            <text x="15" y="18" fill="#e5e7eb" font-family="monospace" font-size="12">-</text>
            <text x="15" y="52" fill="#e5e7eb" font-family="monospace" font-size="12">S</text>
        `,
        pins: { "-": {x: 0, y: 15, aliases: ["GND"]}, "VCC": {x: 0, y: 30}, "S": {x: 0, y: 45, aliases: ["SIG", "I/O"]} }
    },
    DC_Fan_5V: {
        width: 80, height: 80,
        svg: `
            <!-- Frame -->
            <rect x="0" y="0" width="80" height="80" fill="#1f2937" rx="8" stroke="#111827" stroke-width="4"/>
            <circle cx="10" cy="10" r="3" fill="#000"/><circle cx="70" cy="10" r="3" fill="#000"/>
            <circle cx="10" cy="70" r="3" fill="#000"/><circle cx="70" cy="70" r="3" fill="#000"/>
            <circle cx="40" cy="40" r="35" fill="none" stroke="#111827" stroke-width="2"/>
            <!-- Center Sticker -->
            <circle cx="40" cy="40" r="16" fill="#0ea5e9"/>
            <text x="40" y="43" fill="#fff" font-family="sans-serif" font-size="8" font-weight="bold" text-anchor="middle">5V DC</text>
            <!-- Abstract Blades -->
            <path d="M 40 24 C 55 10 65 20 40 40 Z" fill="#111827"/>
            <path d="M 56 40 C 70 55 60 65 40 40 Z" fill="#111827"/>
            <path d="M 40 56 C 25 70 15 60 40 40 Z" fill="#111827"/>
            <path d="M 24 40 C 10 25 20 15 40 40 Z" fill="#111827"/>
        `,
        pins: { "VCC": {x: 80, y: 30, aliases: ["+"]}, "GND": {x: 80, y: 50, aliases: ["-"]} }
    }
};