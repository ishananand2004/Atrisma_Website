require('dotenv').config();
const app = require('./src/app');
const db = require('./src/models');
const seedData = require('./src/utils/seeder');

const PORT = process.env.PORT || 8000;

// Sync database and start server
db.sequelize.sync({ alter: true }) // Similar to spring.jpa.hibernate.ddl-auto=update
  .then(async () => {
    console.log('Database synchronized.');
    await seedData();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`);
    });
  })
  .catch((err) => {
    console.error('Failed to sync db: ' + err.message);
  });
