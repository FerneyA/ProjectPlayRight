export class DataGenerator {
  static randomEmail(): string {
    const timestamp = Date.now();
    return `user_${timestamp}@test.com`;
  }

  static randomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
