import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

const orders = [{
  id: 1,
  name: "asfamd"
}, {
  id: 2,
  name:"zyprova"
}]

@Injectable()
export class OrdersService {


  create(createOrderDto: CreateOrderDto) {
    const newOrder = {
      id: 3,
      name: 'new data'
    }
    orders.push(newOrder);
    return orders;
  }

  findAll() {
    return orders;
  }

  findOne(id: number) {
    return orders.find((obj) => obj.id == id);
  }

  remove(id: number) {
    const index =  orders.findIndex((obj) => obj.id == id );
    orders.splice(index, 1)
    return orders;
  }
}
