/*
    File: submittr.js
    Auth: Jesse Parnell
    Desc: Allows for a customer to make a submission where the
          input is emailed directly to events@baily.com.
*/

/*
    url Ex: "172.100.82.12",
    inputObj Ex: {
        name:
        email:
        phoneNumber:
        subject:
        message:
    };
*/
let sCnt = 0;
let submittr = (url, inputObj) => {
    let dfd = new $.Deferred();
    //make sure this can only be run once per browser session.
    if (!sCnt) {
        $.post(url, inputObj, () => {
            ++sCnt;
            dfd.resolve(true);
        });
    }
    return dfd.promise();
};