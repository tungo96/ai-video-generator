import axios from "axios";
import fs from "fs";

export async function generateImage(prompt, outPath) {
  const res = await axios.post(
    `${process.env.SD_API}/sdapi/v1/txt2img`,
    {
      prompt,
      steps: 30,
      cfg_scale: 7,
      width: 1024,
      height: 576
    }
  );

  const base64 = res.data.images[0];
  const buffer = Buffer.from(base64, "base64");
  fs.writeFileSync(outPath, buffer);
}
