import { profitResultEarned } from './profitResultEarned';

describe('Profit operation', () => {
  it('should be calculated the profit', function () {
    const result = profitResultEarned(26.70625, -15);

    expect(result).toStrictEqual({
      incomeTax: 1.75594,
      accumulatedLoss: 0,
    });
  });

  it('should be not calculated the profit if the accumulatedLoss is a positive number', function () {
    expect(() => profitResultEarned(26.70625, 15)).toThrow(
      'accumulatedLoss must be a positive number'
    );
  });
});
