import "dotenv/config";
import { runPipeline } from "./pipeline.js";

runPipeline().catch(console.error);
