import {headerString} from './header.js';
import {templateFabrica} from './templateFabrica.js';

const activityString =`
<div class="activityCentre activityBox">
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
const activityChatString = `<div class="activityChatBar {activityChatColor}" style="height:{heightBar}%"></div>`;

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
    for (const day in data.data) {
        const dayData = data.data[day];
        let activityChatElement ='';
        
        dayData.forEach( arr => {
            let activityChatColor;
            let heightBar;
            if(arr > 4) {
                activityChatColor = 'activityColorThree';
                heightBar = 100;
            } else if(arr > 2) {
                activityChatColor = 'activityColorOne';
                heightBar = 60;
            } else if(arr > 0) {
                activityChatColor = 'activityColorTwo';
                heightBar = 20;
            } else {
                activityChatColor = 'activityColorOne';
                heightBar = 0;
            };

            activityChatElement += templateFabrica(activityChatString, {
                activityChatColor: activityChatColor,
                heightBar: heightBar,
            });
        });
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