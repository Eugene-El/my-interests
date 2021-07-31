export function decoreateAllLinksOnContentLoaded()
{
    // document.addEventListener("DOMContentLoaded", decoreateAllLinks);
    window.addEventListener("load", decoreateAllLinks);
}

export function decoreateAllLinks()
{
    const links = Array.from(document.getElementsByTagName("a"));
    for (let link of links) {
        decorateLink(link);
    }
}

export function decorateLink(link: HTMLAnchorElement)
{
    if (!link)
        return;

    const rect = link.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const xmlns = "http://www.w3.org/2000/svg";

    if (link.querySelector("svg.linkDecoration"))
        return;

    const svg = document.createElementNS(xmlns, "svg");
    svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
    svg.setAttribute("xmlns", xmlns);
    svg.classList.add("linkDecoration");
    svg.style.strokeDasharray = `${width} ${width * 2 + height}`;
    svg.style.strokeDashoffset = `${-height}`;
    const path = document.createElementNS(xmlns, "path");
    path.setAttribute("d", `M 0 0 L 0 ${height} L ${width} ${height} L ${width} 0 Z`);

    link.addEventListener("mouseenter", () => {
        svg.style.strokeDasharray = `${width * 2 + height * 3}`;
        svg.style.strokeDashoffset = `${- width * 4 - height * 5}`;
    });
    link.addEventListener("mouseleave", () => {
        svg.style.strokeDasharray = `${width} ${width * 2 + height}`;
        svg.style.strokeDashoffset = `${- height}`;
    });

    svg.appendChild(path);
    link.appendChild(svg);
}