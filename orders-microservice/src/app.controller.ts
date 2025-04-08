import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { OrdersService } from './orders/orders.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateOrderDto } from './orders/dto/create-order.dto';

@Controller()
export class AppController {
  constructor(private readonly ordersService: OrdersService) {}

  @MessagePattern({ cmd: 'createOrder'})
  create(@Payload() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto);
  }

  @MessagePattern({ cmd: 'findAllOrders' })
  findAll() {
    return this.ordersService.findAll();
  }

  @MessagePattern({ cmd: 'findOneOrder'})
  findOne(data: any) {
    return this.ordersService.findOne(data.id);
  }

  @MessagePattern({ cmd: 'removeOrder'})
  remove(data: any) {
    return this.ordersService.remove(data.id);
  }
}
