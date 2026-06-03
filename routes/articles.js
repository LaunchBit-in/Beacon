const express = require("express");
const router = express.Router();
const articles=[
    {
        id:1,
        title:"First article",
        source: "ai News",
        url :"https://www.artificialintelligence-news.com/article-1"
    },
    {
        id:2,
        title:"second article",
        source:"accident news",
        url:"https://www.ndtv.com/topic/accidents-in-india/article-2"
    },
];

router.get("/",(req,res)=>{
    res.json(articles);
});

router.get("/:id",(req,res)=> {
    const articleId = Number(req.params.id);

    const article= articles.find((item)=> item.id === articleId);

    if(!article){
        return res.status(404).json({
            error:"atricle not found"
        });
    }
    res.json(article);
});

module.exports = router;