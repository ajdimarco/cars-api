import {
  BadRequestException,
  Injectable,
  NotFoundException
} from '@nestjs/common';
import { cars as carsdata } from '../data/dougscores';
import { CarInput } from '../models/car-input.model';
import { Car } from '../models/car.model';

@Injectable()
export class CarsService {
  private cars: Car[] = carsdata;

  public getAllCars(): Car[] {
    return this.cars;
  }

  public getCarById(id: string): Car {
    const foundCar = this.findCarById(id);
    if (foundCar) {
      return foundCar;
    } else {
      throw new NotFoundException('Car not found');
    }
  }

  public createCar(carInput: CarInput): void {
    if (this.carYMMExists(carInput.year, carInput.make, carInput.model)) {
      throw new BadRequestException('Car already exists in database');
    } else {
      const weekend_total = this.calculateWeekendScore(carInput),
        daily_total = this.calculateDailyScore(carInput),
        dougscore = weekend_total + daily_total,
        id = this.calculateId(carInput);
      const car: Car = {
        ...carInput,
        weekend_total,
        daily_total,
        dougscore,
        id
      };
      this.cars.push(car);
    }
  }

  public updateCar(car: Car): void {
    this.cars[this.getCarIndex(car.id)] = car;
  }

  public deleteCar(id: string): void {
    this.cars.splice(this.getCarIndex(id), 1);
  }

  private findCarById(id: string): Car {
    return this.cars.find(car => car.id === id);
  }

  private getCarIndex(id: string) {
    const index: number = this.cars.findIndex(car => car.id === id);
    if (index < 0) {
      throw new NotFoundException('Car not found');
    }
    return index;
  }

  private carYMMExists(year: number, make: string, model: string) {
    return this.cars.some(
      car => car.year === year && car.make === make && car.model === model
    );
  }

  private calculateWeekendScore({
    styling,
    acceleration,
    handling,
    fun_factor,
    cool_factor
  }): number {
    return styling + acceleration + handling + fun_factor + cool_factor;
  }

  private calculateDailyScore({
    features,
    comfort,
    quality,
    practicality,
    value
  }): number {
    return features + comfort + quality + practicality + value;
  }

  private calculateId({year, make, model}: {year: number, make: string, model: string}): string {
    return `${this.getIdString(make)}-${this.getIdString(model)}-${year}`;
  }

  private getIdString(str: string) {
    return str.replace(/ /g, '-').replace(/[!@#$%^&*()']/g, '').toLowerCase().trim();
  }
}
