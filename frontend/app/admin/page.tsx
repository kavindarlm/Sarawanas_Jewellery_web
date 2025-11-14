"use client";
import { useState, useEffect } from "react";
import axios from "axios";

export default function AdminPanel() {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({ name: "", category: "", description: "" });
  const [image, setImage] = useState<File | null>(null);

  const loadProducts = () => {
    axios.get("http://localhost:3001/api/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", formData.name);
    data.append("category", formData.category);
    data.append("description", formData.description);
    if (image) data.append("image", image);

    try {
      await axios.post("http://localhost:3001/api/products", data, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      loadProducts();
      setFormData({ name: "", category: "", description: "" });
      setImage(null);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Admin Panel</h1>
      
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow mb-8">
        <input
          type="text"
          placeholder="Product Name"
          className="w-full p-2 border mb-4"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
        />
        <input
          type="text"
          placeholder="Category"
          className="w-full p-2 border mb-4"
          value={formData.category}
          onChange={(e) => setFormData({...formData, category: e.target.value})}
        />
        <textarea
          placeholder="Description"
          className="w-full p-2 border mb-4"
          value={formData.description}
          onChange={(e) => setFormData({...formData, description: e.target.value})}
        />
        <input
          type="file"
          className="mb-4"
          onChange={(e) => setImage(e.target.files?.[0] || null)}
        />
        <button type="submit" className="bg-primary text-white px-6 py-2 rounded">
          Add Product
        </button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product: any) => (
          <div key={product.id} className="border p-4 rounded">
            {product.imageUrl && <img src={`http://localhost:3001${product.imageUrl}`} alt={product.name} />}
            <h3 className="font-bold">{product.name}</h3>
            <p>{product.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
