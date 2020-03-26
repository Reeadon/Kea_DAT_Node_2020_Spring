const router = require("express").Router();
const uuid = require('uuid').v4;

const videos = [{
    title: "Ocean Waves",
    description: "Watch the waves and enjoy",
    fileName: "3f1e146c-3295-444a-a7be-e758c560536b.mp4",
    thumbnail: "",
    category: "Nature",
    tags: ["waves", "ocean", "coast"],
    uploadDate: new Date(2020, 3, 26, 08, 43)
}];

router.get("/videos", (req, res) => {
    return res.send({ response: videos });
});

router.get("/videos/:videoId", (req, res) => {       
    return res.send({ response: videos.find(video => video.fileName === req.params.videoId) });
});

module.exports = router;