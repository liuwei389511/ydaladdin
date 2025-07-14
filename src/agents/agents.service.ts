import { Injectable } from '@nestjs/common';
import { CreateAgentInput } from './dto/create-agent.input';
import { UpdateAgentInput } from './dto/update-agent.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Agent } from './entities/agent.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AgentsService {
  constructor(
    @InjectRepository(Agent)
    private readonly agentRepository: Repository<Agent>,
  ) {}
  async create(createAgentInput: CreateAgentInput) {
    const agent = this.agentRepository.create(createAgentInput);
    return await this.agentRepository.save(agent);
  }

  async findAll() {
    return await this.agentRepository.find();
  }

  async findOne(id: number) {
    return await this.agentRepository.findOne({ where: { id } });
  }

  async update(id: number, updateAgentInput: UpdateAgentInput) {
    const agent = await this.findOne(id);
    if (!agent) {
      throw new Error('Agent not found');
    }
    Object.assign(agent, updateAgentInput);
    return await this.agentRepository.save(agent);
  }

  async remove(id: number) {
    const agent = await this.findOne(id);
    if (!agent) {
      throw new Error('Agent not found');
    }
    return await this.agentRepository.remove(agent);
  }
}
