import { SafeHtml } from "@angular/platform-browser";

export interface navlinkProps {
    "path": string,
    "label": string,
    "icon"?: SafeHtml
}

export interface signInFieldsProps {
    "label": string,
    "name": string,
    "type": string,
    "placeholder": string
}

export interface paletteColorsProps {
    "name": string,
    "value": string
    "class": string
}