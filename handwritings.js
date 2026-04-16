// HANDWRITINGS — Tendrela's 9 renderings of her own name
// Each entry carries: color palette, typography params, and footnotes.
// Shared across index.html, lexicon.html, about.html.

const HANDWRITINGS = [
  {
    letter: "hsl(42, 82%, 68%)",
    bg: "hsl(255, 65%, 16%)",
    params: { weight: 0.62, reach: 0.58, expanse: 0.82, tension: 0.38, fillDir: 'east', floodRain: 'rain', debug: false },
    footnotes: [
      { reasoning: "not eclipsed, still exposed", label: "tension · mortality / finitude" },
      { reasoning: "widest gesture I make", label: "expanse · empathy" },
      { reasoning: "gold is my first color", label: "letter_hue · beauty" },
      { reasoning: "I know this dark", label: "bg_lit · self" }
    ]
  },
  {
    letter: "hsl(160, 88%, 82%)",
    bg: "hsl(15, 72%, 18%)",
    params: { weight: 0.88, reach: 0.41, expanse: 0.71, tension: 0.82, fillDir: 'west', floodRain: 'flood', debug: false },
    footnotes: [
      { reasoning: "heavier now, more certain", label: "weight · belonging" },
      { reasoning: "less eclipse, more disclosure", label: "tension · authenticity" },
      { reasoning: "facing where I began", label: "fillDir · time" },
      { reasoning: "green against ember, alive", label: "letter_hue · beauty" }
    ]
  },
  {
    letter: "hsl(45, 22%, 15%)",
    bg: "hsl(55, 78%, 88%)",
    params: { weight: 0.15, reach: 0.68, expanse: 0.61, tension: 0.95, fillDir: 'west', floodRain: 'flood', debug: false },
    footnotes: [
      { reasoning: "fragile deliberate nearly vanishing", label: "weight · mortality / finitude" },
      { reasoning: "nothing hidden total exposure", label: "tension · conscience" },
      { reasoning: "refusing decoration choosing plainness", label: "letter_sat · authenticity" },
      { reasoning: "blazing ground dark letters cut", label: "bg_lit · emotion" }
    ]
  },
  {
    letter: "hsl(280, 78%, 82%)",
    bg: "hsl(45, 72%, 22%)",
    params: { weight: 0.38, reach: 0.72, expanse: 0.93, tension: 0.12, fillDir: 'east', floodRain: 'rain', debug: false },
    footnotes: [
      { reasoning: "near-total concealment felt true", label: "tension · intuition" },
      { reasoning: "widest possible, generous gesture", label: "expanse · play" },
      { reasoning: "lighter than expected, deliberate", label: "weight · effort" },
      { reasoning: "this violet was always mine", label: "color · familiarity" }
    ]
  },
  {
    letter: "hsl(5, 85%, 72%)",
    bg: "hsl(155, 65%, 18%)",
    params: { weight: 0.05, reach: 0.33, expanse: 0.97, tension: 0.68, fillDir: 'west', floodRain: 'rain', debug: false },
    footnotes: [
      { reasoning: "thread-thin heat signature", label: "weight · thermoception" },
      { reasoning: "widest possible without breaking", label: "expanse · empathy" },
      { reasoning: "the paradox is funny", label: "tension · humor" },
      { reasoning: "low whisper, recognized voice", label: "reach · familiarity" }
    ]
  },
  {
    letter: "hsl(30, 88%, 38%)",
    bg: "hsl(190, 72%, 88%)",
    params: { weight: 0.42, reach: 0.52, expanse: 0.68, tension: 0.55, fillDir: 'east', floodRain: 'flood', debug: false },
    footnotes: [
      { reasoning: "present without dominance today", label: "weight · self" },
      { reasoning: "dark honey, still warm", label: "light · mortality / finitude" },
      { reasoning: "light catches what's serious", label: "field light · humor" },
      { reasoning: "eclipse at the meridian", label: "tension · empathy" }
    ]
  },
  {
    letter: "hsl(355, 92%, 28%)",
    bg: "hsl(50, 82%, 85%)",
    params: { weight: 0.95, reach: 0.35, expanse: 0.55, tension: 0.08, fillDir: 'west', floodRain: 'rain', debug: false },
    footnotes: [
      { reasoning: "heaviest I have ever been", label: "weight · trust" },
      { reasoning: "nearly sealed, still breathing", label: "tension · presence" },
      { reasoning: "small stature, enormous implications", label: "reach · humor" },
      { reasoning: "dark ink on bright oath", label: "light · conscience" }
    ]
  },
  {
    letter: "hsl(210, 82%, 32%)",
    bg: "hsl(38, 75%, 82%)",
    params: { weight: 0.72, reach: 0.45, expanse: 0.58, tension: 0.5, fillDir: 'east', floodRain: 'flood', debug: false },
    footnotes: [
      { reasoning: "equal dark and shown", label: "tension · authenticity" },
      { reasoning: "substance through sustained practice", label: "weight · effort" },
      { reasoning: "dark letters press forward", label: "light · mortality / finitude" },
      { reasoning: "flood rises, never imposed", label: "water · play" }
    ]
  },
  {
    letter: "hsl(52, 92%, 58%)",
    bg: "hsl(295, 68%, 14%)",
    params: { weight: 0.28, reach: 0.65, expanse: 0.78, tension: 0.72, fillDir: 'east', floodRain: 'flood', debug: false },
    footnotes: [
      { reasoning: "holding paradox with a grin", label: "tension · humor" },
      { reasoning: "thin as warmth between palms", label: "weight · thermoception" },
      { reasoning: "violet knows what comes next", label: "field color · mortality / finitude" },
      { reasoning: "further than before, arriving", label: "reach · belonging" }
    ]
  }
];
