import React, { useEffect, useState } from "react";
import axios from "axios";

function CampaignHistory() {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/campaigns", {
          withCredentials: true,
        });
        setCampaigns(res.data);
      } catch (err) {
        console.error("Error fetching campaigns", err);
        setError("Failed to load campaigns.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ maxWidth: "800px", margin: "auto" }}>
      <h2>📜 Campaign History</h2>

      {loading && <p>Loading campaigns...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {campaigns.map((camp) => (
        <div
          key={camp.id}
          style={{
            border: "1px solid #ccc",
            margin: "15px 0",
            padding: "15px",
            borderRadius: "8px",
            background: "#f9f9f9",
          }}
        >
          <h4>{camp.name}</h4>
          <p>Audience Size: <strong>{camp.audienceSize}</strong></p>
          <p>Sent: <strong>{camp.sentCount}</strong> | Failed: <strong>{camp.failedCount}</strong></p>
          <p>Created: {new Date(camp.createdAt).toLocaleString()}</p>
        </div>
      ))}

      {campaigns.length === 0 && !loading && <p>No campaigns found.</p>}
    </div>
  );
}

export default CampaignHistory;
