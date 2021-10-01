export const switchCurrent = (items: any[], index: number) => {
  const resetCurrent = items.map((item) => ({ ...item, current: false }));
  resetCurrent[index].current = true;

  return resetCurrent;
};
