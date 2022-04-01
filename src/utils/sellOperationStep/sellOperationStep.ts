import { roundFiveDecimals } from '../roundFiveDecimals';

export function sellOperationStep(
  price: number,
  mediumPrice: number,
  quantity: number,
  mediumQuantity: number,
  tax: number
) {
  const resultEarned = roundFiveDecimals(
    (price - mediumPrice) * quantity - tax
  );

  const mediumQuantityResponse = mediumQuantity - quantity;

  return {
    resultEarned: resultEarned,
    mediumQuantity: mediumQuantityResponse,
  };
}
