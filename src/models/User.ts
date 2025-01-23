import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table({
    tableName: 'users',
    timestamps: true,
    modelName: 'User'
})
export class User extends Model {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    })
    declare id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true
    })
    declare email: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    declare password: string;

    @Column({
        type: DataType.STRING,
        allowNull: true
    })
    declare name: string;

    @Column({
        type: DataType.STRING,
        allowNull: true
    })
    declare role: string;
}
