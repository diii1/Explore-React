import ListItem from "./ListItem";
import { useSelector, useDispatch } from "react-redux";
import { hapusPengunjung } from "../store/passengerSlice";

const ListPassenger = () => {
    const passengers = useSelector((state) => state.passenger.passengers)
    const dispatch = useDispatch()
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
                    {passengers.map((passenger) => <ListItem key={passenger.id} item={passenger} hapusPengunjung={() => dispatch(hapusPengunjung(passenger.id))}/>)}
                </tbody>
            </table>
        </div>
    )
}

export default ListPassenger;