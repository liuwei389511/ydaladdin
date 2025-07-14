import { Injectable } from '@nestjs/common';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Test } from 'src/test/entities/test.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TestService {
  constructor(
    @InjectRepository(Test)
    private readonly testRepository: Repository<Test>,
  ) {}
  async create(createTestDto: CreateTestDto) {
    const test = this.testRepository.create(createTestDto);
    return await this.testRepository.save(test);
  }

  async findAll() {
    return await this.testRepository.find();
  }

  async findOne(id: number) {
    return await this.testRepository.findOne({ where: { id } });
  }

  async update(id: number, updateTestDto: UpdateTestDto) {
    const test = await this.findOne(id);
    if (!test) {
      throw new Error('Test not found');
    }
    Object.assign(test, updateTestDto);
    return await this.testRepository.save(test);
  }

  async remove(id: number) {
    const test = await this.findOne(id);
    if (!test) {
      throw new Error('Test not found');
    }

    return await this.testRepository.remove(test);
  }
}
