import {testData} from './data.js';

const queryParam= window.location.search;
const aliasParam = (new URLSearchParams(queryParam).get('slide')||1) - 1;

const aliasData = testData[aliasParam];

const htmlTest = renderTemplate(aliasData);
document.querySelector("body").innerHTML = htmlTest;