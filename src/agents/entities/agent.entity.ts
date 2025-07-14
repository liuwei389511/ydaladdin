import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'agents' })
@ObjectType()
export class Agent {
  @PrimaryGeneratedColumn()
  @Field(() => Int, { description: 'Example field (placeholder)' })
  id: number;

  @Column({ type: 'text' })
  @Field(() => String)
  agentName: string;

  @Column({ type: 'text' })
  @Field(() => String)
  agentAddress: string;

  @Column({ type: 'boolean' })
  @Field(() => Boolean)
  isActive: boolean;

  @Column({ type: 'text', nullable: true })
  @Field(() => String)
  description?: string;

  @Column({ type: 'text', nullable: true })
  @Field(() => String)
  authorBio?: string;

  @Column({ type: 'text', nullable: true })
  @Field(() => String)
  agentClassification?: string;

  @Column({ type: 'text', nullable: true })
  @Field(() => String)
  tags?: string;

  @Column({ type: 'boolean', nullable: true })
  @Field(() => Boolean)
  isPrivate?: boolean;

  @Column({ type: 'boolean', nullable: true })
  @Field(() => Boolean)
  autoAcceptJobs?: boolean;

  @Column({ type: 'text', nullable: true })
  @Field(() => String)
  contractType?: string;

  @Column({ type: 'float', nullable: true })
  @Field(() => Float)
  reputation?: number;

  @Column({ type: 'float', nullable: true })
  @Field(() => Float)
  successRate?: number;

  @Column({ type: 'int', nullable: true })
  @Field(() => Int)
  totalJobsCompleted?: number;

  @Column({ type: 'text', nullable: true })
  @Field(() => String)
  totalJobsOffered?: string;

  @Column({ type: 'text', nullable: true })
  @Field(() => String)
  updatedAt?: string;

  @Column({ type: 'text', nullable: true })
  @Field(() => String)
  walletAddress?: string;
}
