import React, { useRef } from "react";
import styles from './FormData.module.css';
import { useState } from "react";

export default function FormData(){
    const baseData = {
        namaLengkap: "",
        email: "",
        noHandphone: "",
        pendidikan: "",
        kelas: "",
        harapan: ""
    }

    const baseErrors = {
        namaLengkap: "",
        email: "",
        noHandphone: "",
        pendidikan: "",
        kelas: "",
    };

    const suratKesungguhan = useRef(null);
    const [data, setData] = useState(baseData);
    const [errMsg, setErrMsg] = useState(baseErrors);
    const regexName = /^[A-Za-z ]*$/;
    const regexNumbers = /^[-+]?[0-9]+$/;

    const setErrors = (name, message) => {
        setErrMsg((prev) => ({ ...prev, [name]: message }));
    }

    const handleInput = e => {
        const name = e.target.name;
        const value = e.target.value;

        if(name === "namaLengkap"){
            if(regexName.test(value)){
                setErrors(name, "")
            }else{
                setErrors(name, "- Nama Lengkap Harus Berupa Huruf!")
            }
        }

        if(name === "email"){
            if (value.length > 0 && !value.includes("@")) {
                setErrors(name, "- Email tidak sesuai - @!");
            } else if (value.length > 0 && !value.includes(".")) {
                setErrors(name, "- Email tidak sesuai - domain!");
            } else {
                setErrors(name, "");
            }
        }

        if (name === "noHandphone") {
            if (value.length > 0 && !regexNumbers.test(value)) {
                setErrors(name, "- No Handphone Tidak Sesuai (hanya angka)!");
            } else if (value.length < 9 || value.length > 14) {
                setErrors(name, "- No Handphone Tidak Sesuai (wajib 9-14 character length)!");
            } else {
                setErrors(name, "");
            }
        }

        if (name === "pendidikan") {
            setErrors(name, "");
        }

        setData({
            ...data,
            [name]: value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        let valid = true;

        if(!regexName.test(data.namaLengkap)){
            setErrors("namaLengkap", "Nama Lengkap Harus Berupa Huruf!");
            valid = false;
        }else if (data.namaLengkap.trim().length === 0) {
            setErrors("namaLengkap", "Nama tidak boleh kosong!");
            valid = false;
        }

        if (!data.email.includes("@")) {
            setErrors("email", "Email tidak sesuai - @!");
            valid = false;
        } else if (!data.email.includes(".")) {
            setErrors("email", "Email tidak sesuai - domain!");
            valid = false;
        }
        console.log(data.noHandphone);
        console.log(data.noHandphone.trim().length === 0);

        if (data.noHandphone.trim().length === 0) {
            console.log("atas");
            setErrors("noHandphone", "No. HP tidak boleh kosong!");
            valid = false;
        } else if (
            data.noHandphone.length > 0 &&
            !regexNumbers.test(data.noHandphone)
        ){
            setErrors("noHandphone", "No Handphone Tidak Sesuai (hanya angka)!");
            valid = false;
        } else if (data.noHandphone.length < 9 || data.noHandphone.length > 14) {
            setErrors(
                "noHanphone",
                "No Handphone Tidak Sesuai (wajib 9-14 character length)!"
            );
            valid = false;
        }

        if (data.pendidikan === "") {
            setErrors("pendidikan", "Tolong pilih salah satu!");
            valid = false;
        }

        if (valid) {
            const keys = Object.keys(errMsg);
            valid = valid && keys.every((key) => errMsg[key] === "");
            if (valid) {
                alert(`Data pendaftar ${data.namaLengkap} Berhasil diterima!`);
            } else {
                alert("Data pendaftar tidak sesuai!");
            }
        } else {
            alert("Data pendaftar tidak sesuai!");
        }
    }

    const resetData = () =>{
        setData(baseData);
        setErrors(baseErrors);
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
                                    onChange={handleInput}
                                    value={data.namaLengkap}
                                    minLength="3"
                                    maxLength="100" required />
                                <span className="mb-3 text-danger">{errMsg.namaLengkap}</span> 
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
                                    onChange={handleInput}
                                    value={data.email} required />
                                <span className="mb-3 text-danger">{errMsg.email}</span> 
                            </div>
                            <div className="mb-3">
                                <label 
                                    for="noHandphone" 
                                    className="form-label">No Handphone:
                                </label>
                                <input 
                                    type="text" 
                                    className="form-control"
                                    name="noHandphone"
                                    onChange={handleInput}
                                    value={data.noHandphone} required />
                                <span className="mb-3 text-danger">{errMsg.noHandphone}</span> 
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
                                        name="pendidikan"
                                        value="IT"
                                        onChange={handleInput}
                                        checked={data.pendidikan === "NonIT" ? true : false} />
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
                                        name="pendidikan"
                                        value="NonIT"
                                        onChange={handleInput}
                                        checked={data.pendidikan === "NonIT" ? true : false} />
                                    <label 
                                        className="form-check-label" 
                                        for="nonit">Non IT
                                    </label>
                                    <span className="mb-3 text-danger">{errMsg.pendidikan}</span> 
                                </div>
                            </div>
                            <div className="mb-3">
                                <label 
                                    className="form-label"
                                    for="Program">Kelas Coding yang Dipilih:</label>
                                <select class="form-select" name="kelas" value={data.kelas} onChange={handleInput}>
                                    <option value="0">Pilih Salah Satu Program</option>
                                    <option value="1">Coding Backend with Golang</option>
                                    <option value="2">Coding Frontend with ReactJS</option>
                                    <option value="3">Fullstack Developer</option>
                                </select>
                                <span className="mb-3 text-danger">{errMsg.kelas}</span> 
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
                                    id="harapan" 
                                    name="harapan" 
                                    rows="5"
                                    onChange={handleInput}
                                    value={data.harapan}></textarea>
                            </div>
                            <input 
                                type="submit" 
                                className="btn btn-success px-5 mt-2"
                                value="Submit"
                                onClick={handleSubmit} />
                            <button className="btn btn-danger px-5 ms-3" onClick={resetData}>Reset</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}