import React from 'react'

import {Link} from 'react-router-dom';


const ListItem = ({note}) => {


    let getTitle = (note) => {
        let title = note.body.split('\n')[0];

        if(title.lenght > 45){
            return title.slice(0, 45)
        }
        return title 
    }

    let getDate = (note) => {
        return new Date(note.updated).toLocaleDateString();
    }

    let getContent = (note) => {
        console.log("get content")
        let content =  note.body.replaceAll('\n', " ")
        content = content.replaceAll(getTitle(note), "")
        if(content.length > 70){
            return content.slice(0, 70) + '...';    
        }
        else{
            return content
        }
    }

    return (
        <div>
            <Link to={`/notes/${note.id}/`}>
            <div className="notes-list-item">
                <h3>{getTitle(note)}</h3>
                <p>
                    <span>{getDate(note)}</span>
                    <span>{getContent(note)}</span>
                </p>
            </div>
            </Link>

        </div>
    )
}

export default ListItem
