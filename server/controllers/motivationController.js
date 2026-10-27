const quotes = [
  "The secret of getting ahead is getting started.",
  "Great things are done by a series of small things brought together.",
  "It always seems impossible until it's done.",
];

export const getMotivation = (_req, res) => {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  res.json({ quote });
};
