interface LoadStyleInput {
  file?: string;
  content?: string;
  insertPosition?: InsertPosition;
}
interface LoadScriptInput {
  file?: string;
  content?: string;
  insertPosition?: InsertPosition;
}

declare interface Wiloke {
  elementor(selector: string, callback: (el: HTMLElement) => void): void;
  loadStyle({ file, content, insertPosition }: LoadStyleInput): HTMLStyleElement | undefined;
  loadScript({ file, content, insertPosition }: LoadScriptInput): Promise<HTMLScriptElement>;
  objParse<T extends Record<string, any>>(value: string): T;
  swiper(el: HTMLElement): void;
}

declare const wiloke: Wiloke;
