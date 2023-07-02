export class ListStruct<T> {
  readonly arr: Array<T>;

	protected constructor(ta: T | T[]) {
		this.arr = Array.isArray(ta) ? ta : [ta];
	}

  static from<T>(ta?: T | T[]): ListStruct<T> {
    const isListStruct = ta instanceof ListStruct<T>;
    const isArray = Array.isArray(ta);
    
    if (isListStruct) {
      return ta;
    } else if (isArray) {
      return new ListStruct(ta);
    } else if (!ta) {
      return new ListStruct([]);
    } else { 
      return new ListStruct([ta]);
    }
  }

	static empty<T>(): ListStruct<T> {
		return ListStruct.from<T>();
	}

	cons: <T>(t: T) => (ts: ListStruct<T>) => ListStruct<T> = (t) => (ts) =>
		ListStruct.from(ts.arr.concat([t]));
}