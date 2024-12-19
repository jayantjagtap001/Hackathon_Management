import  { useState } from "react";

const CreateHackathon = ({ addHackathon }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleCreate = (e) => {
    e.preventDefault();
    const newHackathon = { title, description };
    addHackathon(newHackathon);
    alert(`Hackathon Created: ${title}`);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="container">
      <h2>Create Hackathon</h2>
      <form onSubmit={handleCreate}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateHackathon;