import {headerString} from './header.js';
import {templateFabrica} from './templateFabrica.js';

const diagramString = `
<div class="diagramleaderBox">
    {header}
  <div class="diagramcommitBox">
      <div class="diagramcommitDiagram">
        {textInDiagram}
        <svg class="diagramchart" viewBox="0 0 50 50">
          {commitDiagram}
          <circle class="unit" r="15.9" cx="50%" cy="50%"></circle>
        </svg>
      </div>
      <div class="diagramcommitElContainer diagramcommitLegend">
        {commitSize}
      </div>
  </div>
</div>`;

const commitDiagramString = '<circle class="unit" style="stroke-dasharray: {value} 100; stroke-dashoffset: {valueOffset}" r="15.9" cx="50%" cy="50%"></circle>';
const textInDiagramString = '<div class="diagramText"><p>{totalText}</p><p>{differenceText}</p></div>';
const commitSizeSring = '<div class="aboutcommitString"><span class="diagramLegend">{size}</span><div>{differenceText}  {valueText}</div></div><hr class="diagramBrakeLine">';

export const diagramTemplate = data => {
    const header = templateFabrica(headerString, {
        title: data.title,
        subtitle: data.subtitle,
    });
    
    const textInDiagram = templateFabrica(textInDiagramString, {
        totalText: data.totalText,
        differenceText: data.differenceText,
    });

    let offset = 0;
    const commitSumm = data.categories.reduce((summ,  element) => summ + parseInt(element.differenceText), 0);
    let diagramsString ='';
    let sizeTemplateSring = '';
    data.categories.forEach(element => { 
        const value =Math.round(100*parseInt(element.differenceText)/commitSumm);
        diagramsString += templateFabrica(commitDiagramString, {
            value: value,
            valueOffset: -offset
        });
        offset += value;
        sizeTemplateSring += templateFabrica(commitSizeSring, {
            size: element.title,
            differenceText: '+' + parseInt(element.differenceText),
            valueText: element.valueText
        });
    });

    return templateFabrica(diagramString, {
        header: header,
        textInDiagram: textInDiagram,
        commitDiagram: diagramsString,
        commitSize:sizeTemplateSring
    })
};