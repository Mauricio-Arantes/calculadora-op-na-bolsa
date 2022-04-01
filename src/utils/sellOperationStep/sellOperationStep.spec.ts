import { sellOperationStep } from './sellOperationStep';

describe('Buy operation', () => {
  it('should be calculated the result earned and the medium quantity', function () {
    const result = sellOperationStep(26.53, 26.70625, 100, 400, 8.5);

    expect(result).toStrictEqual({
      mediumQuantity: 300,
      resultEarned: -26.125,
    });
  });
});
