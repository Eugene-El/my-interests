export function loadThemeSelector()
{
    const themeName = localStorage.getItem("theme");
    if (themeName)
        document.documentElement.className = themeName;
    
    const themeSelector = document.createElement("div");
    themeSelector.style.position = "fixed";
    themeSelector.style.top = "1em";
    themeSelector.style.right = "1em";
    themeSelector.style.display = "flex";
    themeSelector.style.gap = "1em";
    
    [
        { name: "sleekAndFuturistic", color1: "#D9B08C", color2: "#FFCB9A" },
        { name: "cleanAndModern", color1: "#DEF2F1", color2: "#FEFFFF" },
        { name: "accentThatPop", color1: "#4C495D", color2: "#564F6F" }
    ].forEach(theme => {
        const themeElement = document.createElement("div");
        themeElement.style.borderRadius = "50%";
        themeElement.style.cursor = "pointer";
        themeElement.style.width = "2em";
        themeElement.style.height = "2em";
        themeElement.style.borderWidth = "2px";
        themeElement.style.backgroundColor = theme.color1;
        themeElement.style.borderColor = theme.color2;
    
        themeElement.addEventListener("click", () => {
            document.documentElement.className = theme.name;
            localStorage.setItem("theme", theme.name);
        });
        themeSelector.appendChild(themeElement);
    });
    
    document.body.appendChild(themeSelector);
}