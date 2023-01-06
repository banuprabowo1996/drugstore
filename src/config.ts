import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  username: 'postgres',
  password: 'postgres',
  port: 5432,
  host: 'localhost',
  database: 'drugstore_db',
  synchronize: true,
  entities: ['dist/**/*.entity{.ts,.js}'],
};
