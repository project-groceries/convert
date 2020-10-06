/*
 * Converting between weights and volumes
 *
 * BIG PICTURE
 **********************************************************
 *       ×n        (m^3) × p       ÷1000      ÷n          *
 *       <===        <===          <===      <===         *
 * Mass        kg             m^3         L        Volume *
 *       ===>        ===>          ===>      ===>         *
 *       ÷n          kg/p          ×1000      ×n          *
 **********************************************************
 *
 * LEGEND
 * Mass   => The specific scale we want to start or finish with.
 *           Examples include kg, g etc.
 * Volume => The specific scale we want to start or finish with.
 *           Examples include ml, L, Tbsp etc.
 * n      => multiplier. Takes us to or from our final or inital value.
 *           E.g. going from Cups to L or vice versa, n = 4
 *           E.g. going from g to kg or vice versa, n = 1000
 * p      => density of the ingredient
 *
 * what are scales vs measurements?
 * What is a unit scale?
 * what is an absolute amount?
 * what is a relative amount?
 */

// converting between weights and volumes
// where the unit of weight is kilogram and the unit of volume is metres cubed

// Litres to Volume multipliers
const LITRES_TO_CUPS = 4;
const LITRES_TO_TABLESPOONS = 50;
const LITRES_TO_TEASPOONS = 200;
const LITRES_TO_METRESCUBED = 1000;

// Kilos to Weight multipliers
const KILOS_TO_MILLIGRAMS = 1000000;
const KILOS_TO_GRAMS = 1000;

const weightToKilograms = (weight, multiplier) => weight / multiplier;
const milligramsToKilograms = (milligrams) =>
  weightToKilograms(milligrams, KILOS_TO_MILLIGRAMS);

const kilogramsToWeight = (kg, n) => kg * n;
const kilogramsToMilligrams = (kg) =>
  kilogramsToWeight(kg, KILOS_TO_MILLIGRAMS);
const kilogramsToGrams = (kg) => kilogramsToWeight(kg, KILOS_TO_GRAMS);

const kilogramsToMetresCubed = (kg, p) => kg / p;
const metresCubedToKilograms = (metresCubed, p) => metresCubed * p;

const metresCubedToLitres = (metresCubed) =>
  metresCubed * LITRES_TO_METRESCUBED;
const litresToMetresCubed = (litres) => litres / LITRES_TO_METRESCUBED;
const litresToVolume = (litres, n) => litres * n;
const volumeToLitres = (volume, n) => volume / n;

// export const volumeToMilligrams = (volume, multiplier, density) => {
//   const litres = volumeToLitres(volume, multiplier);
//   const metresCubed = litresToMetresCubed(litres);
//   const kilograms = metresCubedToKilograms(metresCubed, density);
//   const milligrams = kilogramsToMilligrams(kilograms);

//   return milligrams;
// };
export const volumeToKilograms = (volume, multiplier, density) => {
  const litres = volumeToLitres(volume, multiplier);
  const metresCubed = litresToMetresCubed(litres);
  const kilograms = metresCubedToKilograms(metresCubed, density);

  return kilograms;
};

// export const milligramsToVolume = (milligrams, multiplier, density) => {
//   const kilograms = milligramsToKilograms(milligrams);
//   const metresCubed = kilogramsToMetresCubed(kilograms, density);
//   const litres = metresCubedToLitres(metresCubed);
//   const volume = litresToVolume(litres, multiplier);

//   return volume;
// };
export const weightToLitres = (weight, multiplier, density) => {
  const kilograms = weightToKilograms(weight, multiplier);
  const metresCubed = kilogramsToMetresCubed(kilograms, density);
  const litres = metresCubedToLitres(metresCubed);

  return litres;
};
