import { roundFiveDecimals } from '../roundFiveDecimals';

export function profitResultEarned(
  resultEarned: number,
  accumulatedLoss: number
) {
  if (accumulatedLoss > 0)
    throw new Error('accumulatedLoss must be a positive number');

  const incomeTaxResult = roundFiveDecimals(
    (resultEarned - Math.min(resultEarned, accumulatedLoss * -1)) * (15 / 100)
  );

  const accumulatedLossResult = roundFiveDecimals(
    accumulatedLoss - Math.min(resultEarned, accumulatedLoss)
  );

  return {
    incomeTax: incomeTaxResult,
    accumulatedLoss: accumulatedLossResult,
  };
}
