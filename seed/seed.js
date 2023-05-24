const connection = require('../config/connection');
const { User, Thought } = require('../models');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing users
  await User.deleteMany({});

  // Drop existing thoughts
  await Thought.deleteMany({});

  // Create array to hold the users
  const users = [
    {
        username: "Julie",
        email: "j@email.com"
    },
    {
        username: "Tom",
        email: "t@email.com"
    }
  ];


  await User.collection.insertMany(users);


  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
