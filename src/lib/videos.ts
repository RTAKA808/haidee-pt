export type HeroClip = {
  /** Path under /public — e.g. "/videos/clip-01.mp4" */
  src: string;
  /** Optional WebM alternate, served first when the browser supports it. */
  webm?: string;
  /** Short description of what the clip shows (used for accessibility). */
  label: string;
};

/**
 * Clips for the looping hero on the home page.
 *
 * To add footage:
 *   1. Drop the files into /public/videos (see the README there for specs).
 *   2. Add an entry below for each one, in the order they should play.
 *
 * While this list is empty the hero falls back to HERO_POSTER, so the site
 * renders correctly with no video files present.
 */
export const HERO_CLIPS: HeroClip[] = [
  {
    src: "/videos/clip-02.mp4",
    label: "A group class of older adults exercising together",
  },
  {
    src: "/videos/clip-03.mp4",
    label: "A woman stretching on a mat at home",
  },
  {
    src: "/videos/clip-01.mp4",
    label: "A woman running on a wooded trail",
  },

  // Held back from the loop for now — re-add if you want them:
  //   clip-04: upscaled from a soft 4K source; motion still read as poor
  //            even after the frame rate was normalized.
  //   clip-05: shot in black and white, which fights the site's palette.
  //   clip-06: filmed vertically (720x1280), so it crops badly in a
  //            full-width hero, and the subject is wearing a face mask.
  //
  // Before re-adding any of them, re-encode to a constant 30fps first —
  // clip-05 and clip-06 are still 24fps, which judders on a 60Hz display.
  // The others were normalized with:
  //   ffmpeg -y -ss <start> -i <source> -t 6 \
  //     -vf "fps=30,scale=1280:720:force_original_aspect_ratio=decrease,\
  //          pad=1280:720:(ow-iw)/2:(oh-ih)/2,setsar=1" \
  //     -c:v libx264 -profile:v high -crf 23 -preset slow \
  //     -pix_fmt yuv420p -movflags +faststart -an <out>.mp4
];

/**
 * Shown before the first clip loads, when the list above is empty, and for
 * visitors who have asked for reduced motion.
 *
 * This is a temporary stand-in until the hero footage is ready — the gym photo
 * is reserved for "The Space" section further down the home page.
 */
export const HERO_POSTER = "/assets/pt-stockphoto1.jpg";
