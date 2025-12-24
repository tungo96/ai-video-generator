import { generateImage } from "./sd.js";
import { zoomAnimate } from "./animate.js";
import { birdPrompt } from "./prompts.js";

export async function runPipeline() {
  const imagePath = "assets/images/birds.png";
  const videoPath = "assets/videos/birds.mp4";

  console.log("🎨 Generating image...");
  await generateImage(birdPrompt(), imagePath);

  console.log("🎥 Animating video...");
  await zoomAnimate(imagePath, videoPath);

  console.log("✅ Done:", videoPath);
}
