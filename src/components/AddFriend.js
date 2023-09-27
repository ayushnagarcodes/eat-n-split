import { useState } from "react";
import Button from "./Button";

export default function AddFriend({ updateData }) {
    const [name, setName] = useState("");
    const [url, setUrl] = useState(
        `https://i.pravatar.cc/48?u=${crypto.randomUUID()}`
    );

    function handleAddFriend(e) {
        e.preventDefault();

        if (!name || !url) return;

        const newObj = {
            name,
            image: url,
            balance: 0,
            id: crypto.randomUUID(),
        };

        updateData(newObj);

        setName("");
        setUrl(`https://i.pravatar.cc/48?u=${crypto.randomUUID()}`);
    }

    return (
        <form className="form-add-friend" onSubmit={(e) => handleAddFriend(e)}>
            <label>👭 Friend name</label>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <label>📷 Image URL</label>
            <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
            />

            <Button>Add</Button>
        </form>
    );
}
