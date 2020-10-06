import { useState } from "react";
import Select from "react-select";
import { volumeToKilograms, weightToLitres } from "../lib/measurement";

const options = [
  { value: { amount: 1000, measurement: "weight" }, label: "Grams" },
  { value: { amount: 1000000, measurement: "weight" }, label: "Kilograms" },
  { value: { amount: 1, measurement: "weight" }, label: "Milligrams" },
  { value: { amount: 250, measurement: "volume" }, label: "Cups" },
  { value: { amount: 20, measurement: "volume" }, label: "Tablespoons" },
  { value: { amount: 5, measurement: "volume" }, label: "Teaspoons" },
  { value: { amount: 1000, measurement: "volume" }, label: "Litres" },
  { value: { amount: 1, measurement: "volume" }, label: "Millilitres" },
];

const Convert = () => {
  const [fromAmount, setFromAmount] = useState(1000);
  const [fromUnit, setFromUnit] = useState({
    value: { amount: 1000, measurement: "weight" },
    label: "Grams",
  });

  const [toAmount, setToAmount] = useState(1);
  const [toUnit, setToUnit] = useState({
    value: { amount: 1000000, measurement: "weight" },
    label: "Kilograms",
  });

  const [density, setDensity] = useState(500);

  const updateAmount = (setAmountA, setAmountB, unitA, unitB) => (amount) => {
    setAmountA(amount);

    if (unitA.value.measurement == unitB.value.measurement) {
      const value = (amount * unitA.value.amount) / unitB.value.amount;
      setAmountB(value);
    } else if (unitA.value.measurement == "volume") {
      const kg = volumeToKilograms(amount, 1000 / unitA.value.amount, density);
      const value = kg * (1000000 / unitB.value.amount);
      setAmountB(value);
    } else {
      const litres = weightToLitres(
        amount,
        1000000 / unitA.value.amount,
        density
      );
      const value = litres * (1000 / unitB.value.amount);
      setAmountB(value);
    }
  };
  const updateUnit = (setUnitA, setAmountB, unitB, amountA) => (unit) => {
    setUnitA(unit);

    if (unit.value.measurement == unitB.value.measurement) {
      const value = (amountA * unit.value.amount) / unitB.value.amount;
      setAmountB(value);
    } else if (unit.value.measurement == "volume") {
      const kg = volumeToKilograms(amountA, 1000 / unit.value.amount, density);
      const value = kg * (1000000 / unitB.value.amount);
      setAmountB(value);
    } else {
      const litres = weightToLitres(
        amountA,
        1000000 / unit.value.amount,
        density
      );
      const value = litres * (1000 / unitB.value.amount);
      setAmountB(value);
    }
  };
  const updateDensity = (density) => {
    setDensity(density);

    if (fromUnit.value.measurement == toUnit.value.measurement) {
      const value = (fromAmount * fromUnit.value.amount) / toUnit.value.amount;
      setToAmount(value);
    } else if (fromUnit.value.measurement == "volume") {
      const kg = volumeToKilograms(
        fromAmount,
        1000 / fromUnit.value.amount,
        density
      );
      const value = kg * (1000000 / toUnit.value.amount);
      setToAmount(value);
    } else {
      const litres = weightToLitres(
        fromAmount,
        1000000 / fromUnit.value.amount,
        density
      );
      const value = litres * (1000 / toUnit.value.amount);
      setToAmount(value);
    }
  };

  const updateFromAmount = updateAmount(
    setFromAmount,
    setToAmount,
    fromUnit,
    toUnit
  );
  const updateFromUnit = updateUnit(
    setFromUnit,
    setToAmount,
    toUnit,
    fromAmount
  );
  const updateToAmount = updateAmount(
    setToAmount,
    setFromAmount,
    toUnit,
    fromUnit
  );
  const updateToUnit = updateUnit(setToUnit, setFromAmount, fromUnit, toAmount);

  return (
    <div className="my-12 flex items-center">
      <div className="flex flex-col m-5">
        <input
          type="number"
          name="fromAmount"
          id="fromAmount"
          value={fromAmount}
          onChange={(e) => updateFromAmount(e.target.value)}
          className="inp"
        />
        <Select
          options={options}
          value={fromUnit}
          onChange={(value) => updateFromUnit(value)}
          inputId="fromUnit"
          placeholder="Search or select a unit..."
          styles={{
            container: (styles) => ({ ...styles, width: "15rem" }),
            control: (styles) => ({
              ...styles,
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
            }),
          }}
        />
      </div>
      {fromUnit.value.measurement == toUnit.value.measurement ? (
        <span>{"<==>"}</span>
      ) : (
        <>
          <span>{"<==>"}</span>
          <label htmlFor="density" className="m-5">
            Density
            <input
              type="number"
              name="density"
              id="density"
              value={density}
              onChange={(e) => updateDensity(e.target.value)}
              className="inp w-26 rounded"
            />
          </label>
          <span>{"<==>"}</span>
        </>
      )}
      <div className="flex flex-col m-5">
        <input
          type="number"
          name="toAmount"
          id="toAmount"
          value={toAmount}
          onChange={(e) => updateToAmount(e.target.value)}
          className="inp"
        />
        <Select
          options={options}
          value={toUnit}
          onChange={(value) => updateToUnit(value)}
          inputId="toUnit"
          placeholder="Search or select a unit..."
          styles={{
            container: (styles) => ({ ...styles, width: "15rem" }),
            control: (styles) => ({
              ...styles,
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
            }),
          }}
        />
      </div>
    </div>
  );
};

export default Convert;
