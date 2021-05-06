import appointments from "./appointments.js";

const dateSelect = document.getElementById("date");
const timeContainer = document.getElementById("time");

const populateDates = () => {
    var options = new DocumentFragment();
    appointments.forEach((appointmentDay, index) => {
        const option = document.createElement("option");
        option.value = index;
        option.innerText = appointmentDay.date;
        options.append(option);
    });
    dateSelect.append(options);
};

const populateTimes = (index) => {
    var options = new DocumentFragment();
    appointments[index].appointments.forEach(appointmentTime => {
        const label = document.createElement("label");
        label.innerText = appointmentTime.label
        const option = document.createElement("input");
        option.type="radio";
        option.name="time";
        option.value=appointmentTime.value;
        label.append(option);
        options.append(label);
    });
    timeContainer.innerHTML = '';
    timeContainer.append(options);
};

dateSelect.addEventListener("change",ev => populateTimes(ev.target.value));
populateDates();