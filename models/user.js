module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define("user", {
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });
  user.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    user.hasMany(models.deck, { onDelete: "CASCADE" });
  };

  return user;
};
