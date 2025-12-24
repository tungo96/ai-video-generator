import { execa } from "execa";

export async function zoomAnimate(input, output, duration = 15) {
  await execa("ffmpeg", [
    "-y",
    "-loop", "1",
    "-i", input,
    "-vf",
    "zoompan=z='min(zoom+0.0006,1.07)':d=450,noise=alls=6:allf=t",
    "-t", duration.toString(),
    "-pix_fmt", "yuv420p",
    output
  ]);
}
