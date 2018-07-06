import { sum } from './js/util';

// import style from './index.css';
const arr = [1, 2, 3];
const es6 = () => console.log(...arr);
const total = sum(3, 10);
window.es6 = es6;
window.total = total;
