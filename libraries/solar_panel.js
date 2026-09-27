// libraries/solar_panel.js

export const Solar_Panel = {
    width: 180, 
    height: 130,
    svg: `
        <!-- Anodized Aluminum Outer Frame -->
        <rect x="0" y="0" width="180" height="130" rx="4" fill="#475569" stroke="#334155" stroke-width="3"/>
        <rect x="6" y="6" width="168" height="118" rx="2" fill="#0f172a"/>
        
        <!-- Solar Cells (6 PV Cells Grid) -->
        <!-- Row 1 -->
        <rect x="12" y="12" width="48" height="50" rx="1" fill="#1e3a8a" stroke="#172554" stroke-width="1"/>
        <rect x="66" y="12" width="48" height="50" rx="1" fill="#1e3a8a" stroke="#172554" stroke-width="1"/>
        <rect x="120" y="12" width="48" height="50" rx="1" fill="#1e3a8a" stroke="#172554" stroke-width="1"/>
        
        <!-- Row 2 -->
        <rect x="12" y="68" width="48" height="50" rx="1" fill="#1e3a8a" stroke="#172554" stroke-width="1"/>
        <rect x="66" y="68" width="48" height="50" rx="1" fill="#1e3a8a" stroke="#172554" stroke-width="1"/>
        <rect x="120" y="68" width="48" height="50" rx="1" fill="#1e3a8a" stroke="#172554" stroke-width="1"/>
        
        <!-- Silver Grid Fingers / Conductive Busbars -->
        <g stroke="#93c5fd" stroke-width="0.8" opacity="0.6">
            <!-- Vertical busbars -->
            <line x1="28" y1="12" x2="28" y2="62"/><line x1="44" y1="12" x2="44" y2="62"/>
            <line x1="82" y1="12" x2="82" y2="62"/><line x1="98" y1="12" x2="98" y2="62"/>
            <line x1="136" y1="12" x2="136" y2="62"/><line x1="152" y1="12" x2="152" y2="62"/>
            
            <line x1="28" y1="68" x2="28" y2="118"/><line x1="44" y1="68" x2="44" y2="118"/>
            <line x1="82" y1="68" x2="82" y2="118"/><line x1="98" y1="68" x2="98" y2="118"/>
            <line x1="136" y1="68" x2="136" y2="118"/><line x1="152" y1="68" x2="152" y2="118"/>
            
            <!-- Horizontal fine lines -->
            <line x1="12" y1="28" x2="60" y2="28"/><line x1="12" y1="46" x2="60" y2="46"/>
            <line x1="66" y1="28" x2="114" y2="28"/><line x1="66" y1="46" x2="114" y2="46"/>
            <line x1="120" y1="28" x2="168" y2="28"/><line x1="120" y1="46" x2="168" y2="46"/>
            
            <line x1="12" y1="84" x2="60" y2="84"/><line x1="12" y1="102" x2="60" y2="102"/>
            <line x1="66" y1="84" x2="114" y2="84"/><line x1="66" y1="102" x2="114" y2="102"/>
            <line x1="120" y1="84" x2="168" y2="84"/><line x1="120" y1="102" x2="168" y2="102"/>
        </g>
        
        <!-- Glass Sheen Glare Diagonal Reflection -->
        <polygon points="12,12 80,12 25,118 12,118" fill="#ffffff" opacity="0.06"/>
        
        <!-- Junction Box & Label on Top/Center -->
        <rect x="65" y="0" width="50" height="12" rx="2" fill="#1e293b" stroke="#0f172a" stroke-width="1"/>
        <text x="90" y="8" fill="#facc15" font-family="'Segoe UI', sans-serif" font-size="7" font-weight="bold" text-anchor="middle">SOLAR PV</text>
        
        <!-- Terminal Markings on right frame -->
        <text x="172" y="38" fill="#ef4444" font-family="monospace" font-size="12" font-weight="900" text-anchor="middle">+</text>
        <text x="172" y="98" fill="#94a3b8" font-family="monospace" font-size="14" font-weight="900" text-anchor="middle">-</text>
    `,
    pins: {
        "+": { x: 180, y: 35, aliases: ["POS", "VCC", "V+", "OUT+", "18V", "12V"] },
        "-": { x: 180, y: 95, aliases: ["NEG", "GND", "V-", "OUT-", "0V"] }
    }
};
