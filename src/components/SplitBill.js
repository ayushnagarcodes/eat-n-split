import { useState } from "react";
import Button from "./Button";

export default function SplitBill({ name, closeSplitBill }) {
    const [bill, setBill] = useState("");
    const [userExpense, setUserExpense] = useState("");
    const friendExpense = Number(bill) - Number(userExpense);
    const [paying, setPaying] = useState("You");

    function handleSplit(e) {
        e.preventDefault();

        if (!bill || !userExpense) return;

        const newBalance =
            paying === "You" ? friendExpense : -Number(userExpense);
        closeSplitBill(newBalance);

        setBill("");
        setUserExpense("");
        setPaying("You");
    }

    return (
        <form className="form-split-bill">
            <h2>Split a bill with {name}</h2>

            <label>💰 Bill value</label>
            <input
                type="number"
                value={bill}
                onChange={(e) => setBill(e.target.value)}
            />

            <label>🧍‍♂️ Your expense</label>
            <input
                type="number"
                value={userExpense}
                onChange={(e) =>
                    setUserExpense(
                        Number(e.target.value) > bill
                            ? userExpense
                            : e.target.value
                    )
                }
            />

            <label>🧍‍♂️ {name}'s expense</label>
            <input type="number" value={friendExpense} disabled />

            <label>💳 Who is paying the bill?</label>
            <select value={paying} onChange={(e) => setPaying(e.target.value)}>
                <option>You</option>
                <option>{name}</option>
            </select>

            <Button onClick={(e) => handleSplit(e)}>Split bill</Button>
        </form>
    );
}
