const ListItem = ({item, hapusPengunjung}) => {
    return (
        <tr>
            <td>{item.nama}</td>
            <td>{item.umur}</td>
            <td>{item.jenisKelamin}</td>
            <td>
                <button onClick={()=>{hapusPengunjung(item.id)}}>Hapus</button>
            </td>
        </tr>
    );
}

export default ListItem