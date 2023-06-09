
import React, { useState } from 'react'
import "./Tab.css";

const Tab = () => {

    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (id) => {
      setActiveTab(id);
    };
  
    return (
      <div>
          <ul className="tabs">
              <li className={activeTab === 1 ? 'active' : ''} onClick={() => handleTabClick(1) }>Movies</li>
              <li className={activeTab === 2 ? 'active' : ''} onClick={() => handleTabClick(2) }>Tv Series</li>
          </ul>
  
          <div className="tab_content">
              { activeTab === 1 && <div className="tab_panel">Movies</div> }
              { activeTab === 2 && <div className="tab_panel">Tv Series</div> }
          </div>
      </div>
    );
}

export default Tab