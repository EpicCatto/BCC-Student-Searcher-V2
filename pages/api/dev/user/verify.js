import tokensManager from "@/utils/TokensManager";

export default function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }
  const { token } = req.body;
  if (!token) {
    res.json({ error: "Missing parameters" });
    return;
  }
  try {
    const result = tokensManager.verifyToken(token);
    if (!result) {
      res.json({ error: "Invalid token" });
      return;
    }
    res.json(result);
  } catch (error) {
    res.json({ error });
  }
}
