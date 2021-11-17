import "./Home.css";
const ListItem = (props) => {
  const { id, nama, umur, jeniskelamin } = props.data;

  return (
    <tr>
      <td>{nama}</td>
      <td>{umur}</td>
      <td>{jeniskelamin}</td>
      <td className='removeBorder' onClick={() => props.hapusPengunjung(id)}>
        <button>Hapus</button>
      </td>
    </tr>
  );
};

export default ListItem;
