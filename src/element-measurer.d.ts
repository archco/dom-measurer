type ArrowToTarget = HTMLElement|Window|Document|string;

interface Offsets {
  top: number;
  left: number;
}

export default class ElementMeasurer {
  target: HTMLElement;

  /** Returns whether target is document or html element. */
  readonly isDocument: boolean;

  /** Returns inner width of an element in pixels. */
  readonly clientWidth: number;

  /** Returns inner height of an element in pixels. */
  readonly clientHeight: number;

  /** Gets or sets the number of pixels that an element's content is scrolled vertically. */
  scrollTop: number;

  /** Gets or sets the number of pixels that an element's content is scrolled to the left. */
  scrollLeft: number;

  /** Returns the width of the entire content of an element. */
  readonly scrollWidth: number;

  /** Returns the height of the entire content of an element. */
  readonly scrollHeight: number;

  /** Returns maximum top scroll offset possible for the element. */
  readonly maxScrollTop: number;

  /** Returns maximum left scroll offset possible for the element. */
  readonly maxScrollLeft: number;

  constructor(target?: ArrowToTarget)

  /** Set target html element. */
  setTarget(val: ArrowToTarget): this;

  /**
   * Returns top and left values that indicates offset distance to html document.
   * @see https://stackoverflow.com/questions/442404/retrieve-the-position-x-y-of-an-html-element#answer-442474
   */
  getOffset(): Offsets;
}
