import {headerString} from './header.js';
import {templateFabrica} from './templateFabrica.js';
import {images} from './images.js';

const leaderBarString = `
<div class="leaderelContainer">
    <div class="leaderliderElement leadercolCentre">
        <div class="leadercolCentre">
            <span class="leadersgoupVote">{likeEmoji}</span>
            <img src="{avatar}" alt="{avatar}" class="liderImg">
        </div>
        <p>{name}</p>
        <p>{valueText}</p>
        <div class="leaderbar {barClass}"><p class="positionText">{position}</p></div>
    </div>
</div>`;

const leaderString = `
<div class="leadercolCenrcoltre dark">
    <div class="leadeCentre leaderleaderBox mainLeaderConatiner">
        {header}
        <div class="leaderelsBox">
            {leader}
        </div>
    </div>
</div>`;

export const leadersTemplate = data => {    
    let header = templateFabrica(headerString, {
        title: data.title,
        subtitle: data.subtitle,
        emoji: data.emoji
    });

    let leader = '';
    data.users.map( (user, index) => {
        let barClass = '';
        if(index === 0) {
            barClass = "leaderliderBar";
        } else if(index <3) {
            barClass = "leadersecondBar";
        } else {
            barClass = "leaderthirdBar"
        }
        let leaderString = templateFabrica(leaderBarString, {
            likeEmoji: data.selectedUserId === user.id ? '👍' : undefined,
            avatar: images[user.avatar],
            name: user.name,
            valueText: user.valueText,
            position: index + 1,
            barClass: barClass
        });
        leader = index%2 !== 0 ? leader + leaderString : leaderString + leader;
    });
    
    return templateFabrica(leaderString, {
        header: header,
        leader: leader
    });
};