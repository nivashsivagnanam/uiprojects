import {motion} from "framer-motion";
import {NavLink} from "react-router-dom";
import "./Sidebar.css";
function Sidebar({open, setOpen}) {
 return (
    <motion.div
      className="sidebar"
      animate={{ width: open ? 220 : 70 }}
      transition={{ duration: 0.3 }}
    >
      {/* Toggle Button */}
      <button
        className="toggle-btn"
        onClick={() => setOpen(!open)}
      >
        {open ? "☰" : "≡"}
      </button>

      {/* Menu */}
      <div className="menu">
        <NavLink
          to="/dashboard/products"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          📦 {open && "Product Details"}
        </NavLink>

        <NavLink
          to="/dashboard/customers"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
           {open && "Customer Details"}
        </NavLink>
      </div>
    </motion.div>
  );
}
 export default Sidebar;