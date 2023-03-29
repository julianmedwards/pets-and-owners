'use strict'

module.exports = (sequelize, DataTypes) => {
    const Pet = sequelize.define(
        'Pet',
        {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4,
            },
            name: {
                type: DataTypes.STRING,
                required: true,
            },
            owner_id: {
                type: DataTypes.UUID,
                allowNull: false,
            },
            type: {
                type: DataTypes.ENUM,
                values: ['dog', 'cat', 'parrot'],
            },
            created_at: {
                type: DataTypes.DATE,
            },
            updated_at: DataTypes.DATE,
            deleted_at: DataTypes.DATE,
        },
        {
            paranoid: true,
            underscored: true,
        }
    )
    return Pet
}
