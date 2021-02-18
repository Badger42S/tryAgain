 const leadersTemplate = data => {    
    const title = {
        htmlTag:"h1",
        properties:{textContent: data.title},
    };
    const subtitle = {
        htmlTag:"h4",
        properties:{textContent: data.subtitle},
    };
    const emoji = {
        htmlTag:"h2",
        properties:{textContent: data.emoji},
    };

    const header = {
        htmlTag:"header",
        tagClass:["colCentre"],
        children:[title, subtitle, emoji]
    };

    const elementsBox = document.createElement("div");
    elementsBox.classList = "elsBox";
    data.users.map( (user, index) => {
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

        let barClass = '';
        if(index === 0) {
            barClass = "liderBar";
        } else if(index <3) {
            barClass = "secondBar";
        } else {
            barClass = "thirdBar"
        }
        
        const bar = {
            htmlTag: "div",
            tagClass:["bar", barClass],
        };

        const liderElement = {
            htmlTag: "div",
            tagClass:["liderElement" ,"colCentre"],
            children:[avatar, name, valueText, bar]
        }; 
    
        const elContainer = templateFabrica({
            htmlTag: "div",
            tagClass:["elContainer"],
            children:[liderElement]
        });
      
        const sddMethod = index%2 === 0 ? "prepend" : "append";
        elementsBox[sddMethod](elContainer);

        return null;
    });

    const boxContainer = {
        htmlTag: "div",
        tagClass:["leaderBox" ,"colCentre"],
        children:[header, elementsBox]
    };

    const mainContainer = templateFabrica({
        htmlTag: "div",
        tagClass:["colCentre"],
        children:[boxContainer]
    });
   
    return mainContainer.innerHTML;
}