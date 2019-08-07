/*
    File:   banquetSubmit.js
    Auth:   Jesse Parnell
    Desc:   Generates the submission form for customers to
            make inquiries for banquets.
*/


let banqSubForm = () => {
    let container = sig(); //generates div container.

    //date & time submission text box...
    let objs = [
        sig("textbox", {
            text: "Date",
        }),

        sig("textbox", {
            text: "time",
        }),

        //Name first & last.
        sig("textbox", {
            text: "Contact Name",
        }),

        //Email.
        sig("textbox", {
            text: "Contact Email",
        }),

        //Phone number.
        sig("textbox", {
            text: "Contact Phone",
        }),

        //Contact Email or Phone preference, bullet.
    ];


    objs.map((obj) => {
        container.addChild(obj);
    });

    //make submission alert.
    //alert("Thank You, we will be contacting you soon!");

    return container;
};