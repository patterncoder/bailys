const scrollerDB = new micronDB();
const cssDef = () => {
    return {
        container: {
            //"min-height": "1000px",
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
            type: "brunch",
            url: "/assets/clubFlyers/4x6_Brunch_Front.jpg",
            link: "https://baily.com/dining/brunch",
        },
        {
            type: "music",
            url: "/assets/clubFlyers/4x6_Nov_Sun.jpg",
            link: "https://baily.com/music",
        },
        {
            type: "music",
            url: "/assets/clubFlyers/4x6_Nov_Band.jpg",
            link: "https://baily.com/music",
        },
        {
            type: "nightclub",
            url: "/assets/clubFlyers/4x6_Nov_Latin.jpg",
            link: "https://baily.com/nightclub",
        },
        {
            type: "nightclub",
            url: "/assets/clubFlyers/4x6_Nov_TOP.jpg",
            link: "https://baily.com/nightclub",
        },
        {
            type: "nightclub",
            url: "/assets/clubFlyers/4x6_Nov_Veterans.jpg",
            link: "https://baily.com/nightclub",
        },
        {
            type: "nightclub",
            url: "/assets/clubFlyers/4x6_Nov_Jersey_2019.jpg",
            link: "https://baily.com/nightclub",
        },
        {
            type: "nightclub",
            url: "/assets/clubFlyers/4x6_New_Latin.jpg",
            link: "https://baily.com/music",
        },
        {
            type: "brunch",
            url: "/assets/clubFlyers/OTNM Poster.jpg",
            link: "/assets/clubFlyers/OTNM Poster.jpg", //just opens to the full size image.
        },
        {
            type: "brunch-buffet",
            url: "/assets/brunch/buffet 1.jpg",
            link: ""
        },
        {
            type: "brunch-buffet",
            url: "/assets/brunch/buffet 2.jpg",
            link: ""
        },
        {
            type: "brunch-buffet",
            url: "/assets/brunch/buffet 3.jpg",
            link: ""
        },
        {
            type: "brunch-buffet",
            url: "/assets/brunch/buffet 5.jpg",
            link: ""
        },
        {
            type: "brunch-buffet",
            url: "/assets/brunch/buffet 6.jpg",
            link: ""
        },
        {
            type: "brunch-buffet",
            url: "/assets/brunch/buffet 7.jpg",
            link: ""
        },
        {
            type: "brunch-buffet",
            url: "/assets/brunch/buffet 9.jpg",
            link: ""
        },
        {
            type: "brunch-buffet",
            url: "/assets/brunch/buffet 16.jpg",
            link: ""
        },
    ];
};

const insertImgs = (imgLst) => {
    imgLst.map((obj) => {
        scrollerDB.insert(obj);
    });
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

insertImgs(imgArrDef());

const start = (id, types) => {
    let imgArr = [];

    types.map((obj) => {
        let queryResult = scrollerDB.query({
            where: {
                type: obj,
            }
        });

        let addToArr = (arr) => {
            arr.map((tmp) => {
                if(tmp.length) {
                    //sometimes micronDB will send the object in an array... it's a bug... ex. [[obj]].
                    addToArr(tmp); //calls recursively.
                } else {
                    imgArr.push(tmp);
                }
            });
        };

        addToArr(queryResult);
    });

    console.log(imgArr);

    imgScroll(imgArr, cssDef()).appendTo("#" + id);
}
