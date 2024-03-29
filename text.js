"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.textAlign = exports.lineHeight = exports.letterSpacing = exports.fontWeight = exports.fontStyle = exports.fontSize = exports.fontFamily = void 0;

var _style = _interopRequireDefault(require("./style"));

var _compose = _interopRequireDefault(require("./compose"));

var fontFamily = (0, _style.default)({
  prop: 'fontFamily',
  themeKey: 'text'
});
exports.fontFamily = fontFamily;
var fontSize = (0, _style.default)({
  prop: 'fontSize',
  themeKey: 'text'
});
exports.fontSize = fontSize;
var fontStyle = (0, _style.default)({
  prop: 'fontStyle',
  themeKey: 'text'
});
exports.fontStyle = fontStyle;
var fontWeight = (0, _style.default)({
  prop: 'fontWeight',
  themeKey: 'text'
});
exports.fontWeight = fontWeight;
var letterSpacing = (0, _style.default)({
  prop: 'letterSpacing'
});
exports.letterSpacing = letterSpacing;
var lineHeight = (0, _style.default)({
  prop: 'lineHeight'
});
exports.lineHeight = lineHeight;
var textAlign = (0, _style.default)({
  prop: 'textAlign'
});
exports.textAlign = textAlign;
var text = (0, _compose.default)(fontFamily, fontSize, fontStyle, fontWeight, letterSpacing, lineHeight, textAlign);
var _default = text;
exports.default = _default;