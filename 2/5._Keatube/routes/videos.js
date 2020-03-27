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


// todo pagination ... What values do we need?            
router.get("/videos", (req, res) => {
    return res.send({ response: videos });
});

router.get("/videos/:videoId", (req, res) => {
    return res.send({ response: videos.find(video => video.fileName === req.params.videoId) });
})


module.exports = router;