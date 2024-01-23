"use client";
function NewProduct() {
  const onSubmit = async (event) => {
    event.preventDefault();
    console.log("saowsjojqo");
    console.log(event.target);
    const name = event.target.name.value;
    const price = event.target.price.value;
    const description = event.target.description.value;

    const response = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, price, description }),
    });
    if (!response.ok) {
      console.log("algo ha fallado");
    }
    const data = await response.json();
    console.log(data);
  };
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Add new product</h1>
      <form className="flex flex-col">
        <label>Name:</label>
        <input
          name="name"
          id="name"
          className="border border-gray-300 rounded-md p-2 mb-4"
          placeholder="Enter product name"
          required
        />
        <label>Price:</label>
        <input
          name="price"
          id="price"
          className="border border-gray-300 rounded-md p-2 mb-4"
          placeholder="Enter product price"
          required
        />
        <label>Description:</label>
        <textarea
          name="description"
          id="description"
          className="border border-gray-300 rounded-md p-2 mb-4"
          placeholder="Enter product description"
          required
        />
        <button
          className="bg-blue-500 text-white p-2 rounded-md"
          onSubmit={(e) => {
            e.preventDefault();
            console.log("ksdadmlkmdlks");
          }}
          type="submit"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}

export default NewProduct;
