enum breakpoints {
  sml = 425,
  md = 768,
  lrg = 1024,
  xlrg = 1440,
}

function reduceString(text: string): string {
  let textArray = text.split(' ');

  if (textArray.length > 10) {
    textArray.push('...');
    return textArray.slice(0, 10).join(' ');
  }

  return textArray.join(' ');
}

export { breakpoints, reduceString };
