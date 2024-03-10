import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { CreateAngsuranDto } from './dto';
import { AngsuranService } from './angsuran.service';

@Controller('angsuran')
export class AngsuranController {
  constructor(private angsuranService: AngsuranService) {}

  @Post()
  createAngsuran(@Body() dto: CreateAngsuranDto) {
    console.log(dto);

    return this.angsuranService.createAngsuran(dto);
  }

  @Get()
  getAngsurans(@Query('installmentCode') installmentCode?: string) {
    if (installmentCode) {
      return this.angsuranService.getAngsuranByInstallmentCode(installmentCode);
    }

    return this.angsuranService.getAngsurans();
  }

  @Delete(':id')
  deleteAngsuran(@Param('id') id: string) {
    return this.angsuranService.deleteAngsuranById(Number(id));
  }
}
