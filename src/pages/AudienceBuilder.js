import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

function AudienceBuilder() {
  // eslint-disable-next-line no-unused-vars
  const { user } = useContext(AuthContext);

  const [campaignName, setCampaignName] = useState("");
  const [totalSpent, setTotalSpent] = useState("");
  const [visitCount, setVisitCount] = useState("");
  const [audience, setAudience] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const generateMessage = (customer) => {
    return `Hi ${customer.name}, enjoy 20% off on your next visit!`;
  };

  const handleSubmit = async () => {
    if (!campaignName || !totalSpent || !visitCount) {
      setMessage("Please fill all fields.");
      return;
    }

    try {
      setLoading(true);
      const rules = {
        totalSpent: { operator: "gt", value: parseInt(totalSpent) },
        visitCount: { operator: "lt", value: parseInt(visitCount) },
      };

      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/campaigns`,
        {
          name: campaignName,
          rules,
        },
        { withCredentials: true }
      );

      setAudience(res.data.audience);
      setMessage("✅ Campaign created and matched audience loaded.");
    } catch (err) {
      console.error(err);
      setMessage("❌ Error creating campaign.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto" }}>
      <h2>Create New Campaign</h2>

      <input
        type="text"
        placeholder="Campaign Name"
        value={campaignName}
        onChange={(e) => setCampaignName(e.target.value)}
        style={{ display: "block", marginBottom: "10px", width: "100%" }}
      />

      <input
        type="number"
        placeholder="Total Spent greater than"
        value={totalSpent}
        onChange={(e) => setTotalSpent(e.target.value)}
        style={{ display: "block", marginBottom: "10px", width: "100%" }}
      />

      <input
        type="number"
        placeholder="Visit Count less than"
        value={visitCount}
        onChange={(e) => setVisitCount(e.target.value)}
        style={{ display: "block", marginBottom: "10px", width: "100%" }}
      />

      <button onClick={handleSubmit} disabled={loading}>
        {loading ? "Creating..." : "Create Campaign"}
      </button>

      <p style={{ marginTop: "10px" }}>{message}</p>

      {audience.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h4>Matched Audience: {audience.length} users</h4>
          <ul>
            {audience.map((cust) => (
              <li key={cust.id} style={{ marginBottom: "10px" }}>
                <strong>{cust.name}</strong> ({cust.email})<br />
                <em>{generateMessage(cust)}</em>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default AudienceBuilder;
