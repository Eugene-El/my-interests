import { decoreateAllLinksOnContentLoaded } from "./linksDecoration";
import { loadThemeSelector } from "./themes";

export function runOnEveryPage()
{
    loadThemeSelector();
    decoreateAllLinksOnContentLoaded();
}