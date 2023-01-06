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

  @BeforeInsert()
  newid() {
    this.user_id = this.users.id;
  }

  @OneToMany((type) => Medicines, (medicine) => medicine.id)
  @JoinColumn({ name: 'med_id' })
  // defining this is also optional because by default,
  // the referenced foreign key is named as <column_name>_id or account_id
  medicine: Medicines;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
