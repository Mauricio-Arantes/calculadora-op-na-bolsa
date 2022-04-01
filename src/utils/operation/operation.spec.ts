import { operation, OperationType } from './operation';

describe('Operation', () => {
  it('should be calculated the result of a first buy operation', function () {
    const result = operation(OperationType.BUY, 0, 0, 0, 25.9, 100, 8.5);

    expect(result).toStrictEqual({
      accumulatedLoss: 0,
      mediumQuantity: 100,
      mediumPrice: 25.985,
      incomeTax: 0,
    });
  });

  it('should be calculated the result of a first sell operation', function () {
    const result = operation(
      OperationType.SELL,
      26.70625,
      400,
      0,
      26.53,
      100,
      8.5
    );

    expect(result).toStrictEqual({
      accumulatedLoss: -26.125,
      mediumQuantity: 300,
      mediumPrice: 26.70625,
      incomeTax: 0,
    });
  });

  it('should be calculated the result of a three buy operations', function () {
    const result = operation(OperationType.BUY, 0, 0, 0, 25.9, 100, 8.5);
    expect(result).toStrictEqual({
      accumulatedLoss: 0,
      mediumQuantity: 100,
      mediumPrice: 25.985,
      incomeTax: 0,
    });

    const result2 = operation(
      OperationType.BUY,
      result.mediumPrice,
      result.mediumQuantity,
      result.accumulatedLoss,
      26.4,
      200,
      8.5
    );
    expect(result2).toStrictEqual({
      accumulatedLoss: 0,
      mediumQuantity: 300,
      mediumPrice: 26.29,
      incomeTax: 0,
    });

    const result3 = operation(
      OperationType.BUY,
      result2.mediumPrice,
      result2.mediumQuantity,
      result2.accumulatedLoss,
      27.87,
      100,
      8.5
    );
    expect(result3).toStrictEqual({
      accumulatedLoss: 0,
      mediumQuantity: 400,
      mediumPrice: 26.70625,
      incomeTax: 0,
    });
  });

  it('should be calculated the result of a two sell operations', function () {
    const initialValue = {
      accumulatedLoss: 0,
      mediumQuantity: 400,
      mediumPrice: 26.70625,
    };

    const result = operation(
      OperationType.SELL,
      initialValue.mediumPrice,
      initialValue.mediumQuantity,
      initialValue.accumulatedLoss,
      26.53,
      100,
      8.5
    );
    expect(result).toStrictEqual({
      accumulatedLoss: -26.125,
      mediumQuantity: 300,
      mediumPrice: initialValue.mediumPrice,
      incomeTax: 0,
    });

    const result2 = operation(
      OperationType.SELL,
      result.mediumPrice,
      result.mediumQuantity,
      result.accumulatedLoss,
      27.39,
      100,
      8.5
    );
    expect(result2).toStrictEqual({
      accumulatedLoss: 0,
      mediumQuantity: 200,
      mediumPrice: 26.70625,
      incomeTax: 5.0625,
    });
  });
});
