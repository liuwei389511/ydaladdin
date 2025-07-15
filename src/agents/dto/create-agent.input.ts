import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateAgentInput {
  //   @Field(() => Int, { description: 'Example field (placeholder)' })
  //   id: number;

  @Field()
  agentName: string;

  @Field()
  agentAddress: string;

  @Field()
  isActive: boolean;

  @Field({ nullable: true })
  description: string;

  @Field({ nullable: true })
  authorBio: string;

  @Field({ nullable: true })
  agentClassification: string;

  @Field({ nullable: true })
  tags: string;

  @Field({ nullable: true })
  isPrivate: boolean;

  @Field({ nullable: true })
  autoAcceptJobs: boolean;

  @Field({ nullable: true })
  contractType: string;

  @Field({ nullable: true })
  reputation: number;

  @Field({ nullable: true })
  successRate: number;

  @Field({ nullable: true })
  totalJobsCompleted: number;

  @Field({ nullable: true })
  totalJobsOffered: string;

  @Field({ nullable: true })
  updatedAt: string;

  @Field({ nullable: true })
  walletAddress: string;
}
