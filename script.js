document.addEventListener('DOMContentLoaded', () => {
    const subjectInput = document.getElementById('subject-input');
    const dayInput = document.getElementById('day-input');
    const startTimeInput = document.getElementById('start-time-input');
    const endTimeInput = document.getElementById('end-time-input');
    const addButton = document.getElementById('add-button');
    const timetable = document.getElementById('timetable').getElementsByTagName('tbody')[0];

    addButton.addEventListener('click', addEntry);

    function addEntry() {
        const subject = subjectInput.value.trim();
        const day = dayInput.value.trim();
        const startTime = startTimeInput.value;
        const endTime = endTimeInput.value;

        if (subject && day && startTime && endTime) {
            const row = timetable.insertRow();
            const subjectCell = row.insertCell(0);
            const dayCell = row.insertCell(1);
            const startTimeCell = row.insertCell(2);
            const endTimeCell = row.insertCell(3);
            const actionsCell = row.insertCell(4);

            subjectCell.textContent = subject;
            dayCell.textContent = day;
            startTimeCell.textContent = startTime;
            endTimeCell.textContent = endTime;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.className = 'delete';
            deleteButton.addEventListener('click', () => {
                timetable.deleteRow(row.rowIndex - 1);
            });

            actionsCell.appendChild(deleteButton);

            subjectInput.value = '';
            dayInput.value = '';
            startTimeInput.value = '';
            endTimeInput.value = '';
        }
    }
});
