import { createOpenAI } from "@ai-sdk/openai"
import { useSettingsStore } from "./settings-store"

// Create a custom OpenAI provider instance with your API key
const { openaiApiKey } = useSettingsStore.getState();

export const openaiClient = createOpenAI({
  apiKey: openaiApiKey,
  compatibility: "strict",
})

export const getSettings =  () => {
  return {
    apiKey: openaiApiKey,
    compatibility: "strict",
  }
}

