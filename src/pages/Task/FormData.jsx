import React, { useRef } from "react";
import styles from './FormData.module.css';
import { useState } from "react";

export default function FormData(){
    const baseData = {
        namaLengkap: "",
        email: "",
        noHandphone: 0,
        pendidikan: "",
        kelas: "",
        harapan: ""
    }

    const suratKesungguhan = useRef(null);
    const [data, setData] = useState(baseData);
    const [errMsgNama, setErrMsgNama] = useState("");
    const [errMsgEmail, setErrMsgEmail] = useState("");
    // const [errMsgPhone, setErrMsgPhone] = useState("");
    const regexName = /^[A-Za-z ]*$/;
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const handleInput = e => {
        const name = e.target.name;
        const value = e.target.value;

        if(name === "namaLengkap"){
            if(regexName.test(value)){
                setErrMsgNama("")
            }else{
                setErrMsgNama("- Nama Lengkap Harus Berupa Huruf")
            }
        }

        if(name === "email"){
            if(regexEmail.test(value)){
                setErrMsgEmail("")
            }else{
                setErrMsgEmail("- Email Tidak Sesuai")
            }
        }

        setData({
            ...data,
            [name]: value
        })
    }

    const handleSubmit = () =>{
        if(errMsgNama !== ""){
            alert("Data Pendaftar Tidak Sesuai!")
        }else{
            alert(`Data Pendaftar "${data.namaLengkap}" Berhasil Diterima`)
        }
        resetData();
    }

    const resetData = () =>{
        setData(baseData);
        setErrMsgNama("");
    }

    return (
        <>
            <div className="conatiner">
                <h1 className="text-center mt-5 mb-5">Pendaftaran Peserta Coding Bootcamp</h1>
                <form onSubmit={handleSubmit}>
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-7">
                            <div className="mb-3 mt-3">
                                <label 
                                    for="namaLengkap" 
                                    className="form-label">Nama Lengkap:
                                </label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    name="namaLengkap"
                                    onChange={handleInput} required />
                            </div>
                            <div className="mb-3">
                                <label 
                                    for="email" 
                                    className="form-label">Email:
                                </label>
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    name="email"
                                    onChange={handleInput} required />
                            </div>
                            <div className="mb-3">
                                <label 
                                    for="noHandphone" 
                                    className="form-label">No Handphone:
                                </label>
                                <input 
                                    type="number" 
                                    className="form-control"
                                    name="noHandphone"
                                    min="9"
                                    max="14"
                                    onChange={handleInput} required />
                            </div>
                            <div className="mb-3">
                                <label 
                                    className="form-label"
                                    for="latarPendidikan">Latar Belakang Pendidikan:
                                </label>
                                <div className="form-check">
                                    <input 
                                        type="radio" 
                                        className="form-check-input" 
                                        id="it" 
                                        name="pendidikan" />
                                    <label 
                                        className="form-check-label" 
                                        for="it">IT
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input 
                                        type="radio" 
                                        className="form-check-input" 
                                        id="nonit" 
                                        name="pendidikan" />
                                    <label 
                                        className="form-check-label" 
                                        for="nonit">Non IT
                                    </label>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label 
                                    className="form-label"
                                    for="Program">Kelas Coding yang Dipilih:</label>
                                <select class="form-select" name="kelas">
                                    <option selected>Pilih Salah Satu Program</option>
                                    <option value="Coding Backend with Golang">Coding Backend with Golang</option>
                                    <option value="Coding Frontend with ReactJS">Coding Frontend with ReactJS</option>
                                    <option value="Fullstack Developer">Fullstack Developer</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label 
                                    for="surat" 
                                    className="form-label">Foto Surat Kesungguhan:
                                </label>
                                <input 
                                    className="form-control ms-3" 
                                    id={styles.inputSurat}
                                    type="file"
                                    ref={suratKesungguhan} />
                            </div>
                            <div class="mb-3">
                                <label 
                                    for="harapan" 
                                    className="form-label">Harapan Untuk Coding Bootcamp Ini:
                                </label>
                                <textarea 
                                    className="form-control" 
                                    id="harapan" name="harapan" rows="5"></textarea>
                            </div>
                            <span className="mb-3 text-danger">{errMsgNama}</span><br />
                            <span className="mb-3 text-danger">{errMsgEmail}</span><br />
                            {/* <span className="mb-3 text-danger">{errMsgPhone}</span><br /> */}
                            <input 
                                type="submit" 
                                className="btn btn-success px-5 mt-2"
                                value="Submit" />
                            <button className="btn btn-danger px-5 ms-3" onClick={resetData}>Reset</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}