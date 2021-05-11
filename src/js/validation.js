const validateNotEmpty = (testInput) => {
    if (testInput.value === "") {
        testInput.classList.add("invalid");
        return false;
    } else {
        testInput.classList.remove("invalid");
        return true;
    }
};
const validateChecked = (checkboxInput) => {
    if (!checkboxInput.checked) {
        checkboxInput.classList.add("invalid");
        return false;
    } else {
        checkboxInput.classList.remove("invalid");
        return true;
    }
};
const validate = () => {
    const validationForm = document.forms["appointment-form"];
    return (
        validateNotEmpty(validationForm["gender"]) &
        validateNotEmpty(validationForm["fname"]) &
        validateNotEmpty(validationForm["lname"]) &
        validateNotEmpty(validationForm["email"]) &
        validateChecked(validationForm["permission"])
    );
};
export default validate;
