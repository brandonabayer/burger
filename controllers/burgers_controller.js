const burger = require("../models/burger");
const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
    res.redirect("/api/all");
});

router.get("/api/all", function (req, res) {
    burger.all(function (data) {
        res.render("index", { burger: data });
    });
});

router.post("/api/createburger", function (req, res) {
    console.log(req.body);
    burger.create(req.body.burger, function (data) {
        console.log(data);
    });
    //return res.redirect("/");
});

router.put("/api/updateburger/:id", function (req, res) {
    burger.update("id=" + req.params.id, function (data) {
        console.log(data);
    });
    console.log(res);
    return res
});

module.exports = router;