export interface Car {
  id: string;
  year: number;
  make: string;
  model: string;
  country: string;
  styling: number;
  acceleration: number;
  handling: number;
  fun_factor: number;
  cool_factor: number;
  weekend_total: number;
  features: number;
  comfort: number;
  quality: number;
  practicality: number;
  value: number;
  daily_total: number;
  dougscore: number;
  description?: string;
  specs?: Specs;
  image?: string;
}

export interface Specs {
  performance?: Performance;
  engine?: Engine;
  transmission?: Transmission;
  drive_type?: DriveType;
}

export interface Performance {
  zero_to_sixty_mph?: number;
  top_speed_mph?: number;
  horsepower?: number;
  torque_lb_ft?: number;
}

export interface Engine {
  type?: EngineType;
  layout?: EngineLayout;
  displacement_liters?: number;
  aspiration?: AspirationType;
  fuel?: FuelType;
}

export type EngineType =
  | 'I2'
  | 'I3'
  | 'I4'
  | 'I5'
  | 'I6'
  | 'V4'
  | 'V6'
  | 'V8'
  | 'V10'
  | 'V12'
  | 'F4'
  | 'F6'
  | 'W8'
  | 'W12'
  | 'W16'
  | 'Rotary'
  | 'Electric';

export type EngineLayout = 'Front' | 'Mid' | 'Rear' | 'Axle';

export type AspirationType =
  | 'Naturally Aspirated'
  | 'Turbo'
  | 'Twin Turbo'
  | 'Quad Turbo'
  | 'Supercharged'
  | 'Not Applicable';

export type FuelType =
  | 'Gasoline'
  | 'Diesel'
  | 'Electric'
  | 'Gas Hybrid'
  | 'Diesel Hyprid'
  | 'Flex Fuel';

export interface Transmission {
  type?: TransmissionType;
  gears?: number;
}

export type TransmissionType = 'Automatic' | 'Manual' | 'Dual Clutch';

export type DriveType = 'RWD' | 'FWD' | 'AWD' | '4WD' | '6WD';
