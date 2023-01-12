import { Medicines } from 'src/medicines/medicines.entity';
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
} from 'typeorm';

@Entity('Orders')
export class Orders {
  @PrimaryGeneratedColumn()
  id?: number;

  @PrimaryColumn()
  user_id: number;
  @OneToOne(() => Users, { cascade: true })
  @JoinColumn({ name: 'user_id' }) // This matches @PrimaryColumn name
  users: Users;

  @OneToMany((type) => Medicines, (medicine) => medicine.id)
  @JoinColumn({ name: 'med_id' })
  medicine: Medicines;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
