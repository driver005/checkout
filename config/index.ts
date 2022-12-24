import { hexToHSLA } from "utils"


export const PrimaryColor = '#0570de'
export const BackgroundColor = '#ffffff'
export const TextColor = '#30313d'
export const Shadow = `0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 6px rgba(0, 0, 0, 0.02), 0 0 0 3px ${hexToHSLA(PrimaryColor, 0.25)}, 0 1px 1px 0 rgba(0, 0, 0, 0.08)`
export const BorderColor = hexToHSLA(PrimaryColor, 0.5) 
export const Border = 'md'