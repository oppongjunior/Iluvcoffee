import { Injectable } from '@nestjs/common';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Injectable()
export class CoffeeService {
  findAll() {
    return 'all coffee';
  }

  findOne(id: string) {
    return `single coffee ${id}`;
  }

  create(createCoffeeDto: CreateCoffeeDto) {
    return createCoffeeDto;
  }

  update(id: string, updateCoffeeDto: UpdateCoffeeDto) {
    return `updated with id ${id}`;
  }

  delete(id: string) {
    return `delete with id ${id}`;
  }
}
