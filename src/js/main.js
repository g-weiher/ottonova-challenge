import appointments from "./appointmentData.js";
import validate from "./validation.js";
import { formatDate, createRadioButton } from "./util";

const form = document.getElementById("appointment-form");
const dateSelect = document.getElementById("date-selection");
const timeSelect = document.getElementById("time-selection");
const loadingOverlay = document.getElementById("loading-overlay");
const dateLabel = document.getElementById("date-label");

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
const populateTimes = (index, skipAnimation = false) => {
    // toggle opacity class for fade-in effect
    if (!skipAnimation) timeSelect.classList.toggle("loading");
    const options = new DocumentFragment();
    appointments[index].appointments.forEach((appointmentTime, index) => {
        const radioButton = createRadioButton(
            "time",
            appointmentTime.value,
            appointmentTime.label,
            index === 0 ? true : false
        );
        timeSelect.innerHTML = "";
        options.append(radioButton);
    });
    timeSelect.append(options);

    if (!skipAnimation) {
        //make sure previous changes were rendered before toggling animation class
        const tryToggleLoading = () => {
            if (window.getComputedStyle(timeSelect).opacity === "1") {
                window.requestAnimationFrame(tryToggleLoading);
            } else {
                timeSelect.classList.toggle("loading");
            }
        };
        window.requestAnimationFrame(tryToggleLoading);
    }
};
const onSubmit = () => {
    console.log("click");
    form.classList.add("was-validated");
    const valid = validate();
    if (valid) {
        loadingOverlay.classList.remove("hidden");
        setTimeout(() => {
            window.location.href = "thankyou.html";
            loadingOverlay.classList.add("hidden");
        }, 1000);
    }
    return true;
};
form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    return onSubmit();
});
const onTimeSelect = (dateSring) => {
    dateLabel.innerText = formatDate(dateSring);
};

dateSelect.addEventListener("change", (ev) => {
    populateTimes(ev.target.value);
    onTimeSelect(appointments[ev.target.value].appointments[0].value);
});
timeSelect.addEventListener("change", (ev) => {
    onTimeSelect(ev.target.value);
});
populateDates();
populateTimes(0, true);
onTimeSelect(appointments[0].appointments[0].value);
