// import {leadersTemplate} from './leaders';
// import {testData} from './data';

 const renderTemplate = ({alias, data}) => {
    const renderTemplates = {
        leaders: leadersTemplate,
        vote: ()=>{},
        chart: ()=>{},
        diagram: ()=>{},
        activity: ()=>{}
    };

    const resultHtml = renderTemplates[alias](data);

    return resultHtml;
}

const htmlTest = renderTemplate(testData);
document.querySelector("body").innerHTML =htmlTest;
