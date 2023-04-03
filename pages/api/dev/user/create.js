import config from "../../../../../configuration";
import tokensManager from "@/utils/TokensManager";

export default async function handler(req, res) {
  // console.log(req);
  const cftunnel = req.query.cftunnel;
  if (!cftunnel) {
    res.status(400).json({ error: "Missing parameters" });
    return;
  }
  const body = `secret=${encodeURIComponent(config.cf_secrect)}&response=${encodeURIComponent(cftunnel)}`
  const resCap = await fetch(config.cf_endpoint, {
    method: 'POST',
    body,
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    }
  })

  const data = await resCap.json()
  if (data.success) {
    console.log("Captcha valid");
      try {
          const {username, token} = await tokensManager.generageUser();
          res.json({username, token});    
      } catch (error) {
          res.error({error});
      }    
    }else{
      res.json({error:"Invalid captcha"});
    }
};
