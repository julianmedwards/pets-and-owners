'use strict'

module.exports = (sequelize, DataTypes) => {
    const Vaccination = sequelize.define(
        'Vaccination',
        {
            administration_date: {
                type: DataTypes.DATE,
                required: true,
            },
            end_price: {
                type: DataTypes.INTEGER,
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
    return Vaccination
}
