import { Module } from '@nestjs/common';
import { AngsuranController } from './angsuran.controller';
import { AngsuranService } from './angsuran.service';

@Module({
  controllers: [AngsuranController],
  providers: [AngsuranService]
})
export class AngsuranModule {}
