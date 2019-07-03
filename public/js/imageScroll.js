const cssDef = () => {
    return {
        container: {
            //"max-width": "auto",
            //"border-radius": "5px",
        },
        imgs: {
            "max-width": "100%",
            "display": "none",
            "border-radius": "5px"
        }
    };
};

const imgArrDef = () => {
    return [
        {
            url: "/assets/clubFlyers/4x6_Brunch_Front.jpg",
            link: "https://baily.com/assets/clubFlyers/4x6_Brunch_Front.jpg",
        },
        {
            url: "/assets/clubFlyers/4x6_brunch_back.JPG",
            link: "https://baily.com/assets/clubFlyers/4x6_brunch_back.JPG",
        },
        {
            url: "/assets/clubFlyers/4x6_4th.jpg",
            link: "https://baily.com/music",
        },
        {
            url: "/assets/clubFlyers/4x6_New_Latin.jpg",
            link: "https://baily.com/music",
        },
    ];
};

let slideIndex = 1;

const plusDivs = (n) => {
    showDivs(slideIndex += n);
};

const showDivs = (n) => {
    let i;
    let x = document.getElementsByClassName("mySlides");
    if (n > x.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = x.length;
    }

    for (i = 0; i < x.length; ++i) {
        x[i].style.display = "none";
    }

    x[slideIndex - 1].style.display = "block";
};

const genImg = (url, urlLink, css) => {
    let img = sig("img", {
        class: "mySlides",
        src: url,
    }).css(css);

    /*if (urlLink) {
        img.event(eventTyp, (e) => {
            func(e);
        });
    }*/

    let link = sig("a", {
        href: urlLink,
    });

    link.addChild(img);

    return link;
};

const imgScroll = (imgArr, css) => {
    let container = sig();
    container.css(css.container);
    container.class = "w3-content w3-display-container col-sm-12";

    //add all flyers from the array.
    let indx = 0;
    imgArr.map((obj) => {
        let img = genImg(obj.url, obj.link, css.imgs);
        if (!indx) {
            //the first image should be displayed.
            img.children[0].css({
                "display": "block",
            });
        }
        ++indx;
        container.addChild(img);
    });

    //determines if the auto-scroll should be disabled or not.
    let disable = false;

    //next button left
    let btn0 = sig("button", {
        class: "w3-button w3-black w3-display-left",
        text: "&#10094",
    }).event("click", () => {
        //disables the auto image flip.
        disable = true;
        plusDivs(-1);
    });

    //next button right
    let btn1 = sig("button", {
        class: "w3-button w3-black w3-display-right",
        text: "&#10095",
    }).event("click", () => {
        //disables the auto image flip.
        disable = true;
        plusDivs(+1);
    });

    const auto = (id) => {
        const triggerClick = () => {
            //$(`#${btn0.id}`).trigger("click");
            if(!disable) {
                plusDivs(+1);
            }
        };

        setInterval(triggerClick, 7000); //every 5 seconds.
    };


    auto(btn0.id);

    //add the buttons
    container.addChild(btn0);
    container.addChild(btn1);

    return container;
};

imgScroll(imgArrDef(), cssDef()).appendTo("#brunch");