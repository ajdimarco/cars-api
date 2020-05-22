import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe
} from '@nestjs/common';
import { CarInput } from 'src/models/car-input.model';
import { Car } from 'src/models/car.model';
import { CarsService } from './cars.service';

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
  @UsePipes(
    new ValidationPipe({
      forbidUnknownValues: true,
      forbidNonWhitelisted: true,
      whitelist: true
    })
  )
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
