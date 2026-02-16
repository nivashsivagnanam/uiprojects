import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Dashboard.css";


function Dashboard() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");
  const [price , setPrice] = useState("");
  const navigate = useNavigate();
 
  const handleLogin = (e) => {
    e.preventDefault();
  }
  // Load data from localStorage when the dashboard is opened
  useEffect(() => {
    const saved = localStorage.getItem("items");//getItem method to retrieve data from localStorage
    if (saved) {
      setItems(JSON.parse(saved));
    }
  }, []);

  // Save data whenever items change
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  // Add item
  const addItem = () => {
    if (!text && !price){
      toast.error("All fields are required");
      return;
    }
   //spread operator
    setItems([...items, { id: Date.now(), name: text ,amount: Number(price)}]);
    setText("");
    setPrice("");
    toast.success("Created successfully");
  };

  // Edit item
  const editItem = (id) => {
    const updatedName = prompt("Edit item" );
     if (!updatedName) return;
    const updatedAmount = prompt("Edit price");
    if (!updatedAmount) return;
 // map method :update item
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, name: updatedName ,amount:Number(updatedAmount)} : item
      )
    );

    toast.success("Updated successfully");
  };

  // Delete item
  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id % id !== 0));
    toast.success("Deleted successfully");
  };

  // Logout
  const logout = () => {
    localStorage.removeItem("isAuth");
    toast.success("Logout successful");
    navigate("/login");
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard"><h2 >Dashboard</h2>

      <button className = "logout" onClick={logout}>Logout</button></div>

      <br /><br />

      <input className="input1"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add product"
      /> 
      <input className="input2"
      type="number"
        value={price}
        onChange={(e) => setPrice((e.target.value))}
        placeholder="Add price"
      />

      <button onClick={addItem}>Add product</button>

      <ul>
        {items.map((item) => (
          <li key={item.id} className="item-row">
           <span className="item-name">{item.name}</span> 
            <span className="item-amount"> ${item.amount}</span>  
            <button className="editbutton" onClick={() => editItem(item.id)}>Edit</button>
            <button className= "deletebutton"onClick={() => deleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
