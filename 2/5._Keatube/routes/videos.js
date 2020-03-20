const router = require("express").Router();
const uuid4 = require("uuid").v4; 


const videos = [{ 
                id: "", 
                title: "NightSky",
                thumbnail: "", 
                description: "Watch this beautiful sky and enjoy the stars",
                path: "/29a4415c-81c3-45ca-b95f-fe18c74998a0.mp4",
                uploadDate: "", 
                category: "Science", 
                tags: ["stars", "sky"] 
            }];

router.get("/videos", (req, res) => {
    return res.send({ response: videos });
});




module.exports = router;