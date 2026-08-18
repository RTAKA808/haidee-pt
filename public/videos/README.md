# Hero videos

Drop the looping hero clips in this folder, then list them in
`src/lib/videos.ts` (`HERO_CLIPS`) in the order they should play.

Until that list has entries, the hero falls back to the still image in
`HERO_POSTER` — the site works fine with this folder empty.

## Suggested specs

- **Format:** MP4 (H.264) is required; add a WebM alternate if you have one.
- **Length:** 5–8 seconds each, roughly 6 clips.
- **Resolution:** 1920x1080 max — the hero is a background, so more is wasted bytes.
- **Size:** aim for under 3 MB per clip. All six load on the home page.
- **Audio:** strip it. The hero is muted so it can autoplay.
- **Framing:** text sits over the center of the video, so keep the middle
  of the frame uncluttered.

## Naming

Anything works, but sequential names keep the config readable:

```
clip-01.mp4
clip-02.mp4
...
```

## Example config

```ts
export const HERO_CLIPS: HeroClip[] = [
  { src: "/videos/clip-01.mp4", label: "Therapist guiding a squat" },
  { src: "/videos/clip-02.mp4", label: "Hands-on treatment session" },
];
```
