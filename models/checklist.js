module.exports = (sequelize, datatypes) => {
    const Checklist = sequelize.define(
        'checklist',
        {
        id: {
            type: datatypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        userId: datatypes.INTEGER,
        name: { type: datatypes.STRING, allowNull: false },
        },
    );
    return Checklist;
};