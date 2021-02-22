/* const stabValue ={
        stab: value
        -----------
    };
*/
export const templateFabrica = (shablon, stabValue) => {
    let html = shablon.replace(/{\w+\d*}/g, (findKey) => {
        const key = findKey.replace(/{|}/g, '');
        return typeof stabValue[key] !== 'undefined' ? stabValue[key] : '';
    });
    
    return html;
}
