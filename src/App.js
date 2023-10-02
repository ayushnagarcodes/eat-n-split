import FriendList from "./components/FriendList";
import AddFriend from "./components/AddFriend";
import SplitBill from "./components/SplitBill";
import Button from "./components/Button";
import { useState } from "react";

const initialData = [
    {
        id: "11231",
        name: "Clark",
        image: "https://i.pravatar.cc/48?u=118836",
        balance: -7,
    },
    {
        id: "34561",
        name: "Sarah",
        image: "https://i.pravatar.cc/48?u=933372",
        balance: 20,
    },
    {
        id: "76831",
        name: "Anthony",
        image: "https://i.pravatar.cc/48?u=499476",
        balance: 0,
    },
];

export default function App() {
    const [data, setData] = useState([...initialData]);
    const [isAddFormOpen, setIsAddFormOpen] = useState(false);
    const [selectedId, setSelectedId] = useState(null);

    function updateData(newObj) {
        setData([...data, newObj]);
        setIsAddFormOpen(false);
    }

    function openAddFriend() {
        setIsAddFormOpen((isAddFormOpen) => !isAddFormOpen);
        setSelectedId(null);
    }

    function openSplitBill(id) {
        selectedId && id === selectedId
            ? setSelectedId(null)
            : setSelectedId(id);
        setIsAddFormOpen(false);
    }

    function closeSplitBill(newBalance) {
        setData((data) =>
            data.map((obj) =>
                obj.id === selectedId
                    ? { ...obj, balance: obj.balance + newBalance }
                    : obj
            )
        );
        setSelectedId(null);
    }

    return (
        <section className="app">
            <div className="sidebar">
                <FriendList
                    data={data}
                    openSplitBill={openSplitBill}
                    selectedId={selectedId}
                />

                {isAddFormOpen && <AddFriend updateData={updateData} />}

                <Button onClick={openAddFriend}>
                    {isAddFormOpen ? "Close" : "Add Friend"}
                </Button>
            </div>

            {selectedId && (
                <SplitBill
                    name={data.filter((obj) => obj.id === selectedId)[0]?.name}
                    closeSplitBill={closeSplitBill}
                    key={selectedId}
                />
            )}
        </section>
    );
}
