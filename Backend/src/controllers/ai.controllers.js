const aiService = require("../services/ai.services");


module.exports.getReview = async (req, res)=>{

     const code = req.body.code;

    if(!code){
        return res.status(400).json({error:"propmt is require"})
    };


    const response = await aiService(code);
    res.send(response);


}