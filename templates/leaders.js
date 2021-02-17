 const leadersTemplate = data => {
    const mainContainer = document.createElement("div");
    mainContainer.classList = "colCentre";
    const boxContainer = document.createElement("div");
    boxContainer.classList = "colCentre leaderBox";
    const header = document.createElement("header");
    mainContainer.append(boxContainer);

    const title = document.createElement("h1");
    title.textContent = data.title;
    const subtitle = document.createElement("h5");
    subtitle.textContent = data.subtitle;
    const emoji = document.createElement("h2");
    emoji.textContent = data.emoji;
    header.classList = "colCentre";
    header.append(title, subtitle, emoji);

    const elementsBox = document.createElement("div");
    elementsBox.classList = "elsBox";
    data.users.map( (user, index) => {
        const elContainer = document.createElement("div");
        elContainer.classList = "elContainer";
        const liderElement = document.createElement("div");
        liderElement.classList = "liderElement colCentre";

        const avatar = document.createElement("img");
        avatar.src = user.avatar;
        const name = document.createElement("p");
        name.textContent = user.name;
        const valueText = document.createElement("p");
        valueText.textContent = user.valueText;
        const bar = document.createElement("div");
        let barClass = '';
        if(index === 0) {
            barClass = "liderBar";
        } else if(index <3) {
            barClass = "secondBar";
        } else {
            barClass = "firdBar"
        }
        bar.classList = `${barClass} bar`;

        liderElement.append(avatar, name, valueText, bar);
        elContainer.append(liderElement);
        const sddMethod = index%2 === 0 ? "prepend" : "append";
        elementsBox[sddMethod](elContainer);

        return null;
    });

    boxContainer.append(header, elementsBox);

    return mainContainer.innerHTML;
}