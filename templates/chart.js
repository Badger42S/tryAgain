import {headerString} from './header.js';
import {templateFabrica} from './templateFabrica.js';

const commitString = `
<div class="colCentre leaderBox grayVar">
 {header}
  <div class="commitBox">
    <div class="commitGraphContainer commitContainer">
      {commitChart}
    </div>
    <div class="commitNameContainer commitContainer">
      {commitPersons}
    </div>
  </div>
</div>`;

const commitChartString = `
<div class="elContainer commitElContainer">
  <p>{value}</p>
  <div class="bar {activeClass}" style="height:{heightBar}%" ></div>
  <p>{valueTitle}</p>
</div>`;
const commitPersonsString = `
<div class="elContainer personsChart">
  <img class="commitImg" src="{avatar}" alt="{avatar}">
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
      activeClass: value.active ? "activeBarChart" : undefined
    });
  });

  return templateFabrica(commitString, {
    header: header,
    commitChart: commitChart,
    commitPersons: commitPersons
  });
};
