import { buyOperationStep } from './buyOperationStep';

describe('Buy operation', () => {
  it('should be calculated the medium price and the medium quantity in first buy', function () {
    const result = buyOperationStep(25.9, 0, 8.5, 100, 0);

    expect(result).toStrictEqual({ mediumQuantity: 100, mediumPrice: 25.985 });
  });

  it('should be calculated the medium price and the medium quantity in first three buy', function () {
    const result1 = buyOperationStep(25.9, 0, 8.5, 100, 0);
    expect(result1).toStrictEqual({ mediumQuantity: 100, mediumPrice: 25.985 });

    const result2 = buyOperationStep(
      26.4,
      result1.mediumQuantity,
      8.5,
      200,
      result1.mediumPrice
    );
    expect(result2).toStrictEqual({ mediumQuantity: 300, mediumPrice: 26.29 });

    const result3 = buyOperationStep(
      27.87,
      result2.mediumQuantity,
      8.5,
      100,
      result2.mediumPrice
    );
    expect(result3).toStrictEqual({
      mediumQuantity: 400,
      mediumPrice: 26.70625,
    });
  });
});
