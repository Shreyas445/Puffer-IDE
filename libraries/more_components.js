// libraries/more_components.js

export const OLED_SSD1306 = {
    width: 150, 
    height: 120,
    svg: `
        <!-- Deep Blue PCB -->
        <rect x="0" y="0" width="150" height="120" rx="6" fill="#0c4a6e" stroke="#0369a1" stroke-width="2.5"/>
        
        <!-- Mounting Holes -->
        <circle cx="8" cy="8" r="3" fill="#090d16" stroke="#38bdf8" stroke-width="0.8"/>
        <circle cx="142" cy="8" r="3" fill="#090d16" stroke="#38bdf8" stroke-width="0.8"/>
        <circle cx="8" cy="112" r="3" fill="#090d16" stroke="#38bdf8" stroke-width="0.8"/>
        <circle cx="142" cy="112" r="3" fill="#090d16" stroke="#38bdf8" stroke-width="0.8"/>
        
        <!-- OLED Glass Screen Bezel -->
        <rect x="28" y="14" width="112" height="92" rx="3" fill="#030712" stroke="#111827" stroke-width="2"/>
        <!-- Active OLED Glowing Area -->
        <rect x="34" y="20" width="100" height="80" rx="1" fill="#020617"/>
        
        <!-- Screen UI Content Mockup (Vibrant Blue & Yellow) -->
        <text x="84" y="36" fill="#facc15" font-family="'Segoe UI', sans-serif" font-size="8" font-weight="bold" text-anchor="middle">PUFFER OLED 0.96"</text>
        <line x1="38" y1="42" x2="130" y2="42" stroke="#0284c7" stroke-width="1"/>
        
        <!-- Waveform display graph -->
        <path d="M 40 70 L 52 70 L 58 52 L 64 85 L 70 60 L 76 75 L 82 70 L 128 70" fill="none" stroke="#38bdf8" stroke-width="1.8" stroke-linecap="round"/>
        <text x="84" y="94" fill="#38bdf8" font-family="monospace" font-size="7" text-anchor="middle">I2C: 0x3C • 128x64</text>
        
        <!-- Left Side Pin Header Strip -->
        <rect x="0" y="20" width="12" height="80" fill="#0f172a" rx="1"/>
        <circle cx="5" cy="30" r="2.5" fill="#facc15"/>
        <circle cx="5" cy="50" r="2.5" fill="#facc15"/>
        <circle cx="5" cy="70" r="2.5" fill="#facc15"/>
        <circle cx="5" cy="90" r="2.5" fill="#facc15"/>
    `,
    pins: {
        "GND": { x: 0, y: 30 },
        "VCC": { x: 0, y: 50, aliases: ["3V3", "5V", "VDD"] },
        "SCL": { x: 0, y: 70, aliases: ["SCK", "CLOCK"] },
        "SDA": { x: 0, y: 90, aliases: ["DATA"] }
    }
};

export const Ultrasonic_HC_SR04 = {
    width: 170, 
    height: 100,
    svg: `
        <!-- Blue Sensor PCB -->
        <rect x="0" y="0" width="170" height="100" rx="6" fill="#0284c7" stroke="#0369a1" stroke-width="2.5"/>
        
        <!-- Ultrasonic Transducer 1 (Transmitter 'T') -->
        <circle cx="48" cy="45" r="28" fill="#e2e8f0" stroke="#94a3b8" stroke-width="2.5"/>
        <circle cx="48" cy="45" r="23" fill="#cbd5e1"/>
        <!-- Mesh Grill Pattern -->
        <circle cx="48" cy="45" r="16" fill="none" stroke="#64748b" stroke-width="1" stroke-dasharray="2,2"/>
        <text x="48" y="49" fill="#0f172a" font-family="sans-serif" font-size="12" font-weight="900" text-anchor="middle">T</text>
        
        <!-- Ultrasonic Transducer 2 (Receiver 'R') -->
        <circle cx="122" cy="45" r="28" fill="#e2e8f0" stroke="#94a3b8" stroke-width="2.5"/>
        <circle cx="122" cy="45" r="23" fill="#cbd5e1"/>
        <!-- Mesh Grill Pattern -->
        <circle cx="122" cy="45" r="16" fill="none" stroke="#64748b" stroke-width="1" stroke-dasharray="2,2"/>
        <text x="122" y="49" fill="#0f172a" font-family="sans-serif" font-size="12" font-weight="900" text-anchor="middle">R</text>
        
        <!-- Crystal Oscillator & Electronics -->
        <rect x="76" y="24" width="18" height="32" rx="4" fill="#d1d5db" stroke="#9ca3af" stroke-width="1"/>
        <text x="85" y="42" fill="#475569" font-family="monospace" font-size="5" font-weight="bold" text-anchor="middle" transform="rotate(-90 85 42)">MAX232</text>
        
        <!-- Model Label -->
        <text x="85" y="14" fill="#ffffff" font-family="'Segoe UI', sans-serif" font-size="8" font-weight="bold" text-anchor="middle">HC-SR04</text>
        
        <!-- Bottom Header Strip -->
        <rect x="35" y="88" width="100" height="12" fill="#0f172a" rx="1"/>
        <circle cx="45" cy="94" r="2.5" fill="#facc15"/>
        <circle cx="72" cy="94" r="2.5" fill="#facc15"/>
        <circle cx="98" cy="94" r="2.5" fill="#facc15"/>
        <circle cx="125" cy="94" r="2.5" fill="#facc15"/>
    `,
    pins: {
        "VCC":  { x: 45, y: 100, aliases: ["5V"] },
        "TRIG": { x: 72, y: 100, aliases: ["TRIGGER"] },
        "ECHO": { x: 98, y: 100 },
        "GND":  { x: 125, y: 100 }
    }
};

export const Servo_SG90 = {
    width: 140, 
    height: 120,
    svg: `
        <!-- Translucent Blue Servo Body -->
        <rect x="25" y="20" width="90" height="75" rx="4" fill="#0284c7" fill-opacity="0.9" stroke="#0369a1" stroke-width="2"/>
        
        <!-- Mounting Flanges (Left & Right) -->
        <rect x="10" y="42" width="15" height="24" rx="2" fill="#0284c7" stroke="#0369a1" stroke-width="1.5"/>
        <circle cx="17" cy="54" r="3.5" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1"/>
        
        <rect x="115" y="42" width="15" height="24" rx="2" fill="#0284c7" stroke="#0369a1" stroke-width="1.5"/>
        <circle cx="123" cy="54" r="3.5" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1"/>
        
        <!-- Output Spindle Cylinder (Top) -->
        <rect x="42" y="10" width="32" height="12" rx="3" fill="#0369a1"/>
        <circle cx="58" cy="14" r="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
        <circle cx="58" cy="14" r="3" fill="#64748b"/>
        
        <!-- White Servo Horn (Arm) -->
        <path d="M 58 14 L 105 8 A 6 6 0 0 1 105 20 Z" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
        <circle cx="75" cy="13" r="1.5" fill="#64748b"/>
        <circle cx="88" cy="13" r="1.5" fill="#64748b"/>
        <circle cx="98" cy="13" r="1.5" fill="#64748b"/>
        
        <!-- SG90 Label Banner -->
        <rect x="35" y="55" width="70" height="22" rx="2" fill="#1e293b"/>
        <text x="70" y="66" fill="#38bdf8" font-family="'Segoe UI', sans-serif" font-size="8" font-weight="900" text-anchor="middle">Micro Servo</text>
        <text x="70" y="74" fill="#facc15" font-family="monospace" font-size="7" font-weight="bold" text-anchor="middle">SG90 9g</text>
        
        <!-- 3-Wire Cable exiting bottom -->
        <line x1="45" y1="95" x2="45" y2="120" stroke="#78350f" stroke-width="4"/> <!-- Brown GND -->
        <line x1="70" y1="95" x2="70" y2="120" stroke="#dc2626" stroke-width="4"/> <!-- Red VCC -->
        <line x1="95" y1="95" x2="95" y2="120" stroke="#f59e0b" stroke-width="4"/> <!-- Yellow/Orange PWM -->
    `,
    pins: {
        "GND": { x: 45, y: 120, aliases: ["BROWN", "-", "0V"] },
        "VCC": { x: 70, y: 120, aliases: ["RED", "+", "5V"] },
        "PWM": { x: 95, y: 120, aliases: ["SIG", "SIGNAL", "ORANGE", "YELLOW"] }
    }
};

export const DHT22 = {
    width: 100, 
    height: 140,
    svg: `
        <!-- White Slotted Plastic Housing -->
        <rect x="10" y="10" width="80" height="95" rx="5" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2.5"/>
        
        <!-- Mounting hole tab -->
        <path d="M 40 10 L 40 2 A 10 10 0 0 1 60 2 L 60 10 Z" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
        <circle cx="50" cy="6" r="3" fill="#0f172a"/>
        
        <!-- Ventilation Slits Grill -->
        <g stroke="#94a3b8" stroke-width="2.5" stroke-linecap="round">
            <line x1="24" y1="28" x2="76" y2="28"/>
            <line x1="24" y1="38" x2="76" y2="38"/>
            <line x1="24" y1="48" x2="76" y2="48"/>
            <line x1="24" y1="58" x2="76" y2="58"/>
            <line x1="24" y1="68" x2="76" y2="68"/>
        </g>
        
        <!-- Inner sensor visible through slits -->
        <rect x="36" y="34" width="28" height="28" rx="2" fill="#0284c7" opacity="0.3"/>
        
        <!-- Label Plate -->
        <text x="50" y="86" fill="#0f172a" font-family="'Segoe UI', sans-serif" font-size="8" font-weight="900" text-anchor="middle">DHT22</text>
        <text x="50" y="96" fill="#64748b" font-family="sans-serif" font-size="6" font-weight="bold" text-anchor="middle">AM2302</text>
        
        <!-- 3 Metal Pins exiting bottom -->
        <line x1="25" y1="105" x2="25" y2="140" stroke="#94a3b8" stroke-width="3"/>
        <line x1="50" y1="105" x2="50" y2="140" stroke="#94a3b8" stroke-width="3"/>
        <line x1="75" y1="105" x2="75" y2="140" stroke="#94a3b8" stroke-width="3"/>
    `,
    pins: {
        "VCC":  { x: 25, y: 140, aliases: ["3V3", "5V", "+"] },
        "DATA": { x: 50, y: 140, aliases: ["SIG", "OUT", "SDA"] },
        "GND":  { x: 75, y: 140, aliases: ["-", "0V"] }
    }
};

export const Potentiometer = {
    width: 90, 
    height: 100,
    svg: `
        <!-- Circular Blue Body Base -->
        <circle cx="45" cy="42" r="32" fill="#0284c7" stroke="#0369a1" stroke-width="2.5"/>
        <circle cx="45" cy="42" r="26" fill="#0f172a"/>
        
        <!-- Rotary Shaft & Knob -->
        <circle cx="45" cy="42" r="16" fill="#d1d5db" stroke="#9ca3af" stroke-width="1.5"/>
        <circle cx="45" cy="42" r="10" fill="#9ca3af"/>
        <!-- Shaft Notch Indicator -->
        <line x1="45" y1="42" x2="45" y2="28" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/>
        
        <!-- Graduation Dial Marks -->
        <circle cx="45" cy="42" r="22" fill="none" stroke="#38bdf8" stroke-width="1" stroke-dasharray="2,5"/>
        
        <!-- 3 Metal Leads at Bottom -->
        <line x1="20" y1="74" x2="20" y2="100" stroke="#94a3b8" stroke-width="3.5"/>
        <line x1="45" y1="74" x2="45" y2="100" stroke="#94a3b8" stroke-width="3.5"/>
        <line x1="70" y1="74" x2="70" y2="100" stroke="#94a3b8" stroke-width="3.5"/>
        
        <text x="45" y="8" fill="#facc15" font-family="'Segoe UI', sans-serif" font-size="7" font-weight="bold" text-anchor="middle">10K POT</text>
    `,
    pins: {
        "VCC":   { x: 20, y: 100, aliases: ["1", "+", "5V"] },
        "WIPER": { x: 45, y: 100, aliases: ["SIG", "OUT", "2"] },
        "GND":   { x: 70, y: 100, aliases: ["3", "-", "0V"] }
    }
};

export const Push_Button = {
    width: 80, 
    height: 80,
    svg: `
        <!-- Metallic Tactile Switch Housing -->
        <rect x="15" y="15" width="50" height="50" rx="4" fill="#cbd5e1" stroke="#94a3b8" stroke-width="2"/>
        
        <!-- 4 Corner Rivets -->
        <circle cx="21" cy="21" r="2" fill="#475569"/>
        <circle cx="59" cy="21" r="2" fill="#475569"/>
        <circle cx="21" cy="59" r="2" fill="#475569"/>
        <circle cx="59" cy="59" r="2" fill="#475569"/>
        
        <!-- Round Actuator Button -->
        <circle cx="40" cy="40" r="16" fill="#1e293b" stroke="#0f172a" stroke-width="1.5"/>
        <circle cx="40" cy="40" r="12" fill="#334155"/>
        <circle cx="40" cy="40" r="7" fill="#1e293b"/>
        
        <!-- 4 Solder Legs -->
        <line x1="0" y1="28" x2="15" y2="28" stroke="#94a3b8" stroke-width="3"/>
        <line x1="0" y1="52" x2="15" y2="52" stroke="#94a3b8" stroke-width="3"/>
        <line x1="65" y1="28" x2="80" y2="28" stroke="#94a3b8" stroke-width="3"/>
        <line x1="65" y1="52" x2="80" y2="52" stroke="#94a3b8" stroke-width="3"/>
        
        <text x="40" y="75" fill="#94a3b8" font-family="'Segoe UI', sans-serif" font-size="6" font-weight="bold" text-anchor="middle">TACT SWITCH</text>
    `,
    pins: {
        "1": { x: 0, y: 28, aliases: ["A1", "IN1"] },
        "2": { x: 0, y: 52, aliases: ["A2", "IN2"] },
        "3": { x: 80, y: 28, aliases: ["B1", "OUT1"] },
        "4": { x: 80, y: 52, aliases: ["B2", "OUT2"] }
    }
};
