import { Controller, Delete, Get, Inject, Param, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(@Inject('SERVICE_COMM') private client: ClientProxy) {}

  @Post()
  async createOrder() {
    return this.client.send({ cmd: 'createOrder' }, {});
  }

  @Get('findAllOrders')
  async findAllOrders() {
    console.log('here')
    return this.client.send({ cmd: 'findAllOrders' }, {});
  }

  @Get('/:id')
  async findOneOrder(@Param('id') id: number) {
    return this.client.send({ cmd: 'findOneOrder' }, { id: id });
  }

  @Delete('/:id')
  async removeOrder(@Param() id: number) {
    return this.client.send({ cmd: 'removeOrder' }, id);
  }

}
