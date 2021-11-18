
import './App.css';
import React, {Component, useState} from "react";
import './App.css'
import 'antd/dist/antd.css'
import './index.css'
import {PageHeader, Upload} from "antd";
import AnalyzerForm from "./component/AnalyzerForm";
// import { storage } from "./firebase";
// import {getDownloadURL, ref, uploadBytesResumable} from "@firebase/storage";
// import axios from "axios";
// import firebase from "firebase/compat";
import UploadAudio from "./component/uploadAudio";
import UploadVideo from "./component/UploadBox";

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            trans: ''
        }
    }

    updateUrl =(trans)=>{
        this.setState({trans})
    }


    // const [progress, setProgress ] = useState(0);
    // const formHandler = (e) => {
    //     e.preventDefault();
    //     const file = e.target[0].files[0];
    //     console.log(file);
    //     uploadFiles(file);
    //     // axios.post(
    //     //     'http://54.90.134.44:5000/transcribe', {}
    //     //         .then(res => {
    //     //             console.log(res)
    //     //         })
    //     // )
    // };
    //
    // const uploadFiles = (file) => {
    //     if (!file) return;
    //     const storageRef = ref(storage, `files/${file.name}`);
    //     let url = (`gs://` + storageRef.bucket + `/` + storageRef.fullPath)
    //     console.log(url)
    //     const uploadTask = uploadBytesResumable(storageRef, file);
    //
    //     uploadTask.on(
    //         "state_changed",
    //         (snapshot) => {
    //         const prog = Math.round(
    //             (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    //         );
    //         setProgress(prog);
    //     },
    //         (err) => console.log(err),
    //         () => {
    //             getDownloadURL(uploadTask.snapshot.ref).then((url) => console.log(url));
    //             //拼接gs字符串
    //             console.log(`gs://` + storageRef.bucket + `/` + storageRef.fullPath)
    //             console.log(url)
    //         }
    //     );
    //
    // };

  render() {
      return(
          <div className="App">
              <div>
                  <div className="App-header">
                      <PageHeader>
                          <div className="Header-Name">
                              Content Analyzer
                          </div>
                      </PageHeader>
                  </div>
                  <AnalyzerForm
                      trans={this.state.trans}
                  />
                  <UploadAudio
                    updateUrl={this.updateUrl}
                  />
                  <UploadVideo
                      updateUrl={this.updateUrl}
                  />


                  {/*<div className="upload">*/}
                  {/*    <form onSubmit={formHandler}>*/}
                  {/*        <input type="file" className="input"/>*/}
                  {/*        <button type="submit">Upload Video</button>*/}
                  {/*    </form>*/}
                  {/*    <div>Upload {progress} %</div>*/}

                  {/*</div>*/}
              </div>

          </div>
          )
  }


}

export default App;
