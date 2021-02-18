 const leadersTemplate = data => {
    // const mainContainer = document.createElement("div");
    // mainContainer.classList = "colCentre";
    // const boxContainer = document.createElement("div");
    // boxContainer.classList = "colCentre leaderBox";
    // mainContainer.append(boxContainer);
    
    const titleObj ={
        htmlTag:"h1",
        properties:{textContent: data.title},
    };
    const subtitleObj ={
        htmlTag:"h4",
        properties:{textContent: data.subtitle},
    };
    const emojiObj ={
        htmlTag:"h2",
        properties:{textContent: data.emoji},
    };
    const headerObj ={
        htmlTag:"header",
        tagClass:["colCentre"],
        children:[titleObj, subtitleObj, emojiObj]
    };
    const header = templateFabrica(headerObj);

    const elementsBox = document.createElement("div");
    elementsBox.classList = "elsBox";
    data.users.map( (user, index) => {
        const elContainer = document.createElement("div");
        elContainer.classList = "elContainer";

        const avatar = {
            htmlTag: "img",
            properties:{src: user.avatar}
        };
 
        const name = {
            htmlTag: "p",
            properties:{textContent: user.name}
        };
        const valueText = {
            htmlTag: "p",
            properties:{textContent: user.valueText}
        }; 

        const bar = document.createElement("div");
        let barClass = '';
        if(index === 0) {
            barClass = "liderBar";
        } else if(index <3) {
            barClass = "secondBar";
        } else {
            barClass = "thirdBar"
        }
        bar.classList = `${barClass} bar`;

        const liderElement = templateFabrica({
            htmlTag: "div",
            tagClass:["liderElement" ,"colCentre"],
            children:[avatar, name, valueText, bar]
        }); 
    
        elContainer.append(liderElement);
        const sddMethod = index%2 === 0 ? "prepend" : "append";
        elementsBox[sddMethod](elContainer);

        return null;
    });

    const boxContainer = templateFabrica({
        htmlTag: "div",
        tagClass:["leaderBox" ,"colCentre"],
        children:[header, elementsBox]
    });

    const mainContainer = templateFabrica({
        htmlTag: "div",
        tagClass:["colCentre"],
        children:[boxContainer]
    });
   
    return mainContainer.innerHTML;
}