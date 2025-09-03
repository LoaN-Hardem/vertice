export const navigateTo = (path) => {
    window.history.pushState({}, '', path);
    // Trigger a custom event to notify that the route has changed
    window.dispatchEvent(new Event('routeChange'));
};

export const getCurrentPath = () => {
    return window.location.pathname;
};

export const initRouter = () => {
    window.onpopstate = () => {
        // Trigger a custom event to notify that the route has changed
        window.dispatchEvent(new Event('routeChange'));
    };
};