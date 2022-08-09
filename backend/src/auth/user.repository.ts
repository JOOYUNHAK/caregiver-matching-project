import { DataSource } from "typeorm";
import { User } from "./entity/user.entity";

export const userRepository = [
    {
        provide: 'USER_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
        inject: ['DATA_SOURCE'],
    },
];