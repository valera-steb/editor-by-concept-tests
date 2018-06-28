export function splitText(item) {
  const isSimple = typeof item === 'string';
  return {
    elements: (isSimple ? item : item.t).split(''),
    subNotes: isSimple ? null : item.s
  };
}
