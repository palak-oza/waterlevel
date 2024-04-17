import { Controller, Get, Param } from '@nestjs/common';
import { ModelService } from './model.service';

@Controller('model')
export class ModelController {
  constructor(private readonly modelService: ModelService) {}

  @Get(':input_hours')
  async getPredictions(@Param('input_hours') inputHours: string): Promise<any> {
    const predictions = await this.modelService.getPredictions(inputHours);
    return predictions;
  }
}
