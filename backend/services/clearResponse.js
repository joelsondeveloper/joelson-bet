function clearGeminiJson(rawText) {
    if (!rawText) return [];
    
    const cleaned = rawText
    .replace(/```json/g, '')
    .replace(/```/g, '')
    .trim();

    try {
        return JSON.parse(cleaned);
    } catch (error) {
        console.log("erro ao limpar",error);
        return [];
    }
}

export default clearGeminiJson