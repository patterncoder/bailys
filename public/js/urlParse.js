
let urlParse = (paramName) => {
    let url = document.URL;
    let paramsSearch = new URLSearchParams(url.search);
    console.log(url)
    return paramsSearch.has(paramName) ? paramsSearch.get(paramName) : undefined;
}

let mkInvite = () => {
    let userName = urlParse("name");
    return sig("p").addChild(sig("strong", {
        text: `Dear ${userName ? userName : "guest"},`
    }));
};