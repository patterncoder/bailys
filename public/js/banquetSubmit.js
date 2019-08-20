/*
    File:   banquetSubmit.js
    Auth:   Jesse Parnell
    Desc:   Generates the submission form for customers to
            make inquiries for banquets.
*/


let banqSubForm = () => {
    let cssDef = {
        textbox: {
            "float": "left",
            "clear": "left",
            "color": "black",
            "border-radius": "5px",
        },
        container: {

        }
    };

    let container = sig(); //generates div container.
    container.css(cssDef.container);

    let idLst = {
        "date": "dateBx",
        "time": "timeBx",
        "name": "nameBx",
        "email": "emailBx",
        "phone": "phoneBx",
        "details": "detailsBx",
    };

    let getID = (name) => {
        return idLst[name];
    };

    //date & time submission text box...
    let objs = [
        sig("textbox", {
            text: "Date",
            id: idLst.date,
        }).css(cssDef.textbox).event("click", () => {
            if ($("#dateBx").val() == "Date") {
                //show the date picker...
                $("#dateBx").val("");
            }
        }),

        sig("textbox", {
            text: "time",
            id: idLst.time,
        }).css(cssDef.textbox).event("click", () => {
            if ($(`#timeBx`).val() == "time") {
                //show the time picker...
                $(`#timeBx`).val("");
            }
        }),

        //Name first & last.
        sig("textbox", {
            text: "Contact Name",
            id: idLst.name,
        }).css(cssDef.textbox).event("click", () => {
            if ($(`#nameBx`).val() == "Contact Name") {
                //clear text...
                $(`#nameBx`).val("");
            }
        }),

        //Email.
        sig("textbox", {
            text: "Contact Email",
            id: idLst.email,
        }).css(cssDef.textbox).event("click", () => {
            if ($(`#emailBx`).val() == "Contact Email") {
                //clear text...
                $(`#emailBx`).val("");
            }
        }),

        //Phone number.
        sig("textbox", {
            text: "Contact Phone",
            id: idLst.phone,
        }).css(cssDef.textbox).event("click", () => {
            if ($(`#phoneBx`).val() == "Contact Phone") {
                //clear text...
                $(`#phoneBx`).val("");
            }
        }),

        sig("textarea", {
            text: "Any details we should know about?",
            id: idLst.details,
        }).css(cssDef.textbox).event("click", () => {
            if ($(`#detailsBx`).text() == "Any details we should know about?") {
                //clear text...
                $(`#detailsBx`).val("");
            }
        })

        //Contact Email or Phone preference, bullet.
    ];

    let ids = [];

    objs.map((obj) => {
        //collect all of the id's.
        ids.push(obj.id);
        //places it inside another div to act as a secondary container for refreshing.
        let tmp = sig().addChild(obj);
        container.addChild(tmp);
    });

    let getData = () => {
        let data = [];
        ids.map((obj) => {
            console.log(`${obj}:`, $(`#${obj}`).val());
            let tmp = {
                id: obj,
                value: $(`#${obj}`).val()
            }
            data.push(tmp);
        });
        return data;
    };

    let dtaSearch = (id, dataArr) => {
        for (let i = 0; i < dataArr.length; ++i) {
            if (dataArr[i].id == id) {
                return dataArr[i];
            }
        }
        return false; //if the search didn't find anything.
    };

    let genSubmit = (dta) => {
        return {
            name: dtaSearch(getID("name"), dta),
            email: dtaSearch(getID("email"), dta),
            phoneNumber: dtaSearch(getID("phone"), dta),
            message: `
                date: ${dtaSearch(getID("date"), dta)}
                time: ${dtaSearch(getID("time"), dta)}
                details: ${dtaSearch(getID("details"), dta)}
            `
        }
    };

    let check = (data) => {
        let complete = true;
        data.map((obj) => {
            if (arrdb.get(obj.id).text == obj.value || obj.value == "") {
                complete = false;
                arrdb.get(obj.id).css({
                    "color": "red"
                });
                //restore the original text, if the input is invalid.
                $(`#${obj.id}`).val(arrdb.get(obj.id).text);
            }
        });
        return complete;
    };

    let submit = sig("button", {
        text: "submit",
        id: "formSubmitBtn",
    }).css({
        "float": "left",
        "clear": "left",
        "color": "black"
    }).event("click", () => {
        //do submission function.
        console.log("submit!");

        let data = getData();

        let isComplete = check(data);

        if (!isComplete) {
            alert("Fill in all of the boxes, make sure you filled everything out.")
            return;
        }

        try {
            $.ajax({
                url: "https://baily.com/inquiry",
                type: "POST",
                dataType: "jsonp",
                data: genSubmit(data),
                beforeSend: function (request) {
                    request.setRequestHeader("Content-Type", "application/json");
                },
                success: function (data, textStatus, jqXHR) {
                    alert(`Thank you ${$("#nameBx").val()}, we will be contacting you soon!`);
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    console.log(errorThrown);
                    alert("Failed to send your request, please try again later.");
                }
            });
        } catch (e) {
            alert(`Failed to send your request, please try again later.`);
            console.log(e);
        }

    });

    container.addChild(submit);

    //make submission alert.
    //alert("Thank You, we will be contacting you soon!");

    return container;
};