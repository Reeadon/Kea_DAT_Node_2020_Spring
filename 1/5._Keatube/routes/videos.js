const router = require("express").Router();
const multer = require("multer");
const upload = multer({ dest: 'videos/' });

const videos = [{
    title: "Ocean Waves",
    description: "Watch the waves and enjoy",
    fileName: "3f1e146c-3295-444a-a7be-e758c560536b.mp4",
    thumbnail: "",
    category: "Nature",
    tags: ["waves", "ocean", "coast"],
    uploadDate: new Date(2020, 3, 26, 08, 43)
}];

const videosPerPage = 10;

router.get("/videos", (req, res) => {
    const page = Number(req.query.page) ? Number(req.query.page) : 1;
    const start = (page-1) * videosPerPage;
    const end = start + videosPerPage;

    return res.send({ response: videos.slice(start, end) });
});

router.get("/videos/:videoId", (req, res) => {       
    return res.send({ response: videos.find(video => video.fileName === req.params.videoId) });
});

router.post("/videos", upload.single('video'), (req, res) => {
    console.log(req.file);
    return res.redirect("/");
});

router.post("/test", (req, res) => {
    console.log(req.body.fullName);
    return res.send({ });
});

module.exports = router;