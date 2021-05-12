const DAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
const toTwoDidget = (number) => {
    if (number < 10) return `0${number}`;
    return number;
};
export const formatDate = (dateSring) => {
    const date = new Date(dateSring);
    return `Your appointment is on ${
        DAYS[date.getDay()]
    }, ${date.toLocaleDateString()} - ${toTwoDidget(
        date.getHours()
    )}:${toTwoDidget(date.getMinutes())}`;
};
export const createRadioButton = (name, value, text, checked = false) => {
    // create wrapping label
    const label = document.createElement("label");
    label.className = "select-option";
    //create radio input
    const input = document.createElement("input");
    input.type = "radio";
    input.name = name;
    input.value = value;
    if (checked) input.checked = "checked";
    //create visual content
    const content = document.createElement("div");
    content.className = "select-content";
    content.innerText = text;
    //append notes
    label.append(input, content);
    return label;
};
