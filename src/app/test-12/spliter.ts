export function splitText(item) {
  const isSimple = typeof item === 'string';
  return {
    elements: (isSimple ? item : item.t).split(''),
    subNotes: isSimple ? null : item.s,
    component: isSimple ? null : item.c
  };
}

export function splitNotes(notes){
  return notes.reduce((prev, section) => {
    return {
      offsets: prev.offsets.concat(prev.sum),
      sum: prev.sum + section.length
    };
  }, {offsets: [], sum: 1}).offsets;
}
