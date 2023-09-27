import Button from "./Button";

export default function FriendItem({ obj, openSplitBill, selectedId }) {
    return (
        <li className={selectedId === obj.id ? "selected" : ""}>
            <img src={obj.image} alt="profile" />

            <h3>{obj.name}</h3>

            {obj.balance === 0 ? (
                <p>{`You and ${obj.name} are even`}</p>
            ) : obj.balance > 0 ? (
                <p className="green">{`${obj.name} owes you ${obj.balance}€`}</p>
            ) : (
                <p className="red">{`You owe ${obj.name} ${Math.abs(
                    obj.balance
                )}€`}</p>
            )}

            <Button onClick={() => openSplitBill(obj.id)}>
                {selectedId === obj.id ? "Close" : "Select"}
            </Button>
        </li>
    );
}
