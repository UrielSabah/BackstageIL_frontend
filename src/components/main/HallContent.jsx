import React from 'react';
import { Loader2, Building2 } from "lucide-react";
import HallInfo from '../halls/HallInfo';
import HallPictures from '../halls/HallPictures';
import HallRecommendations from '../halls/HallRecommendations';
import GoogleAd from '../ads/GoogleAd';

export default function HallContent({ selectedHall, view, loading, hallData }) {
  return (
    <div className="content">
      {/* Top Ad */}
      <GoogleAd slot="0987654321" format="horizontal" />
      
      {loading && selectedHall ? (
        <div className="loader-container">
          <Loader2 className="loader-icon" />
        </div>
      ) : !selectedHall ? (
        <div className="empty-state">
          <Building2 className="empty-state-icon" />
          <p className="empty-state-text">Please select a hall to view its information</p>
        </div>
      ) : (
        <div className="content-card">
          <h2 className="hall-name">
            {hallData?.name}
          </h2>
          {view === "info" && <HallInfo hallData={hallData} />}
          {view === "pictures" && <HallPictures pictures={hallData?.pictures} />}
          {view === "recommendations" && <HallRecommendations recommendations={hallData?.recommendations} />}
        </div>
      )}
      
      {/* Bottom Ad */}
      <GoogleAd slot="1122334455" format="horizontal" />
    </div>
  );
}