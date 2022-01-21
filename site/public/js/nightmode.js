//learn from:
//https://stackoverflow.com/questions/37801882/how-to-change-css-root-color-variables-in-javascript

function setTheme(theme) {
    if (theme == 'Light') {
        localStorage.setItem('readingTheme', 'Light');
        document.documentElement.style.setProperty('--base-bg-color', 'rgb(255, 255, 255)');
        document.documentElement.style.setProperty('--gray-bg-color', 'rgb(235, 230, 255)');
        document.documentElement.style.setProperty('--base-font-color', 'rgb(51, 51, 51)');
    }
    if (theme == 'Dark') {
        localStorage.setItem('readingTheme', 'Dark');
        document.documentElement.style.setProperty('--base-bg-color', 'rgb(53, 52, 52)');
        document.documentElement.style.setProperty('--gray-bg-color', 'rgb(78, 78, 78)');
        document.documentElement.style.setProperty('--base-font-color', 'rgb(230, 230, 230)');
    }
}

//default theme is 'Light'
function loadTheme() {
    if (localStorage.getItem('readingTheme') == '') {
        setTheme('Light');
    } else {
        setTheme(localStorage.getItem('readingTheme'));
    }
}

function setLightTheme() {
    localStorage.setItem('readingTheme', 'Light');
    document.documentElement.style.setProperty('--base-bg-color', 'rgb(255, 255, 255)');
    document.documentElement.style.setProperty('--gray-bg-color', 'rgb(235, 230, 255)');
    document.documentElement.style.setProperty('--base-font-color', 'rgb(51, 51, 51)');
}

function setDarkTheme() {
    localStorage.setItem('readingTheme', 'Dark');
    document.documentElement.style.setProperty('--base-bg-color', 'rgb(53, 52, 52)');
    document.documentElement.style.setProperty('--gray-bg-color', 'rgb(78, 78, 78)');
    document.documentElement.style.setProperty('--base-font-color', 'rgb(230, 230, 230)');
}
