import { Controller, Get, Post, Param, UseGuards, Request } from '@nestjs/common';
import { QuartermasterService } from './quartermaster.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('quartermaster')
@UseGuards(AuthGuard('jwt'))
export class QuartermasterController {
  constructor(private readonly quartermasterService: QuartermasterService) {}

  @Get('items')
  getItems(@Request() req: any) {
    return this.quartermasterService.getItems(req.user.userId);
  }

  @Get('balance')
  getBalance(@Request() req: any) {
    return this.quartermasterService.getBalance(req.user.userId);
  }

  @Post('purchase/:id')
  purchaseItem(@Request() req: any, @Param('id') itemId: string) {
    return this.quartermasterService.purchaseItem(req.user.userId, itemId);
  }

  @Post('equip/:id')
  equipItem(@Request() req: any, @Param('id') itemId: string) {
    return this.quartermasterService.equipItem(req.user.userId, itemId);
  }
}
