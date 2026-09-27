// manifest.js
// ---------------------------------------------------------
// HOW TO ADD NEW COMPONENTS:
// 1. Create your new component file (e.g., 'libraries/my_sensor.js')
// 2. Import it here and add it to the 'ComponentRegistry' object.
// You never need to touch index.html again!
// ---------------------------------------------------------

import { ESP32_devkit_v1 } from './libraries/esp32_devkit_v1.js';
import { STM32_Bluepill } from './libraries/stm32_bluepill.js';
import { CoreComponents } from './libraries/core_components.js';
import { Arduino_Uno } from './libraries/arduino_uno.js';
import { LM2596_Buck } from './libraries/lm2596.js';
import { HX711 } from './libraries/hx711.js';
import { I2C_LCD } from './libraries/i2c_lcd.js';
import { SIM800L } from './libraries/sim800l.js';
import { Micro_SD } from './libraries/micro_sd.js';
import { ExtraComponents } from './libraries/extra_components.js';


// --- Basic Passives Logic ---
function getResistorColors(valStr) {
    let val = parseFloat(valStr.replace(/[kKmMΩ]/g, ''));
    if (isNaN(val)) return ['#dc2626', '#dc2626', '#78350f']; 
    if (valStr.toLowerCase().includes('k')) val *= 1000; if (valStr.toLowerCase().includes('m')) val *= 1000000;
    const cMap = ['#000', '#78350f', '#dc2626', '#f97316', '#eab308', '#22c55e', '#3b82f6', '#8b5cf6', '#6b7280', '#fff'];
    let exp = Math.floor(Math.log10(val)) - 1; let sig = Math.round(val / Math.pow(10, exp)); if (val < 10) { sig = val * 10; exp = -1; } 
    return [cMap[Math.floor(sig/10)]||cMap[0], cMap[sig%10]||cMap[0], (exp>=0&&exp<=9)?cMap[exp]:'#ca8a04'];
}

const BasicLibrary = {
    LED: {
        width: 60, height: 40,
        svg: `<line x1="0" y1="20" x2="15" y2="20" stroke="#94a3b8" stroke-width="2.5"/><line x1="35" y1="20" x2="60" y2="20" stroke="#94a3b8" stroke-width="2.5"/><path d="M 15 10 L 15 30 L 35 20 Z" fill="#ef4444" stroke="#b91c1c" stroke-width="2"/><line x1="35" y1="10" x2="35" y2="30" stroke="#b91c1c" stroke-width="3"/><text x="5" y="38" class="value-label" font-size="16">+</text><text x="45" y="38" class="value-label" font-size="16">-</text>`,
        pins: { "+": { x: 0, y: 20 }, "-": { x: 60, y: 20 } }
    },
    Resistor: {
        width: 100, height: 45,
        svg: (arg) => {
            let valStr = arg ? arg : "220"; let bands = getResistorColors(valStr);
            return `<line x1="0" y1="15" x2="25" y2="15" stroke="#94a3b8" stroke-width="3"/><line x1="75" y1="15" x2="100" y2="15" stroke="#94a3b8" stroke-width="3"/><rect x="20" y="5" width="60" height="20" rx="2" fill="#eab308" stroke="#a16207" stroke-width="1.5"/><rect x="30" y="5" width="5" height="20" fill="${bands[0]}"/><rect x="42" y="5" width="5" height="20" fill="${bands[1]}"/><rect x="54" y="5" width="5" height="20" fill="${bands[2]}"/><rect x="68" y="5" width="3" height="20" fill="#ca8a04"/><text x="50" y="42" class="value-label" text-anchor="middle">${valStr}Ω</text>`;
        },
        pins: { "IN": { x: 0, y: 15 }, "OUT": { x: 100, y: 15 } }
    }
};

// --- THE MASTER REGISTRY ---
export const ComponentRegistry = { 
    ESP32_devkit_v1, STM32_Bluepill, 
    Arduino_Uno, LM2596_Buck, HX711, I2C_LCD, SIM800L, Micro_SD,
    ...CoreComponents, ...BasicLibrary, ...ExtraComponents
};