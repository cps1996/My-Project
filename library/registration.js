var title = "Registration Form";

export    function PrintTitle(){
    return `<h1>${title}</h1>`;
}
export   function login(){
    return `
    <div>
        <h1>Student Class Form</h1>
        Name
        <input type="text" ><br>
        Registration Number
        <input type="number" class="my-3"><br>
        <button class="btn btn-primary" type="submit">Submit</button>
        <button class="btn btn-danger" type="reset">Cancel</button>
        </div>`;

    
}