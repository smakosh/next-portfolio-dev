export class Utility {
  getBaseUrl() {
    const envi = process.env.NODE_ENV; // Get the value of evnironment variable i.e ENV
    if (envi === 'development') {
      // Check the value
      return 'http://localhost:3040';
    }
    // return desired url
    return 'http://localhost:3000';
  }
}
