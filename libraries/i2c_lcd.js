// libraries/i2c_lcd.js
export const I2C_LCD = {
    width: 220, height: 80,
    svg: `
        <!-- Green PCB Backing -->
        <rect x="0" y="0" width="220" height="80" rx="4" fill="#15803d" stroke="#166534" stroke-width="2"/>
        <!-- Mounting Holes -->
        <circle cx="10" cy="10" r="3" fill="#0d1117"/><circle cx="210" cy="10" r="3" fill="#0d1117"/>
        <circle cx="10" cy="70" r="3" fill="#0d1117"/><circle cx="210" cy="70" r="3" fill="#0d1117"/>
        <!-- Black Screen Bezel -->
        <rect x="15" y="10" width="190" height="60" rx="2" fill="#111827"/>
        <!-- Yellow LCD Screen -->
        <rect x="25" y="15" width="170" height="50" rx="1" fill="#facc15"/>
        <!-- Matrix Grid Effect -->
        <line x1="25" y1="40" x2="195" y2="40" stroke="#ca8a04" stroke-width="0.5" opacity="0.5"/>
        <!-- Text -->
        <text x="110" y="35" fill="#1f2937" font-family="monospace" font-size="16" font-weight="bold" text-anchor="middle">2x16 LCD I2C</text>
        <text x="110" y="55" fill="#1f2937" font-family="monospace" font-size="14" font-weight="bold" text-anchor="middle">HELLO WORLD!</text>
    `,
    pins: {
        "GND": { x: 0, y: 20 },
        "VCC": { x: 0, y: 35, aliases: ["5V"] },
        "SDA": { x: 0, y: 50 },
        "SCL": { x: 0, y: 65 }
    }
};