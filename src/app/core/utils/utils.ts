export class AppUtils {
  static getCssVariable(variableName: string): string {
    // Fetch the root element's styles
    return getComputedStyle(document.documentElement)
      .getPropertyValue(variableName)
      .trim();
  }
}
