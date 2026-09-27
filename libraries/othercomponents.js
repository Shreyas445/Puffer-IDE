export const Mist_Sprayer = {
    width: 150, height: 80,
    svg: `
        <!-- Green Driver PCB -->
        <rect x="0" y="15" width="55" height="50" rx="3" fill="#15803d" stroke="#166534" stroke-width="2"/>
        <!-- USB / Power Port -->
        <rect x="20" y="65" width="15" height="8" fill="#d1d5db" rx="1"/>
        <rect x="22" y="73" width="11" height="3" fill="#9ca3af"/>
        <!-- Inductor (Black Coil) -->
        <circle cx="20" cy="40" r="10" fill="#1f2937" stroke="#111827" stroke-width="1"/>
        <circle cx="20" cy="40" r="4" fill="#374151"/>
        <!-- IC Chip -->
        <rect x="35" y="35" width="12" height="10" fill="#111827" rx="1"/>
        <!-- SMD Components -->
        <rect x="35" y="20" width="6" height="4" fill="#a16207" rx="0.5"/>
        <rect x="15" y="20" width="8" height="4" fill="#333" rx="0.5"/>
        <rect x="38" y="55" width="6" height="4" fill="#a16207" rx="0.5"/>
        
        <!-- Wires to Piezo Disc -->
        <path d="M 55 30 Q 80 10 110 30" fill="none" stroke="#ef4444" stroke-width="2"/> <!-- Red Wire -->
        <path d="M 55 50 Q 80 70 110 50" fill="none" stroke="#111827" stroke-width="2"/> <!-- Black Wire -->
        
        <!-- Piezo Atomizer Disc -->
        <circle cx="115" cy="40" r="25" fill="#f3f4f6" stroke="#d1d5db" stroke-width="4"/>
        <circle cx="115" cy="40" r="18" fill="#e5e7eb" stroke="#9ca3af" stroke-width="1"/>
        <circle cx="115" cy="40" r="6" fill="#f3f4f6" stroke="#9ca3af" stroke-width="2"/>
    `,
    pins: {
        "VCC": { x: 0, y: 30, aliases: ["5V", "IN+", "POS"] },
        "GND": { x: 0, y: 50, aliases: ["IN-", "NEG"] }
    }
};

export const Heater = {
    width: 60, height: 130,
    svg: `
        <!-- Outer Neon Glow (Red) -->
        <path d="M 15 110 L 15 20 A 5 5 0 0 1 25 20 L 25 90 A 5 5 0 0 0 35 90 L 35 20 A 5 5 0 0 1 45 20 L 45 110" 
              fill="none" stroke="#ef4444" stroke-width="12" opacity="0.3" stroke-linecap="round" stroke-linejoin="round"/>
              
        <!-- Inner Core (Bright Orange/Red) -->
        <path d="M 15 110 L 15 20 A 5 5 0 0 1 25 20 L 25 90 A 5 5 0 0 0 35 90 L 35 20 A 5 5 0 0 1 45 20 L 45 110" 
              fill="none" stroke="#f87171" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
              
        <!-- Hot White Center Filament -->
        <path d="M 15 110 L 15 20 A 5 5 0 0 1 25 20 L 25 90 A 5 5 0 0 0 35 90 L 35 20 A 5 5 0 0 1 45 20 L 45 110" 
              fill="none" stroke="#fef08a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>

        <!-- Metal Terminals -->
        <rect x="13" y="110" width="4" height="15" fill="#9ca3af" rx="1"/>
        <rect x="43" y="110" width="4" height="15" fill="#9ca3af" rx="1"/>
    `,
    pins: {
        "IN1": { x: 15, y: 125, aliases: ["+", "A", "VCC"] },
        "IN2": { x: 45, y: 125, aliases: ["-", "B", "GND"] }
    }
};