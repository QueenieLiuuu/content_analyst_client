
import './App.css';
import React from "react";
import './App.css'
import 'antd/dist/antd.css'
import './index.css'
import {PageHeader} from "antd";
import AnalyzerForm from "./component/AnalyzerForm";






function App() {
  return (
    <div className="App">
      <div>
          <div className="App-header">
              <PageHeader>
                  <div className="Header-Name">
                      Content Analyzer
                  </div>
              </PageHeader>
          </div>
          <AnalyzerForm/>
      </div>

    </div>
  );

}

export default App;
