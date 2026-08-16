// libraries/lm2596.js
export const LM2596_Buck = {
    width: 160, height: 80,
    svg: `
        <rect x="0" y="0" width="160" height="80" rx="4" fill="#0c6b8c" stroke="#084a61" stroke-width="2"/>
        <!-- IN/OUT Text -->
        <text x="25" y="15" fill="#fff" font-family="sans-serif" font-size="10" font-weight="bold">IN</text>
        <text x="120" y="15" fill="#fff" font-family="sans-serif" font-size="10" font-weight="bold">OUT</text>
        <!-- Capacitors -->
        <circle cx="35" cy="40" r="16" fill="#e5e7eb" stroke="#9ca3af" stroke-width="2"/>
        <path d="M 19 40 A 16 16 0 0 0 51 40 Z" fill="#9ca3af"/> <!-- Silver cap top -->
        <circle cx="125" cy="40" r="16" fill="#e5e7eb" stroke="#9ca3af" stroke-width="2"/>
        <path d="M 109 40 A 16 16 0 0 0 141 40 Z" fill="#9ca3af"/>
        <!-- LM2596 IC -->
        <rect x="55" y="10" width="30" height="35" fill="#333" rx="1"/>
        <rect x="55" y="10" width="30" height="10" fill="#9ca3af"/> <!-- Heatsink backing -->
        <!-- Inductor -->
        <circle cx="95" cy="55" r="15" fill="#1f2937"/>
        <circle cx="95" cy="55" r="10" fill="#374151"/>
        <!-- Potentiometer -->
        <rect x="90" y="10" width="25" height="12" fill="#38bdf8" rx="1"/>
        <circle cx="95" cy="16" r="3" fill="#fbbf24"/> <!-- Brass screw -->
    `,
    pins: {
        "IN_PLUS":  { x: 0, y: 25, aliases: ["IN+"] },
        "IN_MINUS": { x: 0, y: 55, aliases: ["IN-", "GND_IN"] },
        "OUT_PLUS": { x: 160, y: 25, aliases: ["OUT+"] },
        "OUT_MINUS":{ x: 160, y: 55, aliases: ["OUT-", "GND_OUT"] }
    }
};