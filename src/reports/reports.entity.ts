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

  @PrimaryColumn()
  order_id: number;
  @OneToOne(() => Orders, { cascade: true })
  @JoinColumn({ name: 'user_id' }) // This matches @PrimaryColumn name
  orders: Orders;

  @Column({ type: 'boolean' })
  @PrimaryColumn()
  user_id: number;
  @OneToOne(() => Users, { cascade: true })
  @JoinColumn({ name: 'user_id' }) // This matches @PrimaryColumn name
  users: Users;

  payment: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
