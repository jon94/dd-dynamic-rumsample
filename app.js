const express = require('express');
const app = express();
const port = 3000;

// Simulated feature flags (can be replaced with database or third-party service integration)
const FEATURE_FLAGS = {
  'rum-sample-rate-configuration': 50,
};

app.get('/feature-flag', (req, res) => {
  const featureName = req.query.feature || 'rum-sample-rate-configuration';
  const sampleRate = FEATURE_FLAGS[featureName] || 0; // Default to 0
  res.json({ sampleRate });
});

app.listen(PORT, () => {
  console.log(`Feature flag service running on port ${PORT}`);
});
