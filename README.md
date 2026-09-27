# Puffer EDA | Schematic Studio

A lightning-fast, text-based Electronic Design Automation (EDA) schematic editor and visual simulator built for modern embedded engineers and makers. Write readable, high-level declarative code and get instant, beautiful, interactive hardware schematics.

![Puffer EDA](https://img.shields.io/badge/Puffer-EDA%20Studio%20v2.0-0284c7?style=for-the-badge&logo=microchip&logoColor=white)
![Status](https://img.shields.io/badge/Status-Active%20Development-10b981?style=for-the-badge)
![Zero Dependencies](https://img.shields.io/badge/Dependencies-Vanilla%20JS%20%2B%20SVG-f59e0b?style=for-the-badge)

---

## 🌟 Key Features

### 1. ⚡ Declarative Schematic DSL
Define parts, power rails, communication buses, and sensors using intuitive dot-notation:
```puffer
mcu = ESP32_devkit_v1
solar = Solar_Panel
psu = Power_Supply_12V
relay = Relay_Module
oled = OLED_SSD1306

// Solar charges the 12V System
solar.+, solar.- -> psu.12V, psu.GND : red, black

// 12V Relay Switching
psu.12V -> relay.COM : red
relay.NO -> fan.VCC : red
fan.GND -> psu.GND : black

// I2C Display
mcu.GPIO22, mcu.GPIO21 -> oled.SCL, oled.SDA : yellow
```

### 2. 🤖 AI Prompt Studio
Integrated prompt engineering engine that generates strict, hallucination-free prompts for **ChatGPT**, **Claude**, **Gemini**, and **DeepSeek**.
- Complete component registry & exact valid pins provided automatically.
- Color standards and formal grammar rules.
- Built-in circuit request generator to translate natural language into Puffer code.

### 3. 🎨 High-Fidelity Vector Graphics (SVG)
- Photorealistic electronic modules with accurate pinouts, silk screens, ICs, mounting holes, and LEDs.
- Orthogonal routing engine with draggable wire segments and auto-simplification.
- Smooth quadratic Bézier curved wire mode.

### 4. 🚀 Modern UI & UX Enhancements
- **Draggable Splitter**: Seamlessly resize the code editor panel between 340px and 850px.
- **Preset Circuits**: 1-click loading of complete verified schematics (IoT Greenhouse, LoRa Field Node, 12V Motor Automation, Ultrasonic Radar, etc.).
- **Live Circuit Validator**: Real-time syntax and pin diagnostics with error tooltips.
- **Categorized Library Drawer**: Filter by MCUs, Power, Sensors, Actuators, Wireless, Displays, or Passives.
- **Natural Mouse Wheel Zoom & Pan**: Fluid navigation centered at the cursor.
- **Fit-to-Screen Auto-Framing**: Automatically centers and scales all components to fit the window.
- **Export Options**: 1-click export to vector SVG or high-resolution PNG image.
- **Keyboard Shortcuts**: Rotate (`R`), Flip Horizontal (`H`), Flip Vertical (`V`), Delete (`Delete`), Fit (`0`), Zoom (`+`/`-`).

---

## 📦 Component Library

| Category | Component Name | Description & Pins |
| :--- | :--- | :--- |
| **Microcontrollers** | `ESP32_devkit_v1` | 38-Pin Dual-Core WiFi/BLE SoC (GPIO0-GPIO39, 3V3, 5V, GND) |
| | `Arduino_Uno` | ATmega328P Development Board (D0-D13, A0-A5, 5V, 3V3, GND, VIN) |
| | `STM32_Bluepill` | ARM Cortex-M3 72MHz Board (PA0-PA15, PB0-PB15, PC13-PC15) |
| **Power Management** | `Power_Supply_12V` | 12V 5A Regulated DC Power Supply (12V, GND, AC_L, AC_N) |
| | `Solar_Panel` | 18V Monocrystalline Photovoltaic Panel (`+`, `-`) |
| | `LM2596_Buck` | DC-DC Step-Down Regulator (IN+, IN-, OUT+, OUT-) |
| | `L7805CV` / `L7805` | 5V 1.5A Linear Regulator / TO-220 Package (IN, GND, OUT / Gate, Drain, Source) |
| | `VCC` / `GND` | Power Supply Symbols / Common Ground Rail |
| **Actuators & Relays**| `Relay_Module` | 5V/10A Optocoupled Relay (VCC, GND, IN, NO, COM, NC) |
| | `Servo_SG90` | 9g Micro Position Servo (GND, VCC, PWM) |
| | `DC_Fan_5V` | 5V Brushless Cooling Fan (VCC, GND) |
| | `Buzzer` | Active Piezo Sounder (VCC, GND, SIG) |
| | `Heater` | High Temp Nichrome Element (IN1, IN2) |
| | `Mist_Sprayer` | Ultrasonic Piezo Atomizer Driver (VCC, GND) |
| | `Push_Button` | 4-Pin Momentary Tactile Switch (1, 2, 3, 4) |
| **Wireless & RF** | `LoRa_SX1278` | Ai-Thinker Ra-02 433MHz Long Range Module (NSS, SCK, MOSI, MISO, DIO0-DIO5, RST) |
| | `NRF24L01` | 2.4GHz RF Transceiver (CE, CSN, SCK, MOSI, MISO, IRQ) |
| | `SIM800L` | Quad-Band Cellular GSM/GPRS Module (NET, VCC, RST, RX, TX, GND) |
| | `Antenna` | Generic RF Whip/Dipole Antenna symbol |
| **Displays** | `OLED_SSD1306` | 0.96" 128x64 I2C OLED Screen (GND, VCC, SCL, SDA) |
| | `I2C_LCD` | 16x2 Character LCD with I2C Backpack (GND, VCC, SDA, SCL) |
| **Sensors** | `Load_Cell` / `LoadCell` | 4-Wire Strain Gauge Load Cell (**RED**, **BLACK**, **GREEN**, **WHITE**) |
| | `HX711` | 24-Bit ADC Load Cell Weighing Module (E+, E-, A+, A-, B+, B-, DT, SCK) |
| | `Ultrasonic_HC_SR04`| Ultrasonic Distance Rangefinder (VCC, TRIG, ECHO, GND) |
| | `DHT22` | Digital Temperature & Humidity Sensor (VCC, DATA, GND) |
| | `Photo_Diode` | Light Sensitive Photodiode (+, -) |
| **Passives & Semis** | `Resistor` | Parametric Color-Banded Resistor (e.g. `Resistor(10k)`) |
| | `LED` | Light Emitting Diode (+, -) |
| | `Capacitor` | Decoupling/Filter Capacitor (1, 2) |
| | `Potentiometer` | 10k Rotary Trimmer (VCC, WIPER, GND) |
| | `IRFZ44N` | 55V 49A N-Channel Power MOSFET (Gate, Drain, Source) |
| | `N_MOSFET` / `NPN_Transistor` | Schematic Symbols (G/D/S, B/C/E) |
| **Storage** | `Micro_SD` | SPI Micro SD Card Slot (CS, SCK, MOSI, MISO, VCC, GND) |

---

## 🔌 Puffer HDL Syntax Guide

### 1. Defining Components
```puffer
alias = Component_Name
```
For parametric passives:
```puffer
r1 = Resistor(220)
r2 = Resistor(10k)
```

### 2. Wiring Connections
Single wire connection:
```puffer
mcu.GPIO23 -> relay.IN : yellow
```

Multi-wire parallel bus:
```puffer
mcu.PA5, mcu.PA6, mcu.PA7 -> lora.SCK, lora.MISO, lora.MOSI : yellow, blue, green
```

1-to-N power fan-out:
```puffer
pwr.VCC -> mcu.5V, relay.VCC, oled.VCC : red
gnd.GND -> mcu.GND_1, relay.GND, oled.GND : black
```

N-to-1 power junction:
```puffer
mcu.GND_1, relay.GND -> psu.GND : black
```

### 3. Color Standard Conventions
- **`red`**: Positive Power (+12V, 5V, 3.3V, VCC, VBAT)
- **`black`**: Ground (GND, 0V, Common Negative)
- **`yellow`**: I2C (SDA, SCL), Clock signals (SCK, CLK)
- **`blue`**: SPI Data lines (MOSI, MISO)
- **`orange`**: Chip Select / Control lines (CS, CSN, SS, CE, EN, RST)
- **`green`**: Analog Signals, Data, Sensors (TRIG, ECHO, DATA, WIPER)
- **`purple`**: UART Serial (TX, RX)

### 4. Load Cell & HX711 Instrumentation Wiring
`Load_Cell` (or `LoadCell`) has 4 color-coded wire leads: **RED**, **BLACK**, **GREEN**, and **WHITE**:
```puffer
load.RED -> hx.E+ : red      // Excitation Power (+)
load.BLACK -> hx.E- : black  // Excitation Ground (-)
load.GREEN -> hx.A+ : green  // Analog Output (+)
load.WHITE -> hx.A- : white  // Analog Output (-)
```

---

## 🛠️ Adding New Components

To add a new component:
1. Create a file in `libraries/your_component.js`:
```javascript
export const Your_Component = {
    category: 'Sensors',
    description: 'Custom Sensor Module',
    width: 150, 
    height: 100,
    svg: `<rect x="0" y="0" width="150" height="100" fill="#1e293b"/>...`,
    pins: {
        "VCC": { x: 0, y: 30, aliases: ["5V", "3V3"] },
        "GND": { x: 0, y: 70, aliases: ["0V"] }
    }
};
```
2. Import and export it in `manifest.js`:
```javascript
import { Your_Component } from './libraries/your_component.js';

export const ComponentRegistry = {
    Your_Component,
    ...
};
```
It will automatically register for CodeMirror syntax highlighting, library search, live validation, and AI prompt generation!

---

## ⌨️ Keyboard Shortcuts & Gestures

| Key / Gesture | Action |
| :--- | :--- |
| **Mouse Left Drag** | Pan canvas / Drag components / Drag wire bend segments |
| **Mouse Wheel** | Smooth zoom in / zoom out |
| **Right Click** | Context menu (Rotate, Flip, Add Corner, Reset Route) |
| **`R`** | Rotate selected component by 90° |
| **`H`** | Flip selected component horizontally |
| **`V`** | Flip selected component vertically |
| **`Delete` / `Backspace`** | Remove selected component and its wiring |
| **`0`** | Fit schematic to window |
| **`+` / `-`** | Zoom in / Zoom out |
| **`?`** | Open help cheatsheet |

---

## 📄 License
MIT License. Open-source for all hardware developers, educators, and makers.
