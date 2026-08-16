// libraries/esp32_devkit_v1.js

export const ESP32_devkit_v1 = {
    width: 280, 
    height: 460,
    svg: `
        <rect x="0" y="0" width="280" height="460" rx="10" fill="#1a1a1a" stroke="#333" stroke-width="3"/>
        
        <rect x="90" y="35" width="100" height="130" rx="4" fill="#cbd5e1"/>
        <rect x="90" y="35" width="100" height="35" fill="#94a3b8" rx="4"/>
        <text x="140" y="115" fill="#0f172a" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle">ESP-WROOM-32</text>
        
        <rect x="120" y="450" width="40" height="10" fill="#475569" rx="2"/>
        
        <circle cx="90" cy="410" r="6" fill="#334155"/><text x="90" y="430" fill="#94a3b8" font-size="10" text-anchor="middle" font-family="sans-serif">EN</text>
        <circle cx="190" cy="410" r="6" fill="#334155"/><text x="190" y="430" fill="#94a3b8" font-size="10" text-anchor="middle" font-family="sans-serif">BOOT</text>
        
        <rect x="130" y="300" width="20" height="20" fill="#000" rx="2"/>
    `,
    pins: {
        "3V3": { x: 10, y: 30 }, "EN": { x: 10, y: 50 }, "GPIO36": { x: 10, y: 70 },
        "GPIO39": { x: 10, y: 90 }, "GPIO34": { x: 10, y: 110 }, "GPIO35": { x: 10, y: 130 },
        "GPIO32": { x: 10, y: 150 }, "GPIO33": { x: 10, y: 170 }, "GPIO25": { x: 10, y: 190 },
        "GPIO26": { x: 10, y: 210 }, "GPIO27": { x: 10, y: 230 }, "GPIO14": { x: 10, y: 250 },
        "GPIO12": { x: 10, y: 270 }, "GND_1": { x: 10, y: 290, aliases: ["GND"] }, 
        "GPIO13": { x: 10, y: 310 }, "GPIO9": { x: 10, y: 330 }, "GPIO10": { x: 10, y: 350 },
        "GPIO11": { x: 10, y: 370 }, "5V": { x: 10, y: 390 },

        "GND_2": { x: 270, y: 30, aliases: ["GND"] }, "GPIO23": { x: 270, y: 50 },
        "GPIO22": { x: 270, y: 70 }, "GPIO1": { x: 270, y: 90 }, "GPIO3": { x: 270, y: 110 },
        "GPIO21": { x: 270, y: 130 }, "GND_3": { x: 270, y: 150, aliases: ["GND"] },
        "GPIO19": { x: 270, y: 170 }, "GPIO18": { x: 270, y: 190 }, "GPIO5": { x: 270, y: 210 },
        "GPIO17": { x: 270, y: 230 }, "GPIO16": { x: 270, y: 250 }, "GPIO4": { x: 270, y: 270 },
        "GPIO0": { x: 270, y: 290 }, "GPIO2": { x: 270, y: 310 }, "GPIO15": { x: 270, y: 330 },
        "GPIO8": { x: 270, y: 350 }, "GPIO7": { x: 270, y: 370 }, "GPIO6": { x: 270, y: 390 }
    }
};