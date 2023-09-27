import FriendItem from "./FriendItem";

export default function FriendList({ data, openSplitBill, selectedId }) {
    return (
        <ul>
            {data.map((obj) => (
                <FriendItem
                    obj={obj}
                    openSplitBill={openSplitBill}
                    selectedId={selectedId}
                    key={obj.id}
                />
            ))}
        </ul>
    );
}
