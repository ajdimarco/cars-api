import { Type } from 'class-transformer';
import {
  IsEnum,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
  ValidateNested
} from 'class-validator';
import { Specs } from './car.model';

export class PerformanceInput {
  @IsOptional()
  @IsNumber()
  zero_to_sixty_mph?: number;

  @IsOptional()
  @IsNumber()
  top_speed_mph?: number;

  @IsOptional()
  @IsNumber()
  horsepower?: number;

  @IsOptional()
  @IsNumber()
  torque_lb_ft?: number;
}

export enum EngineTypeInput {
  I2 = 'I2',
  I3 = 'I3',
  I4 = 'I4',
  I5 = 'I5',
  I6 = 'I6',
  V4 = 'V4',
  V6 = 'V6',
  V8 = 'V8',
  V10 = 'V10',
  V12 = 'V12',
  F4 = 'F4',
  F6 = 'F6',
  W8 = 'W8',
  W12 = 'W12',
  W16 = 'W16',
  Rotary = 'Rotary',
  Electric = 'Electric'
}

export enum EngineLayoutInput {
  Front = 'Front',
  Mid = 'Mid',
  Rear = 'Rear',
  Axle = 'Axle'
}

export enum AspirationTypeInput {
  Naturally_Aspirated = 'Naturally Aspirated',
  Turbo = 'Turbo',
  Twin_Turbo = 'Twin Turbo',
  Quad_Turbo = 'Quad Turbo',
  Supercharged = 'Supercharged',
  Not_Applicable = 'Not Applicable'
}

export enum FuelTypeInput {
  Gasoline = 'Gasoline',
  Diesel = 'Diesel',
  Electric = 'Electric',
  Gas_Hybrid = 'Gas Hybrid',
  Diesel_Hyprid = 'Diesel Hybrid',
  Flex_Fuel = 'Flex Fuel'
}

export class EngineInput {
  @IsOptional()
  @IsEnum(EngineTypeInput)
  type?: EngineTypeInput;

  @IsOptional()
  @IsEnum(EngineLayoutInput)
  layout?: EngineLayoutInput;

  @IsOptional()
  @IsNumber()
  displacement_liters?: number;

  @IsOptional()
  @IsEnum(AspirationTypeInput)
  aspiration?: AspirationTypeInput;

  @IsOptional()
  @IsEnum(FuelTypeInput)
  fuel?: FuelTypeInput;
}

export enum TransmissionTypeInput {
  Automatic = 'Automatic',
  Manual = 'Manual',
  Dual_Clutch = 'Dual Clutch'
}

export class TransmissionInput {
  @IsOptional()
  @IsEnum(TransmissionTypeInput)
  type?: TransmissionTypeInput;

  @IsOptional()
  @IsInt()
  gears?: number;
}

export enum DriveTypeInput {
  RWD = 'RWD',
  FWD = 'FWD',
  AWD = 'AWD',
  FourWD = '4WD',
  SixWD = '6WD'
}

export class SpecsInput {
  @IsOptional()
  @ValidateNested()
  @Type(() => PerformanceInput)
  performance?: PerformanceInput;

  @IsOptional()
  @ValidateNested()
  @Type(() => EngineInput)
  engine?: EngineInput;

  @IsOptional()
  @ValidateNested()
  @Type(() => TransmissionInput)
  transmission?: TransmissionInput;

  @IsOptional()
  @IsEnum(DriveTypeInput)
  drive_type?: DriveTypeInput;
}

export class CarInput {
  @IsInt() year: number;
  @IsString() make: string;
  @IsString() model: string;
  @IsString() country: string;
  @IsInt() styling: number;
  @IsInt() acceleration: number;
  @IsInt() handling: number;
  @IsInt() fun_factor: number;
  @IsInt() cool_factor: number;
  @IsInt() features: number;
  @IsInt() comfort: number;
  @IsInt() quality: number;
  @IsInt() practicality: number;
  @IsInt() value: number;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => SpecsInput)
  specs?: Specs;

  @IsOptional()
  @IsUrl()
  image?: string;
}
