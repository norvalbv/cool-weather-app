const fahrenheitToCelsius = (fahrenheit: number): number => {
  const celsius = (fahrenheit - 32) * (5 / 9);
  return Math.round(celsius * 100) / 100; // Round to 2 decimal places.
};
export default fahrenheitToCelsius;
