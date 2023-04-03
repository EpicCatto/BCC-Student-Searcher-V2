import tokensManager from "@/utils/TokensManager";

export default function handler(req, res) {
    res.status(200).json(tokensManager.tokens);
}