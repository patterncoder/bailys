const cssDef = () => {
    return {
        container: {
            //"max-width": "auto",
        },
        imgs: {
            "max-width": "100%",
            "display": "none",
        }
    };
};

const imgArrDef = () => {
    return [
        "/assets/clubFlyers/V-day19.png",
        "/assets/clubFlyers/4x6_brunch_front_New.jpg",
        "/assets/clubFlyers/4x6_March_Rod-Run_Fri.jpg",
        "/assets/clubFlyers/4x6_latin june 2018.JPG",
        "/assets/clubFlyers/4x6_March_Paddys_2019.jpg",
        "/assets/clubFlyers/4x6_March_Mardi_2019.jpg",
    ];
};

let slideIndex = 1;

const plusDivs = (n) => {
    showDivs(slideIndex += n);
};

const showDivs = (n) => {
    let i;
    let x = document.getElementsByClassName("mySlides");
    if(n > x.length) {
        slideIndex = 1;
    }
    if(n < 1) {
        slideIndex = x.length;
    }

    for(i = 0; i < x.length; ++i) {
        x[i].style.display = "none";
    }

    x[slideIndex-1].style.display = "block";
};

const imgScroll = (imgArr, css) => {
    let container = sig();
    container.css(css.container);
    container.class = "w3-content w3-display-container col-sm-12";

    //add all flyers from the array.
    let indx = 0;
    imgArr.map((url) => {
        let img = sig("img", {
            class: "mySlides",
            src: url,
        }).css(css.imgs);
        if(!indx) {
            img.css({
                "display": "block",
            });
        }
        ++indx;
        container.addChild(img);
    });

    //next button left
    let btn0 = sig("button", {
        class: "w3-button w3-black w3-display-left",
        text: "&#10094",
    }).event("click", () => {
        plusDivs(-1);
    });

    //next button right
    let btn1 = sig("button", {
        class: "w3-button w3-black w3-display-right",
        text: "&#10095",
    }).event("click", () => {
        plusDivs(+1);
    });

    //add the buttons
    container.addChild(btn0);
    container.addChild(btn1);

    return container;
};

imgScroll(imgArrDef(), cssDef()).appendTo("#brunch");