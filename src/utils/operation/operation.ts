import { sellOperationStep } from '../sellOperationStep';
import { buyOperationStep } from '../buyOperationStep';
import { lossResultEarnedStep } from '../lossResultEarnedStep';
import { profitResultEarned } from '../profitResultEarned';

export enum OperationType {
  SELL = 'SELL',
  BUY = 'BUY',
}

export function operation(
  type: OperationType,
  mediumPrice: number,
  mediumQuantity: number,
  accumulatedLoss: number,
  price: number,
  quantity: number,
  tax: number
) {
  if (type === OperationType.SELL) {
    const result = sellOperationStep(
      price,
      mediumPrice,
      quantity,
      mediumQuantity,
      tax
    );
    if (result.resultEarned < 0) {
      const loss = lossResultEarnedStep(accumulatedLoss, result.resultEarned);

      return {
        accumulatedLoss: loss,
        mediumQuantity: result.mediumQuantity,
        mediumPrice,
        incomeTax: 0,
      };
    } else {
      const profit = profitResultEarned(result.resultEarned, accumulatedLoss);

      return {
        accumulatedLoss: profit.accumulatedLoss,
        mediumQuantity: result.mediumQuantity,
        mediumPrice,
        incomeTax: profit.incomeTax,
      };
    }
  } else if (type === OperationType.BUY) {
    const result = buyOperationStep(
      price,
      mediumQuantity,
      tax,
      quantity,
      mediumPrice
    );

    return {
      accumulatedLoss,
      mediumQuantity: result.mediumQuantity,
      mediumPrice: result.mediumPrice,
      incomeTax: 0,
    };
  } else {
    throw new Error('Unknown operation type');
  }
}
