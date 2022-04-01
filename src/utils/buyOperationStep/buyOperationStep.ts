import { roundFiveDecimals } from '../roundFiveDecimals';

export function buyOperationStep(
  price: number,
  mediumQuantity: number,
  tax: number,
  quantity: number,
  mediumPrice: number
) {
  const mediumPriceResponse = roundFiveDecimals(
    (mediumPrice * mediumQuantity + price * quantity + tax) /
      (mediumQuantity + quantity)
  );

  const mediumQuantityResponse = mediumQuantity + quantity;

  return {
    mediumQuantity: mediumQuantityResponse,
    mediumPrice: mediumPriceResponse,
  };
}
