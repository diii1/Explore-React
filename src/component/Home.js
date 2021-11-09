import ListPassenger from "./ListPassenger";
import PassengerInput from "./PassengerInput";

function Home (){
    // const [data, setData] = useState(initialValue);

    // const hapusPengunjung = (id) => {
    //     setData((oldData) => oldData.filter(item => { return item.id !== id}))
    // }

    // const tambahPengunjung = (newUser) => {
    //     const newPengunjung = {id : uuidv4(), ...newUser}

    //     setData((oldData) => [...oldData, newPengunjung]);
    // }

    return (
        <div>
            <ListPassenger />
            <PassengerInput />
        </div>
    );
}

export default Home