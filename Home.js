window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

// Template literal ES6 feature
const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
                        "<th>Salary</th><th>Start Date</th><th>Actions</th>";
    const innerHtml = `${headerHtml}`;
    let employeePayrollList = createEmployeePayrollJSON();
    for (const employeePayrollData of employeePayrollList) {
        innerHtml = `${innerHtml}
            <tr>
                <td><img class="profile" src="${employeePayrollData._profilePic}" alt=""></td>
                <td>${employeePayrollData._name}</td>
                <td>${employeePayrollData._gender}</td>
                <td>${getDeptHtml(employeePayrollData._department)}</td>
                <td>${employeePayrollData._salary}</td>
                <td>${employeePayrollData._startDate}</td>
                <td>
                    <img name="${employeePayrollData._id}" onclick="remove(this)"
                        src="./assets/icons/delete-black-18dp.svg" alt="delete">
                    <img name="${employeePayrollData._id}" onclick="update(this)"
                        src="./assets/icons/create-black-18dp.svg" alt="edit">
                </td>
            </tr>
        `;
    }
    document.querySelector('#table-display').innerHTML = innerHtml;
}
const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for (const dept of deptList) {
        deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div>`
    }
    return deptHtml;
}

const createEmployeePayrollJSON = () => {
    let employeePayrollListLocal = [
        {
            _name: 'Kruti Patil',
            _gender: 'Female',
            _department: [
                'Finance',
                'HR'
            ],
            _salary: '300000',
            _startDate: '1 Nov 2020',
            _note: '',
            _id: new Date().getTime(),
            _profilePic: './assets/profile-images/Ellipse -7.png'
        },
        {
            _name: 'Darshna Suryawanshi',
            _gender: 'Female',
            _department: [
                'Sales'
            ],
            _salary: '400000',
            _startDate: '20 Oct 2019',
            _note: '',
            _id: new Date().getTime() + 1,
            _profilePic: './assets/profile-images/Ellipse -10.png'
        }
    ];
    return employeePayrollListLocal;

    function remove(node){
        let empPayrollData = empPayrollList.find(empData=>empData._id == node.id);
        if(!empPayrollData){
            console.log("No entry found!!");
            return;
        }
        const index = empPayrollList.map(empData=>empData._id)
                                    .indexOf(empPayrollData._id);
        empPayrollList.splice(index,1);
        localStorage.setItem("EmployeePayrollList",JSON.stringify(empPayrollList));
        document.querySelector(".emp-count").textContent = empPayrollList.length;
        createInnerHTML();
    }

    function update(node){
        let empPayrollData = empPayrollList.find(empData=>empData._id == node.id);
        if(!empPayrollData){
            console.log("No entry found!!");
            return;
        }
        localStorage.setItem('editEmp', JSON.stringify(empPayrollData,'\t', 2));
        window.location.replace(site_properties.add_emp_payroll_page);
    }
}