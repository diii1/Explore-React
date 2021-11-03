import ListItem from "./ListItem";

const ListPassenger = (props) => {
    const {data, hapusPengunjung} = props
    return (
        <div>
            <h1>Daftar Pengunjung</h1>
            <h3>Stasiun Gubeng</h3>
            <table cellPadding="5px" cellSpacing="0" style={{margin:"auto"}}>
                <thead bgcolor="red">
                    <tr>
                        <th>Nama</th>
                        <th>Umur</th>
                        <th>Jenis Kelamin</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((passenger) => <ListItem key={passenger.id} item={passenger} hapusPengunjung={hapusPengunjung}/>)}
                </tbody>
            </table>
        </div>
    )
}

export default ListPassenger