import '@testing-library/jest-dom';

if (typeof window !== 'undefined' && !('matchMedia' in window)) {
  window.matchMedia = (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: () => {},
    removeEventListener: () => {},
    addListener: () => {},
    removeListener: () => {},
    dispatchEvent: () => false,
  });
}

class ResizeObserverStub implements ResizeObserver {
  observe(): void {}

  unobserve(): void {}

  disconnect(): void {}
}

if (typeof global !== 'undefined' && !(global as typeof global & { ResizeObserver?: ResizeObserver }).ResizeObserver) {
  (global as typeof global & { ResizeObserver: typeof ResizeObserver }).ResizeObserver = ResizeObserverStub as unknown as typeof ResizeObserver;
}
