const stdScaner = require("../../../utils/StudentScaner");

export default async function handler(req, res) {
    const {stdid, database} = req.query;
    if (!stdid || !database) {
        res.json({error:"Missing parameters"});
        return;
    }
    try {
        await stdScaner.find(stdid, database).then((data)=>{
            res.json(data);
        });
        
    } catch (error) {
        res.json({error});
    }
  }