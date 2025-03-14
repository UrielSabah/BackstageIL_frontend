import React from 'react';
import { ImageIcon } from "lucide-react";

export default function HallPictures({ pictures }) {
  if (!pictures || pictures.length === 0) {
    return (
      <div className="pictures-empty-state">
        <ImageIcon className="w-12 h-12 mx-auto text-gray-300 mb-3" />
        <p>No pictures available for this hall</p>
      </div>
    );
  }

  return (
    <div className="pictures-container">
      {pictures.map((url, index) => (
        <div key={index} className="image-card">
          <img
            src={url}
            alt={`Hall view ${index + 1}`}
            className="hall-image"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=60";
              e.target.alt = "Image placeholder";
            }}
          />
          <div className="image-overlay">
            <div className="image-caption">
              <span className="image-caption-text">View {index + 1}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}