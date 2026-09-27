// libraries/load_cell.js

export const Load_Cell = {
    category: 'Sensors',
    description: '4-Wire Strain Gauge Bar Load Cell (5kg/10kg)',
    width: 180, 
    height: 100,
    svg: `
        <!-- Aluminum Load Cell Bar Body -->
        <rect x="0" y="20" width="130" height="60" rx="4" fill="#e2e8f0" stroke="#94a3b8" stroke-width="2.5"/>
        <rect x="5" y="25" width="120" height="50" rx="2" fill="#cbd5e1"/>
        
        <!-- Threaded Mounting Screw Holes (Left & Right Ends) -->
        <circle cx="16" cy="35" r="4.5" fill="#475569" stroke="#334155" stroke-width="1.5"/>
        <circle cx="16" cy="65" r="4.5" fill="#475569" stroke="#334155" stroke-width="1.5"/>
        <circle cx="114" cy="35" r="4.5" fill="#475569" stroke="#334155" stroke-width="1.5"/>
        <circle cx="114" cy="65" r="4.5" fill="#475569" stroke="#334155" stroke-width="1.5"/>
        
        <!-- Central Double-Hole Machined Flexure Cutout -->
        <circle cx="50" cy="50" r="14" fill="#0f172a" stroke="#64748b" stroke-width="1.5"/>
        <circle cx="80" cy="50" r="14" fill="#0f172a" stroke="#64748b" stroke-width="1.5"/>
        <rect x="50" y="44" width="30" height="12" fill="#0f172a"/>
        
        <!-- Strain Gauge Protective Cover Sticker -->
        <rect x="34" y="22" width="62" height="14" rx="2" fill="#1e293b"/>
        <text x="65" y="32" fill="#38bdf8" font-family="'Segoe UI', sans-serif" font-size="7" font-weight="900" text-anchor="middle">LOAD CELL 5KG</text>
        
        <!-- Force Direction Arrow -->
        <path d="M 65 68 L 65 76 M 61 72 L 65 76 L 69 72" stroke="#ef4444" stroke-width="2" fill="none" stroke-linecap="round"/>
        <text x="74" y="75" fill="#ef4444" font-family="sans-serif" font-size="6" font-weight="bold">ARROW ⬇</text>
        
        <!-- Black Rubber Strain Relief Wire Grommet -->
        <rect x="126" y="36" width="10" height="28" rx="3" fill="#18181b" stroke="#27272a" stroke-width="1"/>
        
        <!-- 4 Distinct Colored Flying Lead Wires (RED, BLACK, GREEN, WHITE) -->
        <!-- Red Wire (Excitation +) -->
        <path d="M 134 40 Q 150 25 180 20" fill="none" stroke="#ef4444" stroke-width="3" stroke-linecap="round"/>
        <!-- Black Wire (Excitation -) -->
        <path d="M 134 46 Q 150 40 180 40" fill="none" stroke="#18181b" stroke-width="3" stroke-linecap="round"/>
        <!-- Green Wire (Signal +) -->
        <path d="M 134 52 Q 150 55 180 60" fill="none" stroke="#22c55e" stroke-width="3" stroke-linecap="round"/>
        <!-- White Wire (Signal -) -->
        <path d="M 134 58 Q 150 72 180 80" fill="none" stroke="#f8fafc" stroke-width="3" stroke-linecap="round"/>
        <path d="M 134 58 Q 150 72 180 80" fill="none" stroke="#94a3b8" stroke-width="1" stroke-linecap="round"/>
        
        <!-- Wire Terminal Dot Rings -->
        <circle cx="180" cy="20" r="4" fill="#ef4444" stroke="#991b1b" stroke-width="1"/>
        <circle cx="180" cy="40" r="4" fill="#18181b" stroke="#000000" stroke-width="1"/>
        <circle cx="180" cy="60" r="4" fill="#22c55e" stroke="#15803d" stroke-width="1"/>
        <circle cx="180" cy="80" r="4" fill="#f8fafc" stroke="#94a3b8" stroke-width="1"/>
    `,
    pins: {
        "RED":   { x: 180, y: 20, aliases: ["E+", "EXC+", "VCC", "IN+", "RED_WIRE", "E_PLUS"] },
        "BLACK": { x: 180, y: 40, aliases: ["E-", "EXC-", "GND", "IN-", "BLACK_WIRE", "E_MINUS"] },
        "GREEN": { x: 180, y: 60, aliases: ["A+", "SIG+", "OUT+", "DAT+", "GREEN_WIRE", "A_PLUS"] },
        "WHITE": { x: 180, y: 80, aliases: ["A-", "SIG-", "OUT-", "DAT-", "WHITE_WIRE", "A_MINUS"] }
    }
};

export const LoadCell = Load_Cell;
