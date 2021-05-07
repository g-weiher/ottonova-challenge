import appointments from "./appointments.js";

const dateSelect = document.getElementById("date-selection");
const timeContainer = document.getElementById("time-selection");

const createRadioButton = (name, value, text, checked = false) => {
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
const populateDates = () => {
    var options = new DocumentFragment();
    appointments.forEach((appointmentDay, index) => {
        const radioButton = createRadioButton(
            "date",
            index,
            appointmentDay.date,
            index === 0 ? true : false
        );
        options.append(radioButton);
    });
    dateSelect.append(options);
};
const populateTimes = (index) => {
    timeContainer.classList.toggle("loading");
    var options = new DocumentFragment();
    appointments[index].appointments.forEach((appointmentTime, index) => {
        const radioButton = createRadioButton(
            "time",
            appointmentTime.value,
            appointmentTime.label,
            index === 0 ? true : false
        );
        options.append(radioButton);
    });
    timeContainer.innerHTML = "";
    timeContainer.append(options);
    //use timeout to give animation a chance to render
    setTimeout(() => timeContainer.classList.toggle("loading"), 20);
};

dateSelect.addEventListener("change", (ev) => populateTimes(ev.target.value));
populateDates();
populateTimes(0);
