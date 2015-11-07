var host = "wooooo.github.io";
if ((host == window.location.host) && (window.location.protocol != 'https:')) {
    location.protocol = 'https:';
}