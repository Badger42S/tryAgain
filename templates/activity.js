import {headerString} from './header.js';
import {templateFabrica} from './templateFabrica.js';
import {images} from './images.js';

const activityString =`
<div class="activityCentre activityBox dark">
 {header}
    <div class="activityInfo">
        <div class="activityChatColumn">
            {activityChat}
        </div>
    </div>
    {activityLegend}
</div>`;

const activityChatBoxString = `
<div class="activityChatRow">
 {activityChatElement}
</div>`;
const activityChatString = `<img src={heightBar} class="activityImg">`;

const activityLegendString = `
<div class="activityLegendBox">
  <div class="activityLegendRow">
    <div class="activityLegend">
        <div class="activityLegendBar activityColorZero"></div>
        <p class="activityLegendText">0</p>
    </div>
    <div class="activityLegend">
        <div class="activityLegendBar activityColorOne"></div>
        <p class="activityLegendText">1 - 2</p>
    </div>
    <div class="activityLegend">
        <div class="activityLegendBar activityColorTwo"></div>
        <p class="activityLegendText">3 - 4</p>
    </div>
    <div class="activityLegend">
        <div class="activityLegendBar activityColorThree"></div>
        <p class="activityLegendText">5 - 6</p>
    </div>
  </div>
</div>`;
 

export const activityTemplate = data => {
    const header = templateFabrica(headerString, {
        title: data.title,
        subtitle: data.subtitle,
    });

    let activityChat = '';
    let idx = 0;
    for (const day in data.data) {
        const dayData = data.data[day];
        let activityChatElement ='';
        
        dayData.forEach( arr => {
            let heightBar;
            if(arr > 4) {
                heightBar = 'extra';
            } else if(arr > 2) {
                heightBar = 'max';
            } else if(arr > 0) {
                heightBar = 'mid';
            } else {
                heightBar = 'min';
            };

            activityChatElement += templateFabrica(activityChatString, {
                heightBar: images[`${heightBar}-dark.png`],
            });
        });
        idx++;
        activityChat += templateFabrica(activityChatBoxString, {
            activityChatElement: activityChatElement,
        });
    };

    return templateFabrica(activityString, {
        header: header,
        activityChat: activityChat,
        activityLegend: templateFabrica(activityLegendString, {})
    });
};