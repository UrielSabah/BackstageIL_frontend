import React, { useState, useEffect } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Loader2, Building2 } from "lucide-react";
import HallInfo from '../components/halls/HallInfo';
import HallPictures from '../components/halls/HallPictures';
import HallRecommendations from '../components/halls/HallRecommendations';
import GoogleAd from '../components/ads/GoogleAd';

export default function Home() {
  const [selectedHall, setSelectedHall] = useState("hall1");
  const [view, setView] = useState("info");
  const [loading, setLoading] = useState(false);

  const mockHalls = [
    { id: "hall1", name: "Lincoln Opera House" },
    { id: "hall2", name: "Chicago Symphony Center" },
    { id: "hall3", name: "The Anthem Music Hall" },
    { id: "hall4", name: "Red Rocks Amphitheatre" },
    { id: "hall5", name: "Madison Square Garden" }
  ];

  const hallData = {
    hall1: {
      name: "Lincoln Opera House",
      location: "123 Lincoln Ave, Chicago, IL",
      capacity: 500,
      description: "A beautiful venue for all musical occasions with state-of-the-art sound system.",
      features: ['WiFi', 'Parking', 'Catering', 'Sound System', 'Lighting Equipment', 'Backstage Rooms'],
      contact: "contact@lincolnoperahouse.com",
      pictures: [
        "https://images.unsplash.com/photo-1519167758481-83f550bb49b3",
        "https://images.unsplash.com/photo-1522158637959-30385a09e0da",
        "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3"
      ],
      recommendations: [
        { text: "Ideal for acoustic performances and intimate concerts", author: "Facility" },
        { text: "Great space for jazz bands and small orchestras", author: "Facility" },
        { text: "Suitable for recording live performances with excellent acoustics", author: "Facility" }
      ]
    },
    hall2: {
      name: "Chicago Symphony Center",
      location: "220 Michigan Ave, Chicago, IL",
      capacity: 2500,
      description: "World-class acoustics in a stunning architectural setting in downtown Chicago.",
      features: ['Wheelchair Access', 'Full Orchestra Pit', 'Premium Sound', 'VIP Boxes', 'Restaurant', 'Coat Check'],
      contact: "events@chicagosymphony.org",
      pictures: [
        "https://images.unsplash.com/photo-1547816146-2118e3a34741",
        "https://images.unsplash.com/photo-1478147427282-58a87a120781",
        "https://images.unsplash.com/photo-1488379356162-31fc4b8c8564"
      ],
      recommendations: [
        { text: "Perfect for classical concerts and orchestra performances", author: "Facility" },
        { text: "Excellent for formal music events and prestigious occasions", author: "Facility" },
        { text: "Great acoustics for both amplified and non-amplified performances", author: "John D., Orchestra Director" }
      ]
    },
    hall3: {
      name: "The Anthem Music Hall",
      location: "901 Wharf St, Washington, DC",
      capacity: 6000,
      description: "Modern concert venue with flexible capacity and cutting-edge production capabilities.",
      features: ['Standing Area', 'Tiered Seating', 'Multiple Bars', 'State-of-the-art Sound', 'Advanced Lighting', 'Artist Lounges'],
      contact: "bookings@anthemdc.com",
      pictures: [
        "https://images.unsplash.com/photo-1501386761578-eac5c94b800a",
        "https://images.unsplash.com/photo-1574068608578-9524a5e13e98",
        "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14"
      ],
      recommendations: [
        { text: "Ideal for rock concerts and live performances with large audiences", author: "Facility" },
        { text: "Flexible space works well for both general admission and seated events", author: "Facility" },
        { text: "Great venue for touring bands with impressive production requirements", author: "Sarah K., Tour Manager" }
      ]
    },
    hall4: {
      name: "Red Rocks Amphitheatre",
      location: "18300 W Alameda Pkwy, Morrison, CO",
      capacity: 9500,
      description: "Iconic outdoor amphitheatre nestled between massive red rock formations.",
      features: ['Natural Acoustics', 'Open Air Venue', 'Stunning Views', 'Historic Site', 'Hiking Trails', 'Visitor Center'],
      contact: "redrocks@denver.org",
      pictures: [
        "https://images.unsplash.com/photo-1506157786151-b8491531f063",
        "https://images.unsplash.com/photo-1526047932273-341f2a7631f9",
        "https://images.unsplash.com/photo-1520638023360-f7728801325a"
      ],
      recommendations: [
        { text: "Breathtaking setting for outdoor concerts during summer months", author: "Facility" },
        { text: "Perfect for bands looking for a unique and memorable concert location", author: "Facility" },
        { text: "Excellent venue for live recordings and concert films", author: "Michael B., Producer" }
      ]
    },
    hall5: {
      name: "Madison Square Garden",
      location: "4 Pennsylvania Plaza, New York, NY",
      capacity: 20000,
      description: "World's most famous arena hosting the biggest names in music and entertainment.",
      features: ['Arena Configuration', 'Theater Configuration', 'Premium Suites', 'Club Restaurants', 'Merchandise Stands', 'Historical Tours'],
      contact: "events@msg.com",
      pictures: [
        "https://images.unsplash.com/photo-1565693413579-8a92efbb4ba2",
        "https://images.unsplash.com/photo-1615588935997-9de2a33ee449",
        "https://images.unsplash.com/photo-1582994854226-4f6588f6928d"
      ],
      recommendations: [
        { text: "Iconic venue for major touring artists and world-class productions", author: "Facility" },
        { text: "Perfect for arena concerts with elaborate staging and production", author: "Facility" },
        { text: "Multiple configurations available for different types of performances", author: "Jennifer L., Event Coordinator" }
      ]
    }
  };

  const handleHallChange = (hallId) => {
    setLoading(true);
    setSelectedHall(hallId);
    
    // Simulate loading time
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  return (
    <div className="home-page-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="space-y-6">
          <div className="sidebar-header">
            <Building2 className="sidebar-icon" />
            <h2 className="sidebar-title">Hall Explorer</h2>
          </div>
          
          <div>
            <Label className="label-color">Select Hall</Label>
            <Select 
              value={selectedHall} 
              onValueChange={handleHallChange}
            >
              <SelectTrigger 
                className="mt-1 border-indigo-200 focus:ring-indigo-500 bg-white text-gray-900"
                style={{backgroundColor: "white", color: "#111827"}}
              >
                <SelectValue placeholder="Choose a hall" />
              </SelectTrigger>
              <SelectContent
                style={{backgroundColor: "white", color: "#111827"}}
              >
                {mockHalls.map((hall) => (
                  <SelectItem 
                    key={hall.id} 
                    value={hall.id}
                    style={{backgroundColor: "white", color: "#111827"}}
                  >
                    {hall.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="label-color">View Options</Label>
            <RadioGroup value={view} onValueChange={setView} className="mt-2 space-y-2">
              <div className="radio-option">
                <RadioGroupItem value="info" id="info" className="text-indigo-600" />
                <Label htmlFor="info" className="ml-2 text-gray-800">Hall Information</Label>
              </div>
              <div className="radio-option">
                <RadioGroupItem value="pictures" id="pictures" className="text-indigo-600" />
                <Label htmlFor="pictures" className="ml-2 text-gray-800">Hall Pictures</Label>
              </div>
              <div className="radio-option">
                <RadioGroupItem value="recommendations" id="recommendations" className="text-indigo-600" />
                <Label htmlFor="recommendations" className="ml-2 text-gray-800">Hall Recommendations</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="content">
        {/* Top Ad */}
        <GoogleAd slot="0987654321" format="horizontal" />
        
        {loading ? (
          <div className="loader-container">
            <Loader2 className="loader-icon" />
          </div>
        ) : (
          <div className="content-card">
            <h2 className="hall-name">
              {hallData[selectedHall]?.name}
            </h2>
            {view === "info" && <HallInfo hallData={hallData[selectedHall]} />}
            {view === "pictures" && <HallPictures pictures={hallData[selectedHall]?.pictures} />}
            {view === "recommendations" && <HallRecommendations recommendations={hallData[selectedHall]?.recommendations} />}
          </div>
        )}
        
        {/* Bottom Ad */}
        <GoogleAd slot="1122334455" format="horizontal" />
      </div>
    </div>
  );
}