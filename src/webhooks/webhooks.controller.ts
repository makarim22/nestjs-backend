import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { WebhooksService } from './webhooks.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Prisma } from '@prisma/client';

@Controller('webhooks')
@UseGuards(JwtAuthGuard)
export class WebhooksController {
  constructor(private readonly webhooksService: WebhooksService) {}

  @Post()
  create(@Body() createWebhookDto: Prisma.WebhookCreateInput) {
    return this.webhooksService.create(createWebhookDto);
  }

  @Get()
  findAll() {
    return this.webhooksService.findAll();
  }
}
