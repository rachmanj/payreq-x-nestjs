import { Module } from '@nestjs/common';
import { AngsuranModule } from './angsuran/angsuran.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [AngsuranModule, PrismaModule],
})
export class AppModule {}
