export default function(router) {
    router.get("/", function(req, res) {
        res.json("GET USER")
    })

    router.post("/", function(req, res) {
        const { body } = req;
        res.json(body)
    })

    router.put("/", function(req, res) {
        const { body } = req;
        res.json(body)
    })

    return router;
}