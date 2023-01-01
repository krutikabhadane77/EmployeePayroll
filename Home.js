window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

// Template literal ES6 feature
const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
                        "<th>Salary</th><th>Start Date</th><th>Actions</th>";
    const innerHtml = `${headerHtml}
        
        <tr>
            <td><img class="profile" src="./Assets/profile-images/Ellipse -7.png" alt=""></td>
            <td>Kruti Patil</td>
            <td>Female</td>
            <td><div class='dept-label'>Finance</div><div class='dept-label'>HR</div></td>
            <td>300000</td>
            <td>1 Nov 2020</td>
            <td>
                <img name="1" onclick="remove(this)" src="../assets/icons/delete-black-18dp.svg" alt="delete">
                <img name="1" onclick="update(this)" src="../assets/icons/create-black-18dp.svg" alt="edit">
            </td>
        </tr>
    `;
    document.querySelector('#table-display').innerHTML = innerHtml;
}