import {headerString} from './header.js';
import {templateFabrica} from './templateFabrica.js';

const commitString = `
<div class="chartcolCentre chartleaderBox grayVar">
 {header}
  <div class="chartcommitBox">
    <div class="chartcommitGraphContainer chartcommitContainer">
      {commitChart}
    </div>
    <div class="chartcommitNameContainer chartcommitContainer">
      {commitPersons}
    </div>
  </div>
</div>`;

const commitChartString = `
<div class="chartelContainer chartcommitElContainer">
  <p>{value}</p>
  <div class="chartbar {activeClass}" style="height:{heightBar}%" ></div>
  <p>{valueTitle}</p>
</div>`;
const commitPersonsString = `
<div class="chartelContainer chartpersonsChart">
  <img class="chartcommitImg" src="{avatar}" alt="{avatar}">
  <p>{name}</p>
</div>`;

export const chartTemplate = data => {
  const header = templateFabrica(headerString, {
    title: data.title,
    subtitle: data.subtitle,
    emoji: data.emoji
  });

  let commitPersons = '';
  data.users.forEach(user => {
    commitPersons += templateFabrica(commitPersonsString, {
      avatar: user.avatar,
      name: user.name,
      valueText: user.valueText
    });
  });

  let commitChart = '';
  const maxValue =Math.max(...data.values.map(el => el.value));
  data.values.forEach(value => {
    const hight =Math.round((value.value/maxValue)*100);
    commitChart += templateFabrica(commitChartString, {
      value: value.value,
      valueTitle: value.title,
      heightBar: hight,
      activeClass: value.active ? "chartactiveBarChart" : undefined
    });
  });

  return templateFabrica(commitString, {
    header: header,
    commitChart: commitChart,
    commitPersons: commitPersons
  });
};
