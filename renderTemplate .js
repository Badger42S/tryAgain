const renderTemplate = ({alias, data}) => {
    const renderTemplates = {
        leaders: ()=>{},
        vote: ()=>{},
        chart: ()=>{},
        diagram: ()=>{},
        activity: ()=>{}
    };

    const resultHtml = renderTemplates[alias](data);

    return resultHtml;
}