// libraries/power_supply_12v.js

export const Power_Supply_12V = {
    width: 170, 
    height: 100,
    svg: `
        <!-- Industrial Power Supply Case / Metal Perforated Mesh Style -->
        <rect x="0" y="0" width="170" height="100" rx="6" fill="#18181b" stroke="#3f3f46" stroke-width="2.5"/>
        
        <!-- Inner Enclosure Panel -->
        <rect x="8" y="8" width="154" height="84" rx="4" fill="#27272a"/>
        
        <!-- Cooling Ventilation Grilles -->
        <g stroke="#18181b" stroke-width="2" stroke-linecap="round">
            <line x1="25" y1="20" x2="65" y2="20"/>
            <line x1="25" y1="26" x2="65" y2="26"/>
            <line x1="25" y1="32" x2="65" y2="32"/>
            <line x1="25" y1="38" x2="65" y2="38"/>
            <line x1="25" y1="44" x2="65" y2="44"/>
            <line x1="25" y1="50" x2="65" y2="50"/>
        </g>
        
        <!-- Transformer & Capacitors inside -->
        <rect x="75" y="18" width="28" height="34" rx="3" fill="#3b82f6" opacity="0.3"/>
        <rect x="79" y="22" width="20" height="26" rx="2" fill="#eab308" opacity="0.8"/>
        <circle cx="118" cy="28" r="9" fill="#52525b" stroke="#71717a" stroke-width="1.5"/>
        <circle cx="118" cy="28" r="4" fill="#a1a1aa"/>
        <circle cx="118" cy="48" r="9" fill="#52525b" stroke="#71717a" stroke-width="1.5"/>
        <circle cx="118" cy="48" r="4" fill="#a1a1aa"/>
        
        <!-- Status Indicator LED with Neon Glow -->
        <circle cx="148" cy="25" r="4" fill="#22c55e" stroke="#15803d" stroke-width="1"/>
        <circle cx="148" cy="25" r="1.5" fill="#bbf7d0"/>
        <text x="148" y="38" fill="#4ade80" font-family="sans-serif" font-size="6" font-weight="bold" text-anchor="middle">12V OK</text>
        
        <!-- Trim Pot (Voltage Adjust) -->
        <circle cx="148" cy="52" r="5" fill="#0284c7" stroke="#0369a1" stroke-width="1"/>
        <circle cx="148" cy="52" r="2.5" fill="#facc15"/>
        <line x1="146.5" y1="52" x2="149.5" y2="52" stroke="#78350f" stroke-width="0.8"/>
        <text x="148" y="64" fill="#94a3b8" font-family="sans-serif" font-size="5" text-anchor="middle">V.ADJ</text>
        
        <!-- Label Badge -->
        <rect x="18" y="64" width="85" height="20" rx="3" fill="#090d16" stroke="#334155" stroke-width="1"/>
        <text x="60" y="74" fill="#f8fafc" font-family="'Segoe UI', sans-serif" font-size="8" font-weight="bold" text-anchor="middle">12V DC POWER</text>
        <text x="60" y="81" fill="#38bdf8" font-family="monospace" font-size="6" font-weight="bold" text-anchor="middle">OUT: 12.0V / 5.0A (60W)</text>
        
        <!-- Screw Terminal Barrier at Right Edge -->
        <rect x="140" y="70" width="30" height="22" rx="2" fill="#0f172a" stroke="#475569" stroke-width="1"/>
        <circle cx="152" cy="76" r="3.5" fill="#e2e8f0"/>
        <line x1="150" y1="76" x2="154" y2="76" stroke="#475569" stroke-width="1"/>
        <circle cx="152" cy="86" r="3.5" fill="#e2e8f0"/>
        <line x1="150" y1="86" x2="154" y2="86" stroke="#475569" stroke-width="1"/>
        
        <!-- Left Side AC Terminals -->
        <rect x="0" y="30" width="12" height="40" rx="2" fill="#0f172a"/>
        <text x="6" y="42" fill="#94a3b8" font-family="monospace" font-size="7" font-weight="bold" text-anchor="middle">L</text>
        <text x="6" y="62" fill="#94a3b8" font-family="monospace" font-size="7" font-weight="bold" text-anchor="middle">N</text>
    `,
    pins: {
        // AC Input (Left side)
        "AC_L": { x: 0, y: 38, aliases: ["L", "LINE", "AC_IN"] },
        "AC_N": { x: 0, y: 62, aliases: ["N", "NEUTRAL"] },
        
        // 12V DC Regulated Output (Right side)
        "12V":  { x: 170, y: 35, aliases: ["+12V", "VCC", "POS", "+", "V+", "DC+"] },
        "GND":  { x: 170, y: 75, aliases: ["0V", "NEG", "-", "V-", "DC-", "COM"] }
    }
};
