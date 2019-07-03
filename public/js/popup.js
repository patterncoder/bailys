console.log("running popup");

let mainDiv = sig();
mainDiv.id = "mainDiv";
mainDiv.css({
    //C:\Users\jparnell\Documents\coding\bailys\public\assets\valentinesPopup.jpg
    "background-image": "url('/assets/valentinesPopup.jpg')",
    "background-position": "center",
    "background-size": "cover",
    "width": "100%",
    "height": "100%",
});

let message = sig();
message.text = "Check out our valentines menu! Be sure to make a reservation!"
message.css({
    "filter": "drop-shadow(2px 2px 2px black)",
    "color": "white",
    "font-size": "20px",
    "position": "absolute",
    "top": "85%",
    "left": "50%",
    "transform": "translate(-50%, -50%)",
    "text-align": "center",
});

mainDiv.addChild(message);
console.log(mainDiv);

$.colorbox({
    html: '<div id="popup" style="width:100%;height:100%;"></div>',
    width: '350',
    height: '500',
    //opacity: '0.5',
    top: '10%',
    left: '40%',
    overlayClose: false
});

mainDiv.appendTo("#popup");

