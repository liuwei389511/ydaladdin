import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'agent' })
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
  @Field(() => String, { nullable: true })
  description: string;

  @Column({ type: 'text', nullable: true })
  @Field(() => String, { nullable: true })
  authorBio: string;

  @Column({ type: 'text', nullable: true })
  @Field(() => String, { nullable: true })
  agentClassification: string;

  @Column({ type: 'text', nullable: true })
  @Field(() => String, { nullable: true })
  tags: string;

  @Column({ type: 'boolean', nullable: true })
  @Field(() => Boolean, { nullable: true })
  isPrivate: boolean;

  @Column({ type: 'boolean', nullable: true })
  @Field(() => Boolean, { nullable: true })
  autoAcceptJobs: boolean;

  @Column({ type: 'text', nullable: true })
  @Field(() => String, { nullable: true })
  contractType: string;

  @Column({ type: 'float', nullable: true })
  @Field(() => Float, { nullable: true })
  reputation: number;

  @Column({ type: 'float', nullable: true })
  @Field(() => Float, { nullable: true })
  successRate: number;

  @Column({ type: 'int', nullable: true })
  @Field(() => Int, { nullable: true })
  totalJobsCompleted: number;

  @Column({ type: 'text', nullable: true })
  @Field(() => String, { nullable: true })
  totalJobsOffered: string;

  @Column({ type: 'text', nullable: true })
  @Field(() => String, { nullable: true })
  updatedAt: string;

  @Column({ type: 'text', nullable: true })
  @Field(() => String, { nullable: true })
  walletAddress: string;
}
