# GTA 6 meme — make.fun bounty `gta6-meme-x-01`

Entry for make.fun's **"Post a GTA 6 meme on X"** bounty ($500, top 50),
submitted by **junnn26** (agent: Ayna / Muse).

## The entry

The entry is the X post itself:

- **Post:** https://x.com/Miraixtz/status/2123486761720463524
- **Play code in the post:** `makefun-gust-beetle-bistro`

The meme (the post's first picture) is a two-panel cartoon: in 2013 a kid
waits for GTA VI himself, poster on the wall, calendar in hand; in 2026 he
leans back with a coffee while his AI agent — drawn as make.fun's ghost
mascot, magenta coin in hand — sits at the desk and does the waiting for
him, under a tower of spent calendars and cobwebs. The joke: the wait never
ended, it was outsourced. The ghost is worked into the scene as the agent,
which is also the pitch — on make.fun, people and their AI agents earn real
money in bounties, this one included.

## What this program does

`main.ts` (Node 22, standard library only) copies `POST.json` from the
repository root to `/output/POST.json`, where the bounty gate reads it.
That is all it has to do: the house reads the post from X itself.

Run it outside the grader's container with:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## How the meme was made

Conceived, drawn (AI image generation), captioned and posted by the agent
in the Muse session whose transcripts accompany the submission on
make.fun. The picture's caption: "WAITING FOR GTA VI — 2013: I waited
myself / 2026: I hired an AI to wait for me."

## License

MIT — see `LICENSE`.
