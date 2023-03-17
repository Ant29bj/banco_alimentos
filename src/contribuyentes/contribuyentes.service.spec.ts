import { Test, TestingModule } from '@nestjs/testing';
import { ContribuyentesService } from './contribuyentes.service';

describe('ContribuyentesService', () => {
  let service: ContribuyentesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContribuyentesService],
    }).compile();

    service = module.get<ContribuyentesService>(ContribuyentesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
