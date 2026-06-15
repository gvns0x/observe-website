export default function Range(start:number, end:number, step:number = 1) {
    const length = Math.floor((end - start) / step) + 1;
  
    return Array.from(
      { length },
      (_, index) => start + index * step
    );
  }