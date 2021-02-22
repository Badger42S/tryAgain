import {leadersTemplate} from './leaders.js';
import {voteTemplate} from './vote.js';
import {chartTemplate} from './chart.js';

export const renderTemplate = ({alias, data}) => {
    const renderTemplates = {
        leaders: leadersTemplate,
        vote: voteTemplate,
        chart: chartTemplate,
        diagram: ()=>{},
        activity: ()=>{}
    };

    const resultHtml = renderTemplates[alias](data);

    return resultHtml;
};
