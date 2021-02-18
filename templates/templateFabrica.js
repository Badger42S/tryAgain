/* const shablon ={
        htmlTag: 'div',
        properties: {propName: value},
        tagClass:[],
        children: [shablons]
    };
*/
const templateFabrica = (shablon) => {
    if (!shablon.htmlTag) return shablon;
    const element = document.createElement(shablon.htmlTag);
    element.classList = shablon.tagClass?.join(' ');
    if(shablon.properties){
        for (const property in shablon.properties) {
            element[property]=shablon.properties[property];
        }
    }
    shablon.children?.forEach(chiled => {
        element.append(templateFabrica(chiled));
    });

    return element;
}