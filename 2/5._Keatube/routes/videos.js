const router = require("express").Router();
const uuid4 = require("uuid").v4; 


const videos = [{ 
                id: "", 
                title: "Night Sky",
                thumbnail: "", 
                description: "Watch this beautiful sky and enjoy the stars",
                fileName: "29a4415c-81c3-45ca-b95f-fe18c74998a0.mp4",
                uploadDate: "", 
                category: "Science", 
                tags: ["stars", "sky"] 
            }];

const videosPerPage = 12;

router.get("/videos", (req, res) => {
    const page = Number(req.query.page) ? Number(req.query.page) : 1;
    const start = (page - 1) * videosPerPage;
    const end = start + videosPerPage;

    return res.send({ response: videos.slice(start, end) });
});

router.get("/videos/:videoId", (req, res) => {
    return res.send({ response: videos.find(video => video.fileName === req.params.videoId) });
});


module.exports = router;