const User = require('./User');
const Car = require('./Car');
const Review = require('./Review');

User.hasMany(Review, {
  foreignKey: 'user_id'
});

Review.belongsTo(User, {
  foreignKey: 'user_id'
});

Car.hasMany(Review, {
  foreignKey: 'car_id'
});
  
Review.belongsTo(Car, {
  foreignKey: 'car_id'
});

module.exports = { User, Car, Review};
