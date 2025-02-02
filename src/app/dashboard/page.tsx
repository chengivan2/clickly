'use client';

import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './globaldashboard.css';

const Dashboard = () => {
  const [urls, setUrls] = useState([
    { id: 1, shortCode: 'abc123', originalUrl: 'https://example.com/long-url', clicks: 42 },
    { id: 2, shortCode: 'xyz456', originalUrl: 'https://another-example.com/long-url', clicks: 15 },
  ]);

  const handleAddUrl = () => {
    toast.info('Add URL functionality coming soon!');
  };

  return (
    <div className="dashboard">
      {/* URL List */}
      <div className="bento-card url-list">
        <h2>Your URLs</h2>
        {urls.map((url) => (
          <div key={url.id} className="url-item">
            <a href={`/${url.shortCode}`} target="_blank" rel="noopener noreferrer">
              {url.shortCode}
            </a>
            <span>{url.clicks} clicks</span>
          </div>
        ))}
      </div>

      {/* Analytics */}
      <div className="bento-card analytics">
        <div className="analytics-item">
          <h3>Total Clicks</h3>
          <p>57</p>
        </div>
        <div className="analytics-item">
          <h3>Active URLs</h3>
          <p>{urls.length}</p>
        </div>
      </div>

      {/* Add URL Button */}
      <button className="add-url-button" onClick={handleAddUrl}>
        +
      </button>
    </div>
  );
};

export default Dashboard;