// Minimal vehicle make -> models dataset. Expandable.
export const VEHICLE_DATA: Record<string, string[]> = {
  Toyota: ['Camry', 'Corolla', 'RAV4', 'Highlander', 'Prius', 'Tacoma', 'Tundra', '4Runner'],
  Honda: ['Civic', 'Accord', 'CR-V', 'Pilot', 'HR-V', 'Odyssey'],
  Ford: ['F-150', 'F-250', 'Mustang', 'Escape', 'Explorer', 'Edge'],
  Chevrolet: ['Silverado', 'Malibu', 'Equinox', 'Traverse', 'Camaro'],
  Nissan: ['Altima', 'Sentra', 'Rogue', 'Murano', 'Pathfinder'],
  BMW: ['3 Series', '5 Series', 'X3', 'X5', 'i3'],
  Mercedes: ['C-Class', 'E-Class', 'S-Class', 'GLC', 'GLE'],
  Audi: ['A3', 'A4', 'A6', 'Q3', 'Q5'],
  Volkswagen: ['Golf', 'Jetta', 'Passat', 'Tiguan'],
  Hyundai: ['Elantra', 'Sonata', 'Tucson', 'Santa Fe', 'Kona'],
  Kia: ['Forte', 'Optima', 'Sorento', 'Sportage'],
  Subaru: ['Impreza', 'Legacy', 'Outback', 'Forester', 'Crosstrek'],
  Mazda: ['Mazda3', 'Mazda6', 'CX-5', 'CX-9'],
  Lexus: ['ES', 'RX', 'NX', 'IS'],
  Dodge: ['Charger', 'Challenger', 'Durango'],
  Jeep: ['Wrangler', 'Grand Cherokee', 'Renegade'],
  GMC: ['Sierra', 'Acadia', 'Terrain'],
  Ram: ['1500', '2500', '3500'],
  Acura: ['ILX', 'TLX', 'RDX'],
  Infiniti: ['Q50', 'Q60', 'QX50'],
  Mitsubishi: ['Outlander', 'Eclipse Cross', 'Mirage'],
  Volvo: ['S60', 'XC40', 'XC60'],
  Porsche: ['911', 'Cayenne', 'Macan'],
  LandRover: ['Range Rover', 'Discovery', 'Defender'],
  Mini: ['Cooper', 'Countryman'],
  Tesla: ['Model S', 'Model 3', 'Model X', 'Model Y'],
  Fiat: ['500', '500X'],
  Jaguar: ['XE', 'XF', 'F-Pace'],
  AlfaRomeo: ['Giulia', 'Stelvio']
};

export const MAKES = Object.keys(VEHICLE_DATA).sort();
