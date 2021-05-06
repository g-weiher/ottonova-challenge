import data from "./dates.json";


const parseAppointments = (appointments) => {
    const outputData = [];
    appointments.forEach((appointment) => {
        const currentDate = new Date(appointment.start);
        if(!currentDate) return;
        const currentDateString = currentDate.toLocaleDateString()
        const currentTimeString = currentDate.toLocaleTimeString([], {timeStyle: 'short'})
        const lastDateEntry = outputData[outputData.length - 1];
        if (
            lastDateEntry &&
            lastDateEntry.date === currentDateString
        ) {
            lastDateEntry.appointments.push({
                label: currentTimeString,
                value: appointment.start,
            });
        } else {
            outputData.push({
                date: currentDateString,
                appointments: [
                    {
                        label: currentTimeString,
                        value: appointment.start,
                    },
                ],
            });
        }
    });
    return outputData;
};
const appointments =  parseAppointments(data.result);
export default appointments;
