import React from "react";
import firebase from '../firebase'
import axios from "axios";



class UploadAudio extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            files : null,
            text: '',
            trans: ''
        }
    }

    handleChange = (files) => {
        this.setState({
            files : files
        })
    }
    handleSave =()=>{
        let bucketName = 'files'
        let file = this.state.files[0]
        let storageRef = firebase.storage().ref(`${bucketName}/${file.name}`)
        let uploadTask = storageRef.put(file)
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
            ()=>{
            let downloadURL = uploadTask.snapshot.downloadURL
                console.log(downloadURL)
            let uri = (`gs://` + storageRef.bucket + `/` + storageRef.fullPath)
                console.log(uri)
                axios.post(
                    'http://3.80.79.28:5000/transcribe', {
                        "uri": uri,
                        "type": "audio"
                    })
                    .then(res => {
                        console.log(res)
                        let trans = res.data.response
                        this.props.updateUrl(trans)
                    })
                // let trans = "husduasydfanjkfuwehfuweifnwuehfduwie"

            })
    }



    render() {
        return (
            <div>
                <input type="file" onChange={(e)=>{this.handleChange(e.target.files)}} />
                <button onClick={this.handleSave}>Upload Audio</button>

            </div>
        )
    }

}
export default UploadAudio