import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ThumbsUp, MessageSquare, LightbulbIcon } from "lucide-react";

export default function HallRecommendations({ recommendations }) {
  if (!recommendations || recommendations.length === 0) {
    return (
      <div className="recommendations-empty-state">
        <LightbulbIcon className="w-12 h-12 mx-auto text-gray-300 mb-3" />
        <p>No recommendations available for this hall</p>
      </div>
    );
  }

  return (
    <div className="recommendations-container">
      <div className="info-box">
        <LightbulbIcon className="info-icon" />
        <p className="info-text">
          These are recommended uses and suggestions for this hall based on its facilities and features.
        </p>
      </div>
      
      {recommendations.map((rec, index) => (
        <Card key={index} className="recommendation-card">
          <CardContent className="recommendation-content">
            <div className="recommendation-inner">
              <ThumbsUp className="recommendation-icon" />
              <div>
                <p className="recommendation-text">{rec.text}</p>
                {rec.author && (
                  <p className="recommendation-author">
                    {rec.author === 'Facility' ? 'Suggested by facility management' : rec.author}
                  </p>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}

      <Card className="footer-card">
        <div className="footer-inner">
          <MessageSquare className="footer-icon" />
          <p className="footer-text">
            These recommendations are intended as suggestions only. Hall usage may vary based on your specific event needs.
          </p>
        </div>
      </Card>
    </div>
  );
}