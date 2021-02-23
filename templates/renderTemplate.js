import {leadersTemplate} from './leaders.js';
import {voteTemplate} from './vote.js';
import {chartTemplate} from './chart.js';
import {diagramTemplate} from './diagram.js';
import {activityTemplate} from './activity.js';

const renderTemplate = ({alias, data}) => {
    const renderTemplates = {
        leaders: leadersTemplate,
        vote: voteTemplate,
        chart: chartTemplate,
        diagram: diagramTemplate,
        activity: activityTemplate,
    };

    const resultHtml = renderTemplates[alias](data);

    return resultHtml;
};

window.renderTemplate=renderTemplate;
