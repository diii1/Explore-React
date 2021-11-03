import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import ListPassenger from "./ListPassenger";
import PassengerInput from "./PassengerInput";

class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            data : [
                {
                    id: uuidv4(),
                    nama: 'Yoga',
                    umur: 22,
                    jenisKelamin: 'Pria'
                },
                {
                    id: uuidv4(),
                    nama: 'Ria',
                    umur: 19,
                    jenisKelamin: 'Wanita'
                },
                {
                    id: uuidv4(),
                    nama: 'Fahmi',
                    umur: 25,
                    jenisKelamin: 'Pria'
                },
                {
                    id: uuidv4(),
                    nama: 'Lala',
                    umur: 21,
                    jenisKelamin: 'Wanita'
                },
                {
                    id: uuidv4(),
                    nama: 'Ivan',
                    umur: 25,
                    jenisKelamin: 'Pria'
                }
            ]
        }
    }

    hapusPengunjung = (id) => {
        const newListPengunjung = this.state.data.filter((item) => item.id !== id)

        this.setState({data : newListPengunjung})
    }

    tambahPengunjung = (newUser) => {
        const newPengunjung = {id : uuidv4(), ...newUser}

        this.setState({data: [...this.state.data, newPengunjung]})
    }

    render(){
        return (
            <div>
                <ListPassenger data={this.state.data} hapusPengunjung={this.hapusPengunjung}/>
                <PassengerInput tambahPengunjung={this.tambahPengunjung}/>
            </div>
        );
    }
}

export default Home