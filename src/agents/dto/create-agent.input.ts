import { InputType, Int, Field, Float } from '@nestjs/graphql';

@InputType()
export class CreateAgentInput {
  //   @Field(() => Int, { description: 'Example field (placeholder)' })
  //   id: number;

  @Field(() => String)
  agentName: string;

  @Field(() => String)
  agentAddress: string;

  @Field(() => Boolean)
  isActive: boolean;

  @Field(() => String)
  description?: string;

  @Field(() => String)
  authorBio?: string;

  @Field(() => String)
  agentClassification?: string;

  @Field(() => String)
  tags?: string;

  @Field(() => Boolean)
  isPrivate?: boolean;

  @Field(() => Boolean)
  autoAcceptJobs?: boolean;

  @Field(() => String)
  contractType?: string;

  @Field(() => Float)
  reputation?: number;

  @Field(() => Float)
  successRate?: number;

  @Field(() => Int)
  totalJobsCompleted?: number;

  @Field(() => String)
  totalJobsOffered?: string;

  @Field(() => String)
  updatedAt?: string;

  @Field(() => String)
  walletAddress?: string;
}
