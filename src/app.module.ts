import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { config } from './config';
import { UsersModule } from './users/users.module';
import { MedicinesModule } from './medicines/medicines.module';
import { OrdersModule } from './orders/orders.module';
import { ReportsModule } from './reports/reports.module';

@Module({
  imports: [UsersModule, TypeOrmModule.forRoot(config), MedicinesModule, OrdersModule, ReportsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
