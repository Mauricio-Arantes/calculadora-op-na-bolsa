import { lossResultEarnedStep } from './lossResultEarnedStep';

describe('Buy operation', () => {
  it('should be calculated the result earned and the medium quantity', function () {
    const result = lossResultEarnedStep(0, -26.125);

    expect(result).toStrictEqual(-26.125);
  });

  it('should not be calculated if the result earned is positive', function () {
    const result = lossResultEarnedStep(25, 26.125);

    expect(result).toStrictEqual(25);
  });

  it('should be calculated if have some positive results and negatives results', function () {
    const result1 = lossResultEarnedStep(0, -26.125);
    expect(result1).toStrictEqual(-26.125);

    const result2 = lossResultEarnedStep(result1, -26.125);
    expect(result2).toStrictEqual(-52.25);

    const result3 = lossResultEarnedStep(result2, 26.125);
    expect(result3).toStrictEqual(-52.25);

    const result4 = lossResultEarnedStep(result3, -26.125);
    expect(result4).toStrictEqual(-78.375);
  });
});
