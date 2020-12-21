"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (router) {
    router.get("/", function (req, res) {
        res.json("GET USER");
    });

    router.post("/", function (req, res) {
        var body = req.body;

        res.json(body);
    });

    router.put("/", function (req, res) {
        var body = req.body;

        res.json(body);
    });

    return router;
};