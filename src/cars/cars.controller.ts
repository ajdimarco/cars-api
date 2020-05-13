import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Header
} from '@nestjs/common';
import { Car } from 'src/models/car.model';
import { CarsService } from './cars.service';
import { CarInput } from 'src/models/car-input.model';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  @Header('Access-Control-Allow-Origin', '*')
  public getAllCars(): Car[] {
    return this.carsService.getAllCars();
  }
  
  @Get(':id')
  @Header('Access-Control-Allow-Origin', '*')
  public getCar(@Param('id') id: string) {
    return this.carsService.getCarById(id);
  }

  @Post()
  @Header('Access-Control-Allow-Origin', '*')
  public createCar(@Body() car: CarInput): void {
    this.carsService.createCar(car);
  }

  @Patch()
  public updateCar(@Body() car: Car): void {
    this.carsService.updateCar(car);
  }

  @Delete(':id')
  public removeCar(@Param('id') id: string): void {
    this.carsService.deleteCar(id);
  }
}
