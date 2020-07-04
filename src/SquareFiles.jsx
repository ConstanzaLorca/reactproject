import React from 'react'
import withFileUpload from './withFileUpload'

const SquareFiles = (props) =>(
    <div>
        <form>
            <input type = 'file' onChange = {props.addFile}/>
        </form>
        { props.files.map((file, index ) => (
            <div className = "image" key = {index}>
            <img
            src={file} />
        </div>
        ))}
    </div>

)

export default withFileUpload(SquareFiles)