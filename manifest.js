// manifest.js
// ---------------------------------------------------------
// Puffer EDA Component Registry & Manifest
// ---------------------------------------------------------

import { ESP32_devkit_v1 } from './libraries/esp32_devkit_v1.js';
import { STM32_Bluepill } from './libraries/stm32_bluepill.js';
import { Arduino_Uno } from './libraries/arduino_uno.js';
import { CoreComponents } from './libraries/core_components.js';
import { LM2596_Buck } from './libraries/lm2596.js';
import { HX711 } from './libraries/hx711.js';
import { I2C_LCD } from './libraries/i2c_lcd.js';
import { SIM800L } from './libraries/sim800l.js';
import { Micro_SD } from './libraries/micro_sd.js';
import { ExtraComponents } from './libraries/extra_components.js';
import { Mist_Sprayer, Heater } from './libraries/othercomponents.js';
import { Relay_Module } from './libraries/relay_module.js';
import { Power_Supply_12V } from './libraries/power_supply_12v.js';
import { Solar_Panel } from './libraries/solar_panel.js';
import { LoRa_SX1278 } from './libraries/lora_sx1278.js';
import { OLED_SSD1306, Ultrasonic_HC_SR04, Servo_SG90, DHT22, Potentiometer, Push_Button } from './libraries/more_components.js';
import { Load_Cell, LoadCell } from './libraries/load_cell.js';
import { L7805CV } from './libraries/l7805cv.js';

// --- Basic Passives Logic ---
function getResistorColors(valStr) {
    let val = parseFloat(valStr.replace(/[kKmMΩ]/g, ''));
    if (isNaN(val)) return ['#dc2626', '#dc2626', '#78350f']; 
    if (valStr.toLowerCase().includes('k')) val *= 1000; 
    if (valStr.toLowerCase().includes('m')) val *= 1000000;
    const cMap = ['#000', '#78350f', '#dc2626', '#f97316', '#eab308', '#22c55e', '#3b82f6', '#8b5cf6', '#6b7280', '#fff'];
    let exp = Math.floor(Math.log10(val)) - 1; 
    let sig = Math.round(val / Math.pow(10, exp)); 
    if (val < 10) { sig = val * 10; exp = -1; } 
    return [cMap[Math.floor(sig/10)]||cMap[0], cMap[sig%10]||cMap[0], (exp>=0&&exp<=9)?cMap[exp]:'#ca8a04'];
}

const BasicLibrary = {
    LED: {
        category: 'Passives',
        description: 'Through-Hole Light Emitting Diode',
        width: 60, height: 40,
        svg: `<line x1="0" y1="20" x2="15" y2="20" stroke="#94a3b8" stroke-width="2.5"/><line x1="35" y1="20" x2="60" y2="20" stroke="#94a3b8" stroke-width="2.5"/><path d="M 15 10 L 15 30 L 35 20 Z" fill="#ef4444" stroke="#b91c1c" stroke-width="2"/><line x1="35" y1="10" x2="35" y2="30" stroke="#b91c1c" stroke-width="3"/><text x="5" y="38" class="value-label" font-size="16">+</text><text x="45" y="38" class="value-label" font-size="16">-</text>`,
        pins: { "+": { x: 0, y: 20, aliases: ["Anode", "A", "POS"] }, "-": { x: 60, y: 20, aliases: ["Cathode", "K", "NEG", "GND"] } }
    },
    Resistor: {
        category: 'Passives',
        description: 'Parametric Color-Coded Resistor',
        width: 100, height: 45,
        svg: (arg) => {
            let valStr = arg ? arg : "220"; 
            let bands = getResistorColors(valStr);
            return `<line x1="0" y1="15" x2="25" y2="15" stroke="#94a3b8" stroke-width="3"/><line x1="75" y1="15" x2="100" y2="15" stroke="#94a3b8" stroke-width="3"/><rect x="20" y="5" width="60" height="20" rx="2" fill="#eab308" stroke="#a16207" stroke-width="1.5"/><rect x="30" y="5" width="5" height="20" fill="${bands[0]}"/><rect x="42" y="5" width="5" height="20" fill="${bands[1]}"/><rect x="54" y="5" width="5" height="20" fill="${bands[2]}"/><rect x="68" y="5" width="3" height="20" fill="#ca8a04"/><text x="50" y="42" class="value-label" text-anchor="middle">${valStr}Ω</text>`;
        },
        pins: { "IN": { x: 0, y: 15, aliases: ["1", "A"] }, "OUT": { x: 100, y: 15, aliases: ["2", "B"] } }
    }
};

// Metadata enrichment for components
Arduino_Uno.category = 'Microcontrollers';
Arduino_Uno.description = 'ATmega328P Development Board';

ESP32_devkit_v1.category = 'Microcontrollers';
ESP32_devkit_v1.description = 'Dual-Core WiFi & Bluetooth SoC';

STM32_Bluepill.category = 'Microcontrollers';
STM32_Bluepill.description = 'ARM Cortex-M3 72MHz Board';

Relay_Module.category = 'Actuators';
Relay_Module.description = '5V/10A Optocoupled Relay Module';

Power_Supply_12V.category = 'Power';
Power_Supply_12V.description = '12V 5A Regulated DC Power Supply';

Solar_Panel.category = 'Power';
Solar_Panel.description = '18V Photovoltaic Solar Panel';

LM2596_Buck.category = 'Power';
LM2596_Buck.description = 'DC-DC Step-Down Buck Converter';

L7805CV.category = 'Power';
L7805CV.description = '5V 1.5A Voltage Regulator / Transistor (TO-220)';

LoRa_SX1278.category = 'Wireless';
LoRa_SX1278.description = 'Ra-02 433MHz Long Range Transceiver';

SIM800L.category = 'Wireless';
SIM800L.description = 'Cellular GSM/GPRS Quad-Band Module';

I2C_LCD.category = 'Displays';
I2C_LCD.description = '16x2 Character LCD with I2C Module';

OLED_SSD1306.category = 'Displays';
OLED_SSD1306.description = '0.96 inch 128x64 I2C OLED Display';

Ultrasonic_HC_SR04.category = 'Sensors';
Ultrasonic_HC_SR04.description = 'Ultrasonic Distance Sensor (2-400cm)';

DHT22.category = 'Sensors';
DHT22.description = 'Digital Temperature & Humidity Sensor';

Load_Cell.category = 'Sensors';
Load_Cell.description = '4-Wire Strain Gauge Load Cell (RED, BLACK, GREEN, WHITE)';

Servo_SG90.category = 'Actuators';
Servo_SG90.description = '9g Micro Position Servo Motor';

Potentiometer.category = 'Passives';
Potentiometer.description = '10k Rotary Potentiometer';

Push_Button.category = 'Actuators';
Push_Button.description = '4-Pin Tactile Momentary Switch';

HX711.category = 'Sensors';
HX711.description = '24-Bit ADC Load Cell Amplifier';

Micro_SD.category = 'Storage';
Micro_SD.description = 'SPI Micro SD Card Adapter Module';

Mist_Sprayer.category = 'Actuators';
Mist_Sprayer.description = 'Ultrasonic Piezo Mist Atomizer';

Heater.category = 'Actuators';
Heater.description = 'High Temp Heating Element';

// Tag extra & core components
if (ExtraComponents.NRF24L01) {
    ExtraComponents.NRF24L01.category = 'Wireless';
    ExtraComponents.NRF24L01.description = '2.4GHz RF Transceiver';
}
if (ExtraComponents.Buzzer) {
    ExtraComponents.Buzzer.category = 'Actuators';
    ExtraComponents.Buzzer.description = 'Active Piezo Audio Buzzer';
}
if (ExtraComponents.DC_Fan_5V) {
    ExtraComponents.DC_Fan_5V.category = 'Actuators';
    ExtraComponents.DC_Fan_5V.description = '5V Brushless DC Cooling Fan';
}
if (ExtraComponents.Photo_Diode) {
    ExtraComponents.Photo_Diode.category = 'Sensors';
    ExtraComponents.Photo_Diode.description = 'Light Detection Photodiode';
}
if (ExtraComponents.IRFZ44N) {
    ExtraComponents.IRFZ44N.category = 'Semiconductors';
    ExtraComponents.IRFZ44N.description = '55V 49A N-Channel Power MOSFET';
}
if (ExtraComponents.L7805) {
    ExtraComponents.L7805.category = 'Power';
    ExtraComponents.L7805.description = '5V 1.5A Linear Voltage Regulator';
}

if (CoreComponents.VCC) {
    CoreComponents.VCC.category = 'Power';
    CoreComponents.VCC.description = 'Positive Power Supply Rail';
}
if (CoreComponents.GND) {
    CoreComponents.GND.category = 'Power';
    CoreComponents.GND.description = 'Ground Reference Rail (0V)';
}
if (CoreComponents.Capacitor) {
    CoreComponents.Capacitor.category = 'Passives';
    CoreComponents.Capacitor.description = 'Decoupling / Filter Capacitor';
}
if (CoreComponents.NPN_Transistor) {
    CoreComponents.NPN_Transistor.category = 'Semiconductors';
    CoreComponents.NPN_Transistor.description = 'BJT NPN General Purpose Transistor';
}
if (CoreComponents.N_MOSFET) {
    CoreComponents.N_MOSFET.category = 'Semiconductors';
    CoreComponents.N_MOSFET.description = 'N-Channel Logic MOSFET';
}
if (CoreComponents.Antenna) {
    CoreComponents.Antenna.category = 'Wireless';
    CoreComponents.Antenna.description = 'RF Antenna Symbol';
}

// --- THE MASTER REGISTRY ---
export const ComponentRegistry = { 
    // Microcontrollers
    ESP32_devkit_v1, 
    STM32_Bluepill, 
    Arduino_Uno, 
    
    // Power & Regulators
    Power_Supply_12V,
    Solar_Panel,
    LM2596_Buck,
    L7805CV,
    
    // Relays & Actuators
    Relay_Module,
    Servo_SG90,
    Mist_Sprayer,
    Heater,
    Push_Button,
    
    // Wireless & Communication
    LoRa_SX1278,
    SIM800L,
    
    // Displays
    I2C_LCD,
    OLED_SSD1306,
    
    // Sensors
    Ultrasonic_HC_SR04,
    DHT22,
    HX711,
    Load_Cell,
    LoadCell,
    
    // Passives & Storage
    Potentiometer,
    Micro_SD,
    
    // Spreads
    ...CoreComponents, 
    ...BasicLibrary, 
    ...ExtraComponents
};