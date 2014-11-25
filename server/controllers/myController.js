var data = {
    title: "The really big title",
    list: ['hello', 'from', 'list!']
};

exports.SendMessage = function (req, res) {
    res.render("users", data);
    //res.send("hello");
}
