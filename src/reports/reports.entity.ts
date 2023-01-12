import { Medicines } from 'src/medicines/medicines.entity';
import { Orders } from 'src/orders/orders.entity';
import { Users } from 'src/users/users.entity';
import {
  BeforeInsert,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  Column,
} from 'typeorm';

@Entity('Reports')
export class Reports {
  @PrimaryGeneratedColumn()
  id?: number;

  @OneToOne(() => Orders)
  @JoinColumn()
  orders: Orders;

  @Column({ type: 'boolean' })
  payment: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
