import React, { useRef } from "react";
import styles from './FormBuku.module.css';
import { useState } from "react";

export default function FormPage(){
    const dataKosong = {
        judul: "",
        pengarang: "",
        cetakan: "",
        tahunTerbit: 0,
        kotaTerbit: "",
        harga: 0,

    }

    const [data, setData] = useState(dataKosong);
    const regex = /^[A-Za-z ]*$/;
    const [errMsg, setErrMsg] = useState("");
    const fotoSampul = useRef(null);
    const handleInput = e => {
        const name = e.target.name;
        const value = e.target.value;

        if(name === "pengarang"){
            if(regex.test(value)){
                setErrMsg("")
            }else{
                setErrMsg("Nama Pengarang Harus Berupa Huruf")
            }
        }

        setData({
            ...data,
            [name]: value
        })

        console.log("data", data);
    }

    const handleSubmit = () =>{
        if(errMsg !== ""){
            alert("Terdapat data yang tidak sesuai")
        }else{
            alert(`Data Buku "${data.judul}" Berhasil Diterima`)
        }
        resetData();
    }

    const resetData = () =>{
        setData(dataKosong);
        setErrMsg("");
    }

    return(
        <>
            <h1 style={{"textAlign":"center"}}>Formulir Buku Baru</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Judul:
                    <input 
                        type="text" 
                        className={styles.input} 
                        name="judul" 
                        onChange={handleInput}
                        value={data.judul}
                        required />
                </label>
                <label>
                    Pengarang:
                    <input 
                        type="text" 
                        className={styles.input} 
                        name="pengarang" 
                        onChange={handleInput}
                        value={data.pengarang}
                        required />
                </label>
                <label>
                    Cetakan:
                    <input 
                        type="text" 
                        className={styles.input} 
                        name="cetakan"
                        onChange={handleInput}
                        value={data.cetakan} />
                </label>
                <label>
                    Tahun Terbit:
                    <input 
                        type="number" 
                        className={styles.input} 
                        name="tahunTerbit" 
                        onChange={handleInput}
                        value={data.tahunTerbit} />
                </label>
                <label>
                    Kota Terbit:
                    <input 
                        type="text" 
                        className={styles.input} 
                        name="kotaTerbit"
                        onChange={handleInput}
                        value={data.kotaTerbit} />
                </label>
                <label>
                    Harga:
                    <input 
                        type="number" 
                        className={styles.input} 
                        name="harga"
                        onChange={handleInput}
                        value={data.harga} />
                </label>
                <label>
                    Foto Sampul:
                    <input 
                        type="file" 
                        className={styles.input}
                        ref={fotoSampul} />
                </label>
                <span className={styles.errorMessage}>{errMsg}</span><br />
                <input type="submit" value="Submit" />
                <button onClick={resetData}>Reset</button>
            </form>
        </>
    )
}