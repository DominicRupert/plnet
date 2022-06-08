import mongoose from 'mongoose'
import { ValueSchema } from '../models/Value'
import { PlanetSchema } from '../models/Planet'
import { MoonSchema } from '../models/Moon'
import { StarSchema } from '../models/Star'
import { GalaxySchema } from '../models/Galaxy'


class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Stars = mongoose.model('Star', StarSchema);
  Planets = mongoose.model('Planet', PlanetSchema);
  Moons = mongoose.model('Moon', MoonSchema);
  Galaxies = mongoose.model('Galaxy', GalaxySchema);

}

export const dbContext = new DbContext()
