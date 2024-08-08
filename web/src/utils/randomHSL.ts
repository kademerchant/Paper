export default function randomLightHex(hue: number, sat:number, light:number):string {
    light /= 100;
    const a = sat * Math.min(light, 1 - light) / 100;
    const format = (n: number):string => {
      const k = (n + hue / 30) % 12;
      const color = light - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color).toString(16).padEnd(2, '0');
    };
    
    return `#${format(0)}${format(8)}${format(4)}`;
  }