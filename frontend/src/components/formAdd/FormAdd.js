import React from 'react'
import { useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import { insertImage}  from '../../services/images'

const FormAdd = () =>{
    const history = useHistory()
    const token = localStorage.getItem("token")
    const {form, handleInputChange, resetState} = useForm({
        subtitle: "", 
        tag: "",
        file: "",
        collection: ""
    });

    const onClickInsert = (event) => {
        event.preventDefault()
        insertImage(form, token)
        resetState()
    };

    return (
        <div>
            <form onSubmit={onClickInsert}>
                <input
                    type="text"
                    value={form.subtitle}
                    name="subtitle"
                    onChange={handleInputChange}
                    required
                    placeholder="Descrição"
                />
                <input
                    type="text"
                    value={form.tag}
                    name="tag"
                    onChange={handleInputChange}
                    required
                    placeholder="Tags"
                />                
                <input
                    type="text"
                    value={form.collection}
                    name="collection"
                    onChange={handleInputChange}
                    required
                    placeholder="coleção"
                />
                <input
                    type="text"
                    value={form.file}
                    name="file"
                    onChange={handleInputChange}
                    required
                    placeholder="Arquivo"
                />      
                <button>Upload</button>
            </form>        
        </div>
    )    
}

export default FormAdd