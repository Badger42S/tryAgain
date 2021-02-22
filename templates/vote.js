import {headerString} from './header.js';
import {templateFabrica} from './templateFabrica.js';

const voteString = `
<div class="votecolCentre voteleaderBox">
    <div class="votecolCentre voteleaderBox votemaxHeight">
      {header}
      <div class="voteelsBox">
        <div class="voteelContainer">
          {persons1}
          {persons2}
          <div class="voteoneInColumn">
            <div class="votebuttonEl votecolCentre votetwoInColumn">
                <button type="button" name="up">
                  <img src="buttonImage" alt="buttonImage">
                </button>
            </div>
            <div class="votebuttonEl votecolCentre votetwoInColumn">
              <button type="button" name="down">
                <img src="buttonImage" alt="buttonImage">
              </button>
            </div>
          </div>
          {persons3}
          {persons4}
        </div>
      </div>
    </div>
</div>`;

 const persons = `
 <div class="voteoneInColumn">
  {person}
</div>`;

const person =`
<div class="votevotePerson votecolCentre" style="height:{heightEl}%">
  <img src="{avatar}" alt="{avatar}">
  <p>{name}</p>
</div>`;

export const voteTemplate = data => {
  const header = templateFabrica(headerString, {
    title: data.title,
    subtitle: data.subtitle,
  });

  const users = data.users.slice(0, 6);
  const person1Users = users.slice(0, 1);
  const person2Users = users.slice(1, 3);
  const person3Users = users.slice(3, 5);
  const person4Users = users.slice(5);

  let person1='';
  person1Users.forEach(user => {
    person1 += templateFabrica(person, {
      avatar: user.avatar,
      name: user.name,
      heightEl: 100
    });
  });
  person1 = templateFabrica(persons, {
    person: person1
  });
  let person2='';
  person2Users.forEach(user => {
    person2 += templateFabrica(person, {
      avatar: user.avatar,
      name: user.name,
      heightEl: 50
    });
  });
  person2 = templateFabrica(persons, {
    person: person2
  });
  let person3='';
  person3Users.forEach(user => {
    person3 += templateFabrica(person, {
      avatar: user.avatar,
      name: user.name,
      heightEl: 50
    });
  });
  person3 = templateFabrica(persons, {
    person: person3
  });
  let person4='';
  person4Users.forEach(user => {
    person4 += templateFabrica(person, {
      avatar: user.avatar,
      name: user.name,
      heightEl: 100
    });
  });
  person4 = templateFabrica(persons, {
    person: person4
  });

  return templateFabrica(voteString, {
    header: header,
    persons1: person1,
    persons2: person2,
    persons3: person3,
    persons4: person4
  });
}