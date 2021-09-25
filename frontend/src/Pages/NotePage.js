import React, {useState, useEffect} from 'react'

import {Link} from 'react-router-dom';

import { ReactComponent as ArrowLeft } from '../assets/chevron-left.svg';


const NotePage = ({match, history}) => {

    let noteId = match.params.id;   
    let [note, setNote] = useState(null);

    useEffect(() => {
        getNote();
    }, [noteId])
    
    let getNote = async () => {
        if(noteId === "new") return
        let response  = await fetch(`/api/notes/${noteId}`);
        let data = await response.json();
        setNote(data);
    }

    let updateNote = async() => {
        await fetch(`/api/notes/${noteId}/update/`, {
            method: "PUT",
            headers: {
                "Content-Type" : "application/json",
            },
            body : JSON.stringify(note)
        })
    }

    let createNote = async() => {
        await fetch(`/api/notes/create/`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body : JSON.stringify(note)
        })
    }

    let deleteNote = async() => {
        await fetch(`/api/notes/${noteId}/delete/`, {
            method: "DELETE",
            headers: {
                "Content-Type" : "application/json"
            },
        })
        history.push('/')
    }

    let handleSubmit = () => {
        console.log("NOTE:", note)
        if(noteId !== "new" && note.body === ''){
            console.log("note deleted")
            deleteNote();
        }
        else if(noteId !== "new"){
            console.log("note updated")
            updateNote();
        }
        else if(noteId === "new" && note.body !== null){
            console.log("note created")
            createNote();
        }

        history.push('/');
    }

    let handleChange = async(value) => {
        setNote(note => ({...note, body: value}))
        // console.log("Handle Change Triggred.", note);
    }

    

    return (
        <div className="note">

            <div className="note-header">
                <div className="back-note-icon">
                    <Link to="/">
                        <ArrowLeft onClick={handleSubmit}/>
                    </Link>
                </div>

                <div className="note-title">{note?.body.split('\n')[0]}</div>

                    { noteId !== "new" ? (
                        <button onClick={deleteNote}>DELETE</button>
                    ) : (
                        <button onClick={handleSubmit}>DONE</button>
                    )}
            </div>
            <textarea onChange={(e) => { handleChange(e.target.value)} } value={note?.body}></textarea>
        </div>
    )
}

export default NotePage
