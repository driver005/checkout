export const hexToHSLA = (H: string, opacity: number) => {
    // Convert hex to RGB first
    let r: any = 0,
        g: any = 0,
        b: any = 0
    if (H.length === 4) {
        r = '0x' + H[1] + H[1]
        g = '0x' + H[2] + H[2]
        b = '0x' + H[3] + H[3]
    } else if (H.length === 7) {
        r = '0x' + H[1] + H[2]
        g = '0x' + H[3] + H[4]
        b = '0x' + H[5] + H[6]
    }
    // Then to HSL
    r /= 255
    g /= 255
    b /= 255
    let cmin = Math.min(r, g, b),
        cmax = Math.max(r, g, b),
        delta = cmax - cmin,
        h = 0,
        s = 0,
        l = 0,
        o = 0

    if (delta === 0) h = 0
    else if (cmax === r) h = ((g - b) / delta) % 6
    else if (cmax === g) h = (b - r) / delta + 2
    else h = (r - g) / delta + 4

    h = Math.round(h * 60)

    if (h < 0) h += 360

    l = (cmax + cmin) / 2
    s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1))
    s = +(s * 100).toFixed(1)
    l = +(l * 100).toFixed(1)
    o = opacity * 100

    return 'hsla(' + h + ',' + s + '%,' + l + '%,' + o + '%)'
}

export const LightenDarkenColor = (hexColor: string, magnitude: number) => {
    if (hexColor === "#ffffff" && magnitude >= 0) magnitude *= -1 
    if (hexColor === "#000000" && magnitude <= 0) magnitude *= 1 
    hexColor = hexColor.replace(`#`, ``);
    if (hexColor.length === 6) {
        const decimalColor = parseInt(hexColor, 16);
        let r = (decimalColor >> 16) + magnitude;
        r > 255 && (r = 255);
        r < 0 && (r = 0);
        let g = (decimalColor & 0x0000ff) + magnitude;
        g > 255 && (g = 255);
        g < 0 && (g = 0);
        let b = ((decimalColor >> 8) & 0x00ff) + magnitude;
        b > 255 && (b = 255);
        b < 0 && (b = 0);
        return `#${(g | (b << 8) | (r << 16)).toString(16)}`;
    } else {
        return hexColor;
    }
};
