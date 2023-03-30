'use strict'

module.exports = (sequelize, DataTypes) => {
    const Vaccine = sequelize.define(
        'Vaccine',
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
            base_price: {
                type: DataTypes.INTEGER,
                required: true,
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
    return Vaccine
}