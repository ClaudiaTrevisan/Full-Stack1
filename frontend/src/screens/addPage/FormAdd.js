import React from 'react'

const FormAdd = () =>{
    const history = useHistory()
    const {form, handleInputChange, resetState} = useForm({
        subtitle: "", 
        file: "",
        tags: "",
        collection: ""
    })

    const onClickLogin = (event) => {
        event.preventDefault()
        login(form, history)
        resetState()
    }

    return (
        <div>
            <form onSubmit={onClickLogin}>
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
                    value={form.tags}
                    name="tags"
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