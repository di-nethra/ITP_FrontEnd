import React from 'react';



function InventoryRegister(){
 return (
     <div>
         <form>
             <input name = "name" type="text" placeholder = "Enter name" /><br/>
             <input name = "supplier" type="text" placeholder = "Enter Supplier Name" required/><br/>
             <input name = "supplierEmail" type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" placeholder = "Enter Supplier Email" required/><br/>
             <input name = "supplierContact" type="text" pattern="[0-9]{10}" required/> <br />
             <input name = "price" type="text" placeholder = "Enter purchase price" /><br/>
             <input name = "date" type = "text" value={new Date().getDate()+"-"+(new Date().getMonth()+1)+"-"+new Date().getFullYear()} /><br/>
             <select name="type" id="drugType">
                <option value="liquid">Liquid</option>
                <option value="tablet">Tablet</option>
                <option value="capsules">Capsules</option>
                <option value="inhalers">Inhaler</option>
                <option value="injections">Injection</option>
                <option value="other">Other</option>
            </select><br />

            <button >Register</button><br />
            <button>Demo</button>
         </form>
     </div>
 );
}

export default InventoryRegister