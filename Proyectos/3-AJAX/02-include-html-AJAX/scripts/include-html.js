document.addEventListener("DOMContentLoaded", (e) => {
    const includeHTML = async (el, url) => {
        try {
            const response = await fetch(url);
            if (response.ok) {
                const text = await response.text();
                el.outerHTML = text;
            } else {
                el.outerHTML = `<div><p>Error ${response.status}: ${response.statusText}</p></div>`;
            }
        } catch (error) {
            el.outerHTML = `<div><p>Error: ${error}</p></div>`;
        }
    };

    document
        .querySelectorAll("[data-include]")
        .forEach((el) => includeHTML(el, el.getAttribute("data-include")));
});