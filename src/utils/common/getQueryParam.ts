export default (key: string) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    return parameters.get(key);
};
