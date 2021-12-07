export default function useCSSVar(name: string, fallback: string):string {
    return typeof navigator === "undefined"
        ? fallback
        : getComputedStyle(document.documentElement).getPropertyValue(name);
}