
let urlParse = (paramName) => {
    let url = document.URL;
    let index = url.search(paramName);
    index += paramName.length; //get the length of the param name.
    index++; //need to also skip over the equals sign.

    let strUrl = url.toString();
    return unescape(strUrl.substring(index, strUrl.length));
}

let mkInvite = () => {
    let userName = urlParse("name");
    return sig("p").addChild(sig("strong", {
        text: `Dear ${userName ? userName : "guest"},`
    }));
};