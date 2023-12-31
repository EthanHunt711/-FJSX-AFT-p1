//get the input elemets
const timePoint = document.querySelector('#date');
const priorityNumber = document.querySelector('#priority');
const agendaSubject = document.querySelector('#toDo');
const addBtn = document.querySelector('#formBtn');
const agendaList = document.querySelector('.agendaList')


//function to add to the ordered list
function addToDoList(){
    
    //array for saving the inputs as sorted
    // var toDoListElemets = new Map();
    //make an 
    let entryTime;
    let entryText;
    let entryPriority;
    timePoint.addEventListener('input', event =>{
        entryTime = timePoint.value;
    });
    priorityNumber.addEventListener('input', event =>{
        entryPriority = priorityNumber.value;
        
    });
    agendaSubject.addEventListener('input', event => {
        entryText = agendaSubject.value;
    });

    addBtn.addEventListener('click', event => {
        
        //table 
        const tableRowData = document.createElement('tr');
        // table data 1
        const tableRowDataElement1 = document.createElement('td');
        tableRowDataElement1.id = 'tableRowDataElement1';
        tableRowDataElement1.textContent = `${entryTime}`;
        tableRowData.appendChild(tableRowDataElement1);
        // table data 2
        const tableRowDataElement2 = document.createElement('td');
        tableRowDataElement1.id = 'tableRowDataElement2';
        tableRowDataElement2.textContent = `${entryText}`
        tableRowData.appendChild(tableRowDataElement2);
        // table data 3
        const tableRowDataElement3 = document.createElement('td');
        tableRowDataElement1.id = 'tableRowDataElement3';
        tableRowDataElement3.textContent = `${entryPriority}`
        tableRowData.appendChild(tableRowDataElement3);
        
        agendaList.appendChild(tableRowData); 

        timePoint.value = "";
        agendaSubject.value = " ";
    });

    
};

addToDoList();