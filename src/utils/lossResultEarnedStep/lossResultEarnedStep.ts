import { roundFiveDecimals } from '../roundFiveDecimals';

export function lossResultEarnedStep(
  accumulatedLoss: number,
  resultEarned: number
) {
  if (resultEarned > 0) return accumulatedLoss;
  return roundFiveDecimals(accumulatedLoss + resultEarned);
}
