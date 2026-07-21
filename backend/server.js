const app = require('./app.js');
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log('tanjimOS backend + site running on http://localhost:' + PORT + '  →  open /Portfolio.dc.html'));
