import React, { useEffect, useState } from 'react';
import { getAllProducts, addProduct,getAllUser,registerUser} from '../../api';
import "./dashboard.css"

const Dashboard = () => {
    const [products, setProducts] = useState([]);
    const [users, setUsers] = useState([]);
    const [newProduct, setNewProduct] = useState({ name: '', price: '' });
    const [newUser, setNewUser] = useState({ name: '', email: '', phone: '' });

    useEffect(() => {
        fetchProductDetails();
        fetchUserDetails();
    }, []);

    const fetchProductDetails = async () => {
        try {
            const response = await getAllProducts(); // Replace with your backend API endpoint
            console.log(response.data);
            if (response.data.length > 0) {
            console.log(true);
            setProducts(response.data);
            }
        } catch (error) {
            console.error('Error fetching product details:', error);
        }
    };

    const fetchUserDetails = async () => {
        try {
            const response = await getAllUser(); // Replace with your backend API endpoint
            console.log(response.data);
            if (response.data.length > 0) {
                console.log(true);
                setUsers(response.data);
            }
        } catch (error) {
            console.error('Error fetching User details:', error);
        }
    };

    const handleAddUser = async (event) => {
        event.preventDefault();
        try {
        const response = await registerUser(newUser); // Replace with your backend API endpoint
        console.log(response.data);
        if (response.data) {
            setUsers([...users, response.data]);
            setNewUser({ name: '', email: '', phone: '',password: '',password_confirmation:'' });
        }
        } catch (error) {
            console.error('Error adding user:', error);
        }
    };
  

  const handleAddProduct = async (event) => {
    event.preventDefault();
    try {
        const response = await addProduct(newProduct); // Replace with your backend API endpoint
        console.log(response.data);
        if (response.data) {
            setProducts([...products, response.data]);
            setNewProduct({ name: '', price: '' });
        }
    } catch (error) {
        console.error('Error adding product:', error);
    }
  };

  return (
    <div>
        <form onSubmit={handleAddProduct}>
        <input
            type="text"
            placeholder="Product name"
            value={newProduct.name}
            onChange={(event) => setNewProduct({ ...newProduct, name: event.target.value })}
        />
        <input
            type="number"
            placeholder="Product price"
            value={newProduct.price}
            onChange={(event) => setNewProduct({ ...newProduct, price: event.target.value })}
        />
        <button type="submit">Add Product</button>
        </form>

        <div className="table-container">
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                {products.map((product) => (
                    <tr key={product._id}>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>

        <form onSubmit={handleAddUser}>
            <input
                type="text"
                placeholder="User name"
                value={newUser.name}
                onChange={(event) => setNewUser({ ...newUser, name: event.target.value })}
            />
            <input
                type="email"
                placeholder="User email"
                value={newUser.email}
                onChange={(event) => setNewUser({ ...newUser, email: event.target.value })}
            />
            <input
                type="password"
                placeholder="User password"
                value={newUser.password}
                onChange={(event) => setNewUser({ ...newUser, password: event.target.value })}
            />
            <input
                type="password"
                placeholder="password_confirmation"
                value={newUser.password_confirmation}
                onChange={(event) => setNewUser({ ...newUser, password_confirmation: event.target.value })}
            />
            <input
                type="tel"
                placeholder="User phone"
                value={newUser.phone}
                onChange={(event) => setNewUser({ ...newUser, phone: event.target.value })}
            />
            <button type="submit">Add User</button>
        </form>
        <div className="table-container"> 
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>email</th>
                    <th>phone</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user) => (
                    <tr key={user._id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    </div>
  );
};

export default Dashboard;