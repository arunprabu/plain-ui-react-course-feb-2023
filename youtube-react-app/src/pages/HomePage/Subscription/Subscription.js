import React from 'react';
import './Subscription.css';

const Subscription = () => {
  const myStyles = {
    renewStyles: {
      color: "#000",
      backgroundColor: "yellow",
      borderRadius: "10px",
      padding: "20px",
      border: "dashed 6px red",
    },
    btnStyles: {
      border: "solid 2px red",
      backgroundColor: "red",
      color: "#fff",
      padding: "10px",
    },
  };

  return (
    // we have used external css class from bootstrap
    <div className="text-center">
      {/* External CSS -- Refer Subscription.css */}
      <h3 className="subscription-info">
        You are an Active Subscriber of YouTube Pro!
      </h3>

      {/* Inline Styles - NEVER EVER TRY THIS IN LISTS (loops) */}
      <p
        style={{
          color: "#fff",
          backgroundColor: "red",
          borderRadius: "10px",
          padding: "10px 20px",
        }}
      >
        Your Subscription will end in 18 days!
      </p>

      {/* Internal Styles */}
      <p style={myStyles.renewStyles}>
        Renew Now at 50% discount. Apply Coupon: OFFER50
      </p>

      <button type="button" style={myStyles.btnStyles}>
        RENEW NOW
      </button>
    </div>
  );
}

export default Subscription