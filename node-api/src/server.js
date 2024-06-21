const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const calcRoutes = require('./routes/calcRoutes');
const { ensureAuth } = require('./middleware/authMiddleware');
const config = require('./config'); // Importando o arquivo de configuração

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/login', authRoutes);
app.use('/calculate', ensureAuth, calcRoutes);

mongoose.connect(config.mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch(err => console.error(err));
