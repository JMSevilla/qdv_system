import style from './style';
import compose from './compose';
export var fontFamily = style({
  prop: 'fontFamily',
  themeKey: 'text'
});
export var fontSize = style({
  prop: 'fontSize',
  themeKey: 'text'
});
export var fontStyle = style({
  prop: 'fontStyle',
  themeKey: 'text'
});
export var fontWeight = style({
  prop: 'fontWeight',
  themeKey: 'text'
});
export var letterSpacing = style({
  prop: 'letterSpacing'
});
export var lineHeight = style({
  prop: 'lineHeight'
});
export var textAlign = style({
  prop: 'textAlign'
});
var text = compose(fontFamily, fontSize, fontStyle, fontWeight, letterSpacing, lineHeight, textAlign);
export default text;