
const ListItem = ({ item, onDelete }) => {
  return (
    <li
      key={item.id}
      className="cursor-pointer"
    >
      <span className={"title active"}>
        {item.title}
      </span>
      <span className="action">
        <i className="fa fa-minus-circle" onClick={() => onDelete(item, item.id)} />
      </span>
    </li>
  );
};
export default ListItem;
