// libraries/relay_module.js

export const Relay_Module = {
    width: 170, 
    height: 110,
    svg: `
        <!-- Blue PCB Base -->
        <rect x="0" y="0" width="170" height="110" rx="6" fill="#0f2b5c" stroke="#1d4ed8" stroke-width="2.5"/>
        
        <!-- Mounting Holes -->
        <circle cx="10" cy="10" r="3.5" fill="#090d16" stroke="#475569" stroke-width="1"/>
        <circle cx="160" cy="10" r="3.5" fill="#090d16" stroke="#475569" stroke-width="1"/>
        <circle cx="10" cy="100" r="3.5" fill="#090d16" stroke="#475569" stroke-width="1"/>
        <circle cx="160" cy="100" r="3.5" fill="#090d16" stroke="#475569" stroke-width="1"/>
        
        <!-- Big Songle Relay Cube -->
        <rect x="38" y="16" width="86" height="78" rx="4" fill="#2563eb" stroke="#1d4ed8" stroke-width="2"/>
        <rect x="42" y="20" width="78" height="70" rx="3" fill="#1d4ed8"/>
        
        <!-- Relay Face Markings -->
        <text x="81" y="36" fill="#ffffff" font-family="'Segoe UI', sans-serif" font-size="11" font-weight="900" letter-spacing="1" text-anchor="middle">SONGLE</text>
        <text x="81" y="49" fill="#93c5fd" font-family="monospace" font-size="8" font-weight="bold" text-anchor="middle">SRD-05VDC-SL-C</text>
        <line x1="48" y1="54" x2="114" y2="54" stroke="#60a5fa" stroke-width="0.8" opacity="0.6"/>
        <text x="81" y="65" fill="#bfdbfe" font-family="sans-serif" font-size="7" font-weight="bold" text-anchor="middle">10A 250VAC • 10A 125VAC</text>
        <text x="81" y="76" fill="#bfdbfe" font-family="sans-serif" font-size="7" font-weight="bold" text-anchor="middle">10A 30VDC • 10A 28VDC</text>
        
        <!-- Optocoupler PC817 (Black DIP-4 chip) -->
        <rect x="18" y="42" width="16" height="24" rx="2" fill="#18181b" stroke="#27272a" stroke-width="1"/>
        <circle cx="22" cy="46" r="1.5" fill="#71717a"/>
        <text x="26" y="56" fill="#71717a" font-family="sans-serif" font-size="5" font-weight="bold" transform="rotate(-90 26 56)">817C</text>
        
        <!-- Transistor & Diode -->
        <rect x="18" y="72" width="12" height="8" rx="1" fill="#27272a"/>
        <rect x="22" y="24" width="8" height="5" rx="1" fill="#dc2626"/> <!-- Diode -->
        <line x1="22" y1="24" x2="22" y2="29" stroke="#ffffff" stroke-width="1.5"/>
        
        <!-- Status LEDs -->
        <!-- Power LED (Red) -->
        <circle cx="16" cy="16" r="3.5" fill="#ef4444" stroke="#b91c1c" stroke-width="1"/>
        <circle cx="16" cy="16" r="1.5" fill="#fca5a5"/>
        <text x="22" y="18" fill="#f87171" font-family="sans-serif" font-size="6" font-weight="bold">PWR</text>
        
        <!-- Relay Trigger LED (Green) -->
        <circle cx="16" cy="94" r="3.5" fill="#22c55e" stroke="#15803d" stroke-width="1"/>
        <circle cx="16" cy="94" r="1.5" fill="#86efac"/>
        <text x="22" y="96" fill="#4ade80" font-family="sans-serif" font-size="6" font-weight="bold">ACT</text>
        
        <!-- High Voltage Terminal Block (Right side: NO, COM, NC) -->
        <rect x="130" y="18" width="36" height="74" rx="3" fill="#15803d" stroke="#166534" stroke-width="2"/>
        <!-- 3 Screws -->
        <circle cx="148" cy="30" r="7" fill="#d1d5db" stroke="#6b7280" stroke-width="1.5"/>
        <line x1="144" y1="30" x2="152" y2="30" stroke="#374151" stroke-width="1.5"/>
        <line x1="148" y1="26" x2="148" y2="34" stroke="#374151" stroke-width="1.5"/>
        
        <circle cx="148" cy="55" r="7" fill="#d1d5db" stroke="#6b7280" stroke-width="1.5"/>
        <line x1="144" y1="55" x2="152" y2="55" stroke="#374151" stroke-width="1.5"/>
        <line x1="148" y1="51" x2="148" y2="59" stroke="#374151" stroke-width="1.5"/>
        
        <circle cx="148" cy="80" r="7" fill="#d1d5db" stroke="#6b7280" stroke-width="1.5"/>
        <line x1="144" y1="80" x2="152" y2="80" stroke="#374151" stroke-width="1.5"/>
        <line x1="148" y1="76" x2="148" y2="84" stroke="#374151" stroke-width="1.5"/>
        
        <!-- Text Labels for Output -->
        <text x="133" y="32" fill="#ffffff" font-family="monospace" font-size="6" font-weight="bold">NO</text>
        <text x="133" y="57" fill="#ffffff" font-family="monospace" font-size="6" font-weight="bold">COM</text>
        <text x="133" y="82" fill="#ffffff" font-family="monospace" font-size="6" font-weight="bold">NC</text>
        
        <!-- Left Input Header Pins -->
        <rect x="0" y="24" width="10" height="62" rx="1" fill="#18181b"/>
        <circle cx="4" cy="30" r="2.5" fill="#facc15"/>
        <circle cx="4" cy="55" r="2.5" fill="#facc15"/>
        <circle cx="4" cy="80" r="2.5" fill="#facc15"/>
    `,
    pins: {
        // Control Pins (Left side)
        "VCC": { x: 0, y: 30, aliases: ["5V", "V+", "DC+"] },
        "GND": { x: 0, y: 55, aliases: ["0V", "V-", "DC-"] },
        "IN":  { x: 0, y: 80, aliases: ["SIG", "TRIG", "DATA"] },
        
        // High Power Terminals (Right side)
        "NO":  { x: 170, y: 30, aliases: ["NO_CONTACT"] },
        "COM": { x: 170, y: 55, aliases: ["COMMON"] },
        "NC":  { x: 170, y: 80, aliases: ["NC_CONTACT"] }
    }
};
