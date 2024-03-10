import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAngsuranDto } from './dto';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class AngsuranService {
  constructor(private prisma: PrismaService) {}

  async createAngsuran(dto: CreateAngsuranDto) {
    try {
      const {
        installmentCode,
        creditorName,
        startDate,
        installmentPeriod,
        description,
        capital,
        userId,
      } = dto;

      const isoStartDate = new Date(startDate).toISOString();

      const angsuran = await this.prisma.angsuran.create({
        data: {
          installmentCode,
          creditorName,
          startDate: isoStartDate,
          installmentPeriod,
          description,
          capital,
          userId,
        },
      });

      return angsuran;
    } catch (error) {
      throw error;
    }
  }

  async getAngsurans() {
    return await this.prisma.angsuran.findMany();
  }

  async getAngsuranByInstallmentCode(installmentCode: string) {
    const angsurans = await this.prisma.angsuran.findMany({
      where: {
        installmentCode,
      },
    });

    // if angsurans not found
    if (!angsurans.length) {
      return {
        message: 'Angsuran not found',
      };
    }

    return angsurans;
  }

  async getAngsuranById(id: number) {
    const angsuran = await this.prisma.angsuran.findUnique({
      where: {
        id,
      },
    });

    if (!angsuran) {
      return {
        message: 'Angsuran not found',
      };
    }

    return angsuran;
  }

  async deleteAngsuranById(id: number) {
    // check if angsuran exists
    const angsuran = await this.prisma.angsuran.findUnique({
      where: {
        id,
      },
    });

    // if not, return an error message
    if (!angsuran) {
      return {
        message: 'Angsuran not found',
      };
    }

    // if exists, delete the angsuran
    await this.prisma.angsuran.delete({
      where: {
        id,
      },
    });

    return {
      message: 'Angsuran deleted',
    };
  }
}
