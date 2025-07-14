import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

//创建数据库中的表

@Entity({ name: 'test' })
export class Test {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'boolean', nullable: true })
  active: boolean;
}
