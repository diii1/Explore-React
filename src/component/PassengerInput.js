import { useState } from "react"

function PassengerInput(props){
    const [data, setData] = useState({
        nama:"",
        umur:"",
        jenisKelamin: "Pria"
    })
    const [editing, setEditing] = useState(true)

    const onChange = e => {
        setData({...data,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(data.nama.trim() && data.umur && data.jenisKelamin){
            const umur = data.umur
            if(umur >= 75 || umur <= 12){
                alert("Umur tidak sesuai!");
            }else{
                const newData ={
                    nama: data.nama,
                    umur: data.umur,
                    jenisKelamin: data.jenisKelamin
                }
                props.tambahPengunjung(newData);
                setData({
                    nama:"",
                    umur:"",
                    jenisKelamin: "Pria"
                })
            }
        }else{
            alert("Data Masih Ada Yang Kosong");
        }
    }

    const handleBukaInput = () => {
        setEditing(false)
    }

    const handleTutuInput = () => {
        setEditing(true)
    }

    const viewMode = {};
    const editMode = {};

    if(editing){
        viewMode.display = 'none';
    }else{
        editMode.display = 'none';
    }

    return (
        <div>
            <div onSubmit={() => {}} style={viewMode}>
                <p>Masukkan Nama Anda :</p>
                <input type="text" placeholder="Nama anda..." value={data.nama} name="nama" onChange={onChange}/>
                <p>Masukkan Umur Anda :</p>
                <input type="text" placeholder="Umur anda..." value={data.umur} name="umur" onChange={onChange}/>
                <p>Masukkan Jenis Kelamin Anda :</p>
                <select name="jenisKelamin">
                    <option value={data.jenisKelamin}>Pria</option>
                    <option value={data.jenisKelamin}>Wanita</option>
                </select>
                <button onClick={handleSubmit}>Submit</button>
                <button onClick={handleTutuInput}>Back</button>
            </div>
            <button onClick={handleBukaInput} style={editMode}>Masukkan nama Penumpang</button>
        </div>
    )
}

export default PassengerInput