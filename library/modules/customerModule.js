// THIS ENTIRE FILE IS CONSIDERED AS MODULE
//They are not acccesible to outside unless we use "export" before the function.


var title ="customer portal";

 export   function printTitle(){         // to access it outside we use this export
    return title;
}
// by using default it;whenever this file is loaded iin memrory default will load ..it is called eager loading.(load without any request)
// then default will write outside the {}

export default function login(){          // any where if there is function we have to use export.
    return `
    <div>
    <h2>Customer Login</h2>
    <input type="email"> <button>Login</button>
    </div>
    `;
 }